import React from 'react'
import { Nav, Link } from './styles'
import { IoIosHeart, IoMdHome } from 'react-icons/io'
import { FaUserAlt } from 'react-icons/fa'

const NavBar = () => {
  return (
    <Nav>
      <Link to="/">
        <IoMdHome size="30px" />
      </Link>
      <Link to="/favs">
        <IoIosHeart size="30px" />
      </Link>
      <Link to="/user">
        <FaUserAlt size="25px" />
      </Link>
    </Nav>
  )
}

export default NavBar
