/** @jsx jsx */
import React from 'react'
import PropTypes from 'prop-types'

import { jsx } from 'theme-ui'
import { Styled } from 'theme-ui'
import { Link } from 'gatsby'

import MenuOpen from './menu-open.js'
import MenuClose from './menu-close.js'

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
        <Styled.a
          as={Link}
          to={entry.node.link}
          {...(!!entry.node.title ? { title: entry.node.title } : {})}
          {...(!!entry.node.target ? { target: entry.node.target } : {})}
          activeClassName="active"
        >
          {entry.node.name}
        </Styled.a>
      </li>
    ))

  calculateHorizontalPosition = horizontalAlignment => {
    switch (horizontalAlignment) {
      case 'right':
        return 'horizontal-align-right'
      case 'left':
        return 'horizontal-align-left'
      case 'center':
      default:
        return 'horizontal-align-center'
    }
  }

  calculateVerticalPosition = verticalAlignment => {
    switch (verticalAlignment) {
      case 'top':
        return 'vertical-align-top'
      case 'bottom':
        return 'vertical-align-bottom'
      case 'center':
      default:
        return 'vertical-align-center'
    }
  }

  render() {
    const toggleVisibilityClass = this.state.navigationVisible ? 'open' : ''
    const horizontalAlignmentClass = this.calculateHorizontalPosition(
      this.state.horizontalAlignment
    )
    const verticalAlignmentClass = this.calculateVerticalPosition(
      this.state.verticalAlignment
    )

    return (
      <div>
        <button
          id="nav-link"
          sx={{
            variant: 'buttons.nav',
          }}
          onClick={e => {
            this.setState({ navigationVisible: !this.state.navigationVisible })
          }}
        >
          <MenuOpen />
        </button>
        <div
          id="menu"
          className={`${toggleVisibilityClass} ${horizontalAlignmentClass} ${verticalAlignmentClass}`}
          sx={{
            display: 'none',
            position: 'fixed',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            zIndex: 100,
            p: '15px',
            bg: 'primary',
            '&.open': {
              display: 'flex',
            },
            '&.horizontal-align-center': {
              justifyContent: 'center',
            },
            '&.horizontal-align-left': {
              justifyContent: 'flex-start',
            },
            '&.horizontal-align-right': {
              justifyContent: 'flex-end',
            },
            '&.vertical-align-center': {
              alignItems: 'center',
            },
            '&.vertical-align-top': {
              alignItems: 'flex-start',
            },
            '&.vertical-align-bottom': {
              alignItems: 'flex-end',
            },
          }}
        >
          <button
            id="nav-close"
            sx={{
              variant: 'buttons.nav',
            }}
            onClick={() => {
              this.setState({ navigationVisible: false })
            }}
          >
            <MenuClose />
          </button>
          <nav>
            <Styled.ul>
              {this.renderNavigationEntries(this.state.entries)}
            </Styled.ul>
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
