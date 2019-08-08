import React from 'react'
import DotKontorIcon from './dot-kontur-icon.js'

class CarouselIndicator extends React.Component {
  render() {
    return (
      <li>
        <a
          href={this.props.href}
          className={
            this.props.index === this.props.activeIndex
              ? 'carousel-indicator'
              : null
          }
        >
          <DotKontorIcon />
        </a>
      </li>
    )
  }
}
export default CarouselIndicator
