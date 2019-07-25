import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import MenuIcon from './menu-icon.js'

import styles from './styles.module.styl'

class Navigation extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      navigationVisible: false,
      horizontalAlignment: this.props.horizontalAlignment || 'center',
      verticalAlignment: this.props.verticalAlignment || 'center',
      entries: this.props.entries,
    }
  }

  renderNavigationEntries = entries =>
    entries.map((entry, key) => (
      <li key={key}>
        <Link
          to={entry.node.link}
          {...(!!entry.node.title ? { title: entry.node.title } : {})}
          {...(!!entry.node.target ? { target: entry.node.target } : {})}
          activeClassName={styles.active}
        >
          {entry.node.name}
        </Link>
      </li>
    ))

  calculateHorizontalPosition = horizontalAlignment => {
    switch (horizontalAlignment) {
      case 'right':
        return styles.horizontalAlignRight
      case 'left':
        return styles.horizontalAlignLeft
      case 'center':
      default:
        return styles.horizontalAlignCenter
    }
  }

  calculateVerticalPosition = verticalAlignment => {
    switch (verticalAlignment) {
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
    const toggleVisibilityClass = this.state.navigationVisible
      ? `${styles.menu} ${styles.open}`
      : styles.menu
    const horizontalAlignmentClass = this.calculateHorizontalPosition(
      this.state.horizontalAlignment
    )
    const verticalAlignmentClass = this.calculateVerticalPosition(
      this.state.verticalAlignment
    )

    return (
      <div>
        <button
          className={styles.navLink}
          id="nav-link"
          onClick={e => {
            this.setState({ navigationVisible: !this.state.navigationVisible })
          }}
        >
          <MenuIcon
            className={styles.menuIcon}
            fill="#f1f1f1"
            path="M0 0h17.91v1H0zM0 7.2h17.91v1H0zM0 14.39h17.91v1H0z"
            viewBox="0 0 13.37 13.37"
          />
        </button>
        <div
          className={`${toggleVisibilityClass} ${horizontalAlignmentClass} ${verticalAlignmentClass}`}
          id="menu"
        >
          <button
            className={styles.navClose}
            id="nav-close"
            onClick={() => {
              this.setState({ navigationVisible: false })
            }}
          >
            <MenuIcon
              className={styles.menuIcon}
              fill="#f1f1f1"
              path="M13.37.71L12.66 0 6.68 5.98.71 0 0 .71l5.98 5.97L0 12.66l.71.71 5.97-5.98 5.98 5.98.71-.71-5.98-5.98L13.37.71z"
              viewBox="0 0 17.91 15.39"
            />
          </button>
          <nav>
            <ul>{this.renderNavigationEntries(this.state.entries)}</ul>
          </nav>
        </div>
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
