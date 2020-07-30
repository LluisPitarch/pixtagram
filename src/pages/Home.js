import React from 'react'
import { Helmet } from 'react-helmet'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../components/ListOfPhotoCards'

const HomePage = ({ categoryId }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Photos for HQ photographers | Pixtagram</title>
        <meta
          name="description"
          content="Pixtagram is a space to share photos of professional photographers"
        />
        <link rel="canonical" href="/" />
      </Helmet>

      <ListOfCategories />
      <ListOfPhotoCards categoryId={categoryId} />
    </>
  )
}

const Home = React.memo(HomePage)
export default Home
