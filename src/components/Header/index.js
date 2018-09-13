import React from 'react'
import { Link } from 'gatsby'

import Navigation from '../Navigation'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
        display: 'flex',
        justifyContent: 'flex-end'
      }}
    >
      <h1 style={{
         margin: 0,
         fontSize: '18px'
       }}
      >
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <Navigation />
    </div>
  </div>
)

export default Header
