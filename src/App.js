import React, { useContext, lazy, Suspense } from 'react'
import { Context } from './Context'

// Styles
import { GlobalStyles } from './styles/GlobalStyles'

// Pages
const Home = React.lazy(() => import('./pages/Home'))
const NotRegisteredUser = React.lazy(() => import('./pages/NotRegisteredUser'))
const User = React.lazy(() => import('./pages/User'))
const NotFound = React.lazy(() => import('./pages/NotFound'))
const Favs = React.lazy(() => import('./pages/Favs'))

// Components
import Logo from './components/Logo'
import Detail from './pages/Detail'
import NavBar from './components/NavBar'

// Router
import { Router, Redirect } from '@reach/router'

const App = () => {
  const { isAuth } = useContext(Context)
  return (
    <Suspense fallback={<div />}>
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
    </Suspense>
  )
}

export default App
