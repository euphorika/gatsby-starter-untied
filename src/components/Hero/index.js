import React from 'react'

import styles from './styles.module.styl'
import PropTypes from 'prop-types'
	

const Hero = ({ children}) => (
  <section className={styles.heroSection}>
    <div className = {styles.innerContainer}>{children}</div>

  </section>
)
Hero.PropTypes = {
  children: PropTypes.node.isRequired,
}

export default Hero
