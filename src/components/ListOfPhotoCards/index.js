import React from 'react'
import { useGetPhotos } from '../../hooks/getPhotos'
import { PhotoCard } from '../PhotoCard'

export const ListOfPhotoCards = ({ categoryId }) => {
  const { loading, error, data } = useGetPhotos(categoryId)
  if (loading) {
    return 'Loading...'
  }
  if (error) {
    return <p>error</p>
  }
  return (
    <ul>
      {data.photos.map((photo) => (
        <PhotoCard key={photo.id} {...photo}></PhotoCard>
      ))}
    </ul>
  )
}
