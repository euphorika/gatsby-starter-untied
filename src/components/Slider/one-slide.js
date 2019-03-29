import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import styles from './styles.module.styl'

const OneSlide = ({ image }) => (
  <div className={styles.oneSlider}>
    <Img fluid={image} />
  </div>
)

OneSlide.propTypes = {
  image: PropTypes.object.isRequired,
}

export default OneSlide
