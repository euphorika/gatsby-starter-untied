import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'

import Navigation from '../Navigation/'
import Logo from '../Logo/'

import styles from './styles.module.styl'

export const PureHeader = ({ siteTitle, data }) => (
  <div className={styles.headerContainer}>
    <header>
      <h1>
        <Link to="/">
          <Logo />
        </Link>
        <Link to="/">{siteTitle}</Link>
      </h1>
      <Navigation entries={data.allMainNavigationYaml.edges} />
    </header>
  </div>
)

const Header = props => {
  return (
    <StaticQuery
      query={graphql`
        query MainNavigationQuery {
          allMainNavigationYaml {
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
        }
      `}
      render={data => <PureHeader {...props} data={data} />}
    />
  )
}

export default Header
