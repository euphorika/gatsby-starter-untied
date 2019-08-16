/** @jsx jsx */
import React from 'react'
import DotKontorIcon from './dot-kontur-icon.js'

import { jsx } from 'theme-ui'

class CarouselIndicator extends React.Component {
  render() {
    return (
      <li
        sx={{
          width: '20px',
          height: '18px',
          borderRadius: '50%',
          mr: '5px',
          textAlign: 'center',

          '&:hover': {
            bg: 'primary',
          },
        }}
      >
        <a
          href={this.props.href}
          className={
            this.props.index === this.props.activeIndex
              ? 'carousel-indicator carousel-indicator--active'
              : null
          }
        >
          <DotKontorIcon
            sx={{
              fill: 'primary',
            }}
          />
        </a>
      </li>
    )
  }
}
export default CarouselIndicator
