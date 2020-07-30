import React from 'react'
import { PhotoCardWithQuery } from '../containers/PhotoCardWithQuery'
import Layout from '../components/Layout'

const Detail = ({ detailId }) => {
  return (
    <Layout title={`Photography ${detailId}`}>
      <PhotoCardWithQuery Id={detailId} />
    </Layout>
  )
}

export default Detail
