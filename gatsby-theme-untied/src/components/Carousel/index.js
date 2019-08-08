import React from 'react'
import PropTypes from 'prop-types'
import CarouselIndicator from './indicator.js'

import styles from './styles.module.styl'

class Carousel extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      slides: React.Children.toArray(this.props.children),
    }
  }

  render() {
    const { children } = this.props
    const { activeIndex } = this.state

    return (
      <div className={styles.Carousel}>
        <div
          className={styles.carouselSlides}
          id={'slide' + this.state.activeIndex}
        >
          {children}
        </div>
        <div className={styles.carouselDots}>
          <ul className={styles.carouselIndicators}>
            {this.state.slides.map((slide, index) => (
              <CarouselIndicator
                key={index}
                index={index}
                href={'#' + 'slide' + '-' + index}
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
