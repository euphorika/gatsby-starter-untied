import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import styles from './styles.module.styl'

class Navigation extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      navigationVisible: false,
      entries: this.props.entries
    }
  }

  _renderNavigationEntries(entries) {
    return entries.map((entry, key) => <li key={key}><Link to={entry.to} title={entry.title}>{entry.text}</Link></li>)
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
            {this._renderNavigationEntries(this.state.entries)}
          </ul>
        </nav>
      </div>
    )
  }
}

Navigation.propTypes = {
  entries: PropTypes.array.isRequired,
}

export default Navigation
