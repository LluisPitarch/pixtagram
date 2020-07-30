import React from 'react'
import { useGetFavs } from '../hooks/useGetFavs'

import loader from '../assets/images/loader.gif'
import ListOfFavs from '../components/ListOfFavs'
import Layout from '../components/Layout'

const Favs = () => {
  const { loading, data, error } = useGetFavs()

  console.log(data)
  return (
    <>
      <Layout
        title={`Your favorite Photos`}
        subtitle="Your favorite professional pics from photographers"
      >
        {loading ? (
          <div>
            <img src={loader} />
          </div>
        ) : (
          <ListOfFavs favs={data.favs} />
        )}
      </Layout>
    </>
  )
}

export default Favs
