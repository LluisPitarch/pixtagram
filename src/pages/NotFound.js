import React from 'react'
import SubmitButton from '../components/SubmitButton'

const NotFound = () => {
  return (
    <>
      <h1>Error 404</h1>
      <SubmitButton onClick={() => (window.location.href = '/')}>
        Go Home
      </SubmitButton>
    </>
  )
}

export default NotFound
