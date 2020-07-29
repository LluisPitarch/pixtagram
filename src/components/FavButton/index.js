import React from 'react'
import useToggleLikeMutation from '../../hooks/useToggleLikeMutation'

// ⁄Styles
import { Button, Span } from './styles'

// Icons
import { IoIosHeartEmpty, IoIosHeart } from 'react-icons/io'

const FavButton = ({ id, liked, likes, onClick }) => {
  // Boolean icon render
  const Icon = liked ? IoIosHeart : IoIosHeartEmpty

  const handleClick = () => {
    onClick()
    useToggleLikeMutation(id)
  }

  return (
    <Button onClick={handleClick}>
      <Icon size="25px" />
      {likes}
      <Span>¡Dislike!</Span>
    </Button>
  )
}

export default FavButton
