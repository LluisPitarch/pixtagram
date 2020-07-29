import { useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

const REGISTER = gql`
  mutation signup($input: UserCredentials!) {
    signup(input: $input)
  }
`

const LOGIN = gql`
  mutation login($input: UserCredentials!) {
    login(input: $input)
  }
`

const useFormToDB = (title) => {
  if (title === 'Register') {
    let token = ''
    const [method, { data, loading, error }] = useMutation(REGISTER)
    data ? (token = data.data) : ''
    return { method, token, loading, error }
  }
  if (title === 'Login') {
    let token = ''
    const [method, { data, loading, error }] = useMutation(LOGIN)
    data ? (token = data.data) : ''
    return { method, token, loading, error }
  }
}

export default useFormToDB
