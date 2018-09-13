import React from 'react'
import { Link } from 'gatsby'

import styles from './styles.module.styl'

class Navigation extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      navigationVisible: false
    }
  }

  render() {
    return (
      <div>
        <button
          className={styles.navLink}
          id="nav-link"
          onClick={(e) => {this.setState({navigationVisible: !this.state.navigationVisible})}}>
          ☰
        </button>
        <nav className={this.state.navigationVisible ? styles.menu + ' ' + styles.open : styles.menu} id="menu">
          <ul>
            <li><Link to="#">Menu Entry 1</Link></li>
            <li><Link to="#">Menu Entry 2</Link></li>
            <li><Link to="#">Menu Entry 3</Link></li>
            <li><Link to="#">Menu Entry 4</Link></li>
            <li><Link to="#">Menu Entry 5</Link></li>
            <li><Link to="#">Menu Entry 6</Link></li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Navigation
