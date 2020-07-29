import React, { useState } from 'react'

import { useInputValue } from '../../hooks/useInputValue'
import { Form, Input, Button, Title, Error, Loader } from './styles'

import loader from '../../assets/images/loader.gif'

// Register Hook
import useFormToDB from '../../hooks/useFormToDB'

const UserForm = ({ onSubmit, title }) => {
  const [errorForm, setErrorForm] = useState('')
  const [disabled, setDisabled] = useState(false)

  const { method, token, loading, error } = useFormToDB(title)

  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      setDisabled(true)
      const response = await method({
        variables: {
          input: {
            email: email.value,
            password: password.value,
          },
        },
      })
      setDisabled(false)
      onSubmit(response.data.signup || response.data.login)
    } catch (error) {
      setDisabled(false)
      setErrorForm(error)
    }
  }

  const errorMsg = error && 'Error test'
  return (
    <>
      <Title>{title}</Title>
      <Form onSubmit={handleSubmit}>
        <label>Email</label>
        <Input
          disabled={disabled}
          placeholder="Email"
          {...email}
          type="email"
        />
        <label>Password</label>
        <Input
          disabled={disabled}
          placeholder="Password"
          {...password}
          type="text"
        />
        {errorForm && (
          <Error>
            {title === 'Register'
              ? 'Your mail is already registered'
              : 'Email or password incorrect'}
          </Error>
        )}
        <Button type="submit" disabled={disabled}>
          {loading ? <Loader src={loader} /> : <span>{title}</span>}
        </Button>
      </Form>
    </>
  )
}

export default UserForm
