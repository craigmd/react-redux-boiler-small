import React, { PropTypes } from 'react'

const propTypes = {
  children: PropTypes.node
}

const Layout = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  )
}

Layout.propTypes = propTypes

export default Layout
