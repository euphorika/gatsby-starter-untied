import React from 'react'

import PropTypes from 'prop-types'
import styles from './styles.module.styl'

const Slider = ({ children }) => (
  <section className={styles.sliderSection}>
    <div className={styles.innerContainer}> {children}</div>
  </section>
)

Slider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Slider
