import React from 'react'
import { Context } from '../Context'
import UserForm from '../components/UserForm'

const NotRegisteredUser = () => (
  <Context.Consumer>
    {({ activateAuth }) => (
      <>
        <UserForm title="Login" onSubmit={activateAuth} />
        <UserForm title="Register" onSubmit={activateAuth} />
      </>
    )}
  </Context.Consumer>
)

export default NotRegisteredUser
