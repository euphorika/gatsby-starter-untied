import React from 'react'

import PropTypes from 'prop-types'
import styles from './styles.module.styl'

const numberOfSlides = 3

const Slider = ({ children }) => (
  <section
    className={styles.sliderSection}
    style={{ width: '100%', overflow: 'hidden' }}
  >
    <div
      className={styles.innerContainer}
      style={{
        width: numberOfSlides * 100 + '%',
        width: '300%',
        transition: 'all 1s',
        marginLeft: '-250px'
      }}
    >
      {' '}
      {children}
    </div>
  </section>
)

Slider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Slider

// translateX(- ( 100 / numberOfSlides * (currentSlide )) %)
