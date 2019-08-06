import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.module.styl'

const Carousel = ({ children }) => {
  return (
    <div className={styles.Carousel}>
      <div className={styles.carouselSlides}>{children}</div>
    </div>
  )
}

Carousel.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Carousel
