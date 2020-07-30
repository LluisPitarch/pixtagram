import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'

const GET_FAVS = gql`
  query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`

export const useGetFavs = () => {
  const { loading, data, error } = useQuery(GET_FAVS, {
    fetchPolicy: 'network-only',
  })

  return { loading, data, error }
}
