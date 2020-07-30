import React from 'react'
import { Helmet } from 'react-helmet'

const Layout = ({ children, title, subtitle }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        {title && <title>{title} | Pixtagram </title>}
        {subtitle && <meta name="description" content={{ subtitle }} />}
      </Helmet>

      <div>
        {title && <h1>{title}</h1>}
        {subtitle && <h2>{subtitle}</h2>}
        {children}
      </div>
    </>
  )
}

export default Layout
