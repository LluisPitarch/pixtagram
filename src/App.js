import React from 'react'
import Context from './Context'

// Styles
import { GlobalStyles } from './styles/GlobalStyles'

// Pages
import Home from './pages/Home'
import NotRegisteredUser from './pages/NotRegisteredUser'
import User from './pages/User'
import Favs from './pages/Favs'

// Components
import Logo from './components/Logo'
import Detail from './pages/Detail'
import NavBar from './components/NavBar'

// Router
import { Router } from '@reach/router'

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Logo />
      <Router>
        <Home path="/" />
        <Home path="/pet/:categoryId" />
        <Detail path="/detail/:detailId" />
      </Router>

      <Context.Consumer>
        {({ isAuth }) =>
          isAuth ? (
            <Router>
              <Favs path="/favs" />
              <User path="/user" />
            </Router>
          ) : (
            <Router>
              <NotRegisteredUser path="/favs" />
              <NotRegisteredUser path="/user" />
            </Router>
          )
        }
      </Context.Consumer>

      <NavBar />
    </>
  )
}

export default App
