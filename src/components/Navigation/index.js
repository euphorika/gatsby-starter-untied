import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import styles from './styles.module.styl'

class Navigation extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      navigationVisible: false,
      horizontalAlignment: this.props.horizontalAlignment || 'center',
      verticalAlignment: this.props.verticalAlignment || 'center',
      entries: this.props.entries
    }
  }

  _renderNavigationEntries(entries) {
    return entries.map((entry, key) => <li key={key}><Link to={entry.to} title={entry.title}>{entry.text}</Link></li>)
  }

  _calculateHorizontalPosition(horizontalAlignment) {
    switch(horizontalAlignment) {
      case 'right':
        return styles.horizontalAlignRight
      case 'left':
        return styles.horizontalAlignLeft
      case 'center':
      default:
        return styles.horizontalAlignCenter
    }
  }

  _calculateVerticalPosition(verticalAlignment) {
    switch(verticalAlignment) {
      case 'top':
        return styles.verticalAlignTop
      case 'bottom':
        return styles.verticalAlignBottom
      case 'center':
      default:
        return styles.verticalAlignCenter
    }
  }

  render() {
    const toggleVisibilityClass = this.state.navigationVisible ? `${styles.menu} ${styles.open}` : styles.menu
    const horizontalAlignmentClass =  this._calculateHorizontalPosition(this.state.horizontalAlignment)
    const verticalAlignmentClass = this._calculateVerticalPosition(this.state.verticalAlignment)

    return (
      <div>
        <button
          className={styles.navLink}
          id="nav-link"
          onClick={(e) => {this.setState({navigationVisible: !this.state.navigationVisible})}}>
          ☰
        </button>
        <nav className={`${toggleVisibilityClass} ${horizontalAlignmentClass} ${verticalAlignmentClass}`} id="menu">
          <ul>
            {this._renderNavigationEntries(this.state.entries)}
          </ul>
        </nav>
      </div>
    )
  }
}

Navigation.propTypes = {
  navigationVisible: PropTypes.bool,
  horizontalAlignment: PropTypes.oneOf(['right', 'center', 'left']),
  verticalAlignment: PropTypes.oneOf(['top', 'center', 'bottom']),
  entries: PropTypes.array.isRequired,
}

export default Navigation
