/** @jsx jsx */
import React from 'react'
import PropTypes from 'prop-types'
import CarouselIndicator from './indicator.js'

import { jsx } from 'theme-ui'

class Carousel extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      slides: React.Children.toArray(this.props.children),
    }
  }

  render() {
    const { children } = this.props

    return (
      <div
        sx={{
          overflow: ['hidden', 'auto'],
          mx: 'auto',
          my: '0',
          width: ['90%', '100%'],
          padding: [2, 0],
        }}
      >
        <div
          sx={{
            display: 'flex',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            scrollBehavior: 'smooth',
            scrollbarWidth: 'none',
            '::webkitScrollbar': {
              display: 'none',
            },
          }}
        >
          {children}
        </div>
        <div>
          <ul
            sx={{
              display: ['flex', 'none'],
              justifyContent: 'center',
              listStyleType: 'none',
              ml: '5px',
            }}
          >
            {this.state.slides.map((slide, index) => (
              <CarouselIndicator
                key={index}
                index={index}
                href={`#slide-${index}`}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

Carousel.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Carousel
