import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'

import Navigation from '../Navigation'

import styles from './styles.module.styl'

const Header = ({ siteTitle }) => {
  return (
    <StaticQuery
      query={graphql`
        query MainNavigationQuery {
          allMenuEntryMain {
            edges {
              node {
                id
                name
                link
                title
                target
              }
            }
          }
        }`
      }
      render={data => (
        <div className={styles.headerContainer}>
          <header>
            <h1>
              <Link to="/">{siteTitle}</Link>
            </h1>
            <Navigation entries={data.allMenuEntryMain.edges} />
          </header>
        </div>
      )}
    />
  )
}

export default Header
