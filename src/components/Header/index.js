import React from 'react'
import { Link } from 'gatsby'

import Navigation from '../Navigation'

import styles from './styles.module.styl'

const Header = ({ siteTitle }) => {

  const navigationEntries = [
    {
      text: 'Menu Entry 1',
      to: '#',
      title: null
    },{
      text: 'Menu Entry 2',
      to: '#',
      title: null
    },{
      text: 'Menu Entry 3',
      to: '#',
      title: null
    },{
      text: 'Menu Entry 4',
      to: '#',
      title: null
    },{
      text: 'Menu Entry 5',
      to: '#',
      title: null
    },{
      text: 'Menu Entry 6',
      to: '#',
      title: null
    }
  ]

  return (
    <div className={styles.headerContainer}>
      <header>
        <h1>
          <Link to="/">
            {siteTitle}
          </Link>
        </h1>
        <Navigation entries={navigationEntries} />
      </header>
    </div>
  )
}

export default Header
