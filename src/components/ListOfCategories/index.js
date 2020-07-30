import React, { useEffect, useState } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'
import axios from 'axios'

function useCategoriesData() {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(function () {
    const fetchCategories = async () => {
      try {
        setLoading(true)
        const categoryRes = await axios.get(
          'https://pixtagram-server.vercel.app/categories'
        )
        const data = await categoryRes.data
        setCategories(data)
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    fetchCategories()
  }, [])

  return { categories, loading }
}

export const ListOfCategoriesComponent = () => {
  const { categories, loading } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)

  /* --------- Checking the scroll tho render the fixedCategory style --------- */

  useEffect(
    function () {
      const onScroll = (e) => {
        const newShowFixed = window.scrollY > 200
        showFixed !== newShowFixed && setShowFixed(newShowFixed)
      }

      document.addEventListener('scroll', onScroll)

      return () => document.removeEventListener('scroll', onScroll)
    },
    [showFixed]
  )

  /* --------------------- Render list with the prop fixed -------------------- */

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {loading ? (
        <Item key="loading">
          <Category />
        </Item>
      ) : (
        categories.map((category) => (
          <Item key={category.id}>
            <Category {...category} path={`/pet/${category.id}`} />
          </Item>
        ))
      )}
    </List>
  )

  /* -------------------------------------------------------------------------- */
  /*                            Render the component                            */
  /* -------------------------------------------------------------------------- */

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}

export const ListOfCategories = React.memo(ListOfCategoriesComponent)
