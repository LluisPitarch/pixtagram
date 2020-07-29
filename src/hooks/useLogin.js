import { useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

const LOGIN = gql`
  mutation login($input: UserCredentials!) {
    signup(input: $input)
  }
`

const useLogin = () => {
  const [login, { data, loading, error }] = useMutation(LOGIN)

  return { login, data, loading, error }
}

export default useLogin
