import React from 'react'
import Img from 'gatsby-image'
import styles from './styles.module.styl'
import Img from 'gatsby-image'

const OneSlide = ({ image }) => {
  return (
    <div className={styles.slide} style={{ width: '100%', height: '100%' }}>
      <div className={styles.image}>
        <Img fixed={image} />
      </div>
    </div>
  )
}

export default OneSlide
