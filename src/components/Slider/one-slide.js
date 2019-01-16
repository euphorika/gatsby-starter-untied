import React from 'react'
import Img from 'gatsby-image'
import styles from './styles.module.styl'

const OneSlide = ({ image }) => (
  <div className="one-slide" style={{ width: '100%' }}>
    <div className={styles.image}>
      <Img fixed={image} />
    </div>
  </div>
)

export default OneSlide
