import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'

import Navigation from '../Navigation'

import styles from './styles.module.styl'

export const PureHeader = ({ siteTitle, data }) => (
  <div className={styles.headerContainer}>
    <header>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
      <Navigation entries={data.allMenuEntryMain.edges} />
    </header>
  </div>
)

const Header = props => {
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
      render={data => <PureHeader {...props} data={data} />}
    />
  )
}

export default Header
