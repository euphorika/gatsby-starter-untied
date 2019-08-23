/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'

import Slide from './one-slide'
import ArrowLeft from './arrow-left.js'
import ArrowRight from './arrow-right.js'

class Slider extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      images: this.props.images || [],
      width: 100,
      slideIndex: 0,
    }
  }

  slideLeft() {
    this.setState({
      slideIndex:
        this.state.slideIndex === 0
          ? this.state.images.length - 1
          : (this.state.slideIndex - 1) % this.state.images.length,
    })
  }

  slideRight() {
    this.setState({
      slideIndex:
        this.state.slideIndex === this.state.images.length - 1
          ? 0
          : (this.state.slideIndex + 1) % this.state.images.length,
    })
  }

  renderNavigation() {
    return (
      <div
        sx={{
          position: 'absolute',
          top: 'calc(50% - 10px)',
          left: '0',
          right: '0',
          zIndex: '3',
        }}
      >
        <div
          role="button"
          sx={{
            cursor: 'pointer',
            width: '20px',
          }}
          onClick={() => this.slideLeft()}
        >
          <ArrowLeft />
        </div>
        <div
          role="button"
          sx={{
            cursor: 'pointer',
            width: '20px',
          }}
          onClick={() => this.slideRight()}
        >
          <ArrowRight />
        </div>
      </div>
    )
  }

  renderSlides() {
    return (
      <div
        sx={{
          transition: 'margin-left 0.5s',
        }}
        style={{
          width: `${this.state.images.length * this.state.width}%`,
          marginLeft: `-${this.state.width * this.state.slideIndex}%`,
          display: `flex`,
        }}
      >
        {this.state.images.map((image, index) => {
          return <Slide image={image.childImageSharp.fluid} key={index} />
        })}
      </div>
    )
  }

  render() {
    return (
      <div
        sx={{
          width: '100%',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <div
          sx={{
            marginBottom: '0',
          }}
        >
          {this.renderSlides()}
          {this.renderNavigation()}
        </div>
      </div>
    )
  }
}

Slider.propTypes = {
  images: PropTypes.array,
}

export default Slider
