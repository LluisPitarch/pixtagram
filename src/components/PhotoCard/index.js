import React from 'react'
import { Link } from '@reach/router'
import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'

const DEFAULT_IMAGE =
  'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

// Styles
import { Article, ImgContainer, Img, Button, Span } from './styles'

// Hooks
import useNearScreen from '../../hooks/useNearScreen'

// Import const TOGGLE_LIKE
const TOGGLE_LIKE = gql`
  mutation likePhoto($input: LikePhoto!) {
    likePhoto(input: $input) {
      id
      liked
      likes
    }
  }
`

import { IoIosHeartEmpty, IoIosHeart } from 'react-icons/io'

/* -------------------------------------------------------------------------- */
/*                                  Component                                 */
/* -------------------------------------------------------------------------- */

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE, liked }) => {
  const [toggleLike] = useMutation(TOGGLE_LIKE, {
    variables: { input: { id } },
  })
  const [show, ref] = useNearScreen()

  const Icon = liked ? IoIosHeart : IoIosHeartEmpty

  const handleFavClick = () => {
    toggleLike()
  }
  return (
    <Article ref={ref}>
      {show ? (
        <>
          <Link to={`/detail/${id}`}>
            <ImgContainer id="img__container">
              <Img src={src} alt="" />
            </ImgContainer>
          </Link>
          <Button onClick={handleFavClick}>
            <Icon size="25px" />
            {likes}
            <Span>¡Dislike!</Span>
          </Button>
        </>
      ) : (
        <></>
      )}
    </Article>
  )
}
