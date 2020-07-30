import React, { useContext } from 'react'
import { Context } from './Context'

// Styles
import { GlobalStyles } from './styles/GlobalStyles'

// Pages
import Home from './pages/Home'
import NotRegisteredUser from './pages/NotRegisteredUser'
import User from './pages/User'
import Favs from './pages/Favs'
import NotFound from './pages/NotFound'

// Components
import Logo from './components/Logo'
import Detail from './pages/Detail'
import NavBar from './components/NavBar'

// Router
import { Router, Redirect } from '@reach/router'

const App = () => {
  const { isAuth } = useContext(Context)
  return (
    <>
      <GlobalStyles />
      <Logo />
      <Router>
        <NotFound default />
        <Home path="/" />
        <Home path="/pet/:categoryId" />
        <Detail path="/detail/:detailId" />
        {!isAuth && <NotRegisteredUser path="/login" />}
        {!isAuth && <Redirect from="/favs" to="/login" />}
        {!isAuth && <Redirect from="/user" to="/login" />}
        <Favs path="/favs" />
        <User path="/user" />
      </Router>
      <NavBar />
    </>
  )
}

export default App
