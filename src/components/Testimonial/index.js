import React from 'react'
import Img from 'gatsby-image'

import styles from './styles.module.styl'

const Testimonial = ({ children, name, imgFixed }) => (
  <section className={styles.testimonialSection}>
    <div className={styles.authorImg}><Img fixed={imgFixed} /></div>
    <blockquote>{children}</blockquote>
    <div className={styles.author}><strong>{name}</strong></div>
  </section>
)

export default Testimonial
