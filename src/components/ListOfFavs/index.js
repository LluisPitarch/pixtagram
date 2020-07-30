import React from 'react'
import { Link, Image, Grid } from '../ListOfFavs/styles'

const ListOfFavs = ({ favs }) => {
  return (
    <Grid>
      {favs.map((fav) => (
        <Link key={fav.id} to={`/detail/${fav.id}`}>
          <Image src={fav.src} alt="" />
        </Link>
      ))}
    </Grid>
  )
}

export default ListOfFavs
