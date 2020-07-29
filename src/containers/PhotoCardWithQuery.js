import React from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import { PhotoCard } from '../components/PhotoCard'

const GET_SINGLE_PHOTO = gql`
  query getSinglePhoto($Id: ID!) {
    photo(id: $Id) {
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

export const PhotoCardWithQuery = ({ Id }) => {
  const { loading, data, error } = useQuery(GET_SINGLE_PHOTO, {
    variables: { Id },
  })

  if (loading) {
    return <p>...</p>
  }

  if (error) {
    console.log(error)
  }

  if (data) {
    return <PhotoCard {...data.photo} />
  }
}
