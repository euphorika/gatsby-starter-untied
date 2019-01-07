import React from 'react'
import PropTypes from 'prop-types'

import Img from 'gatsby-image'

import styles from './styles.module.styl'

const Testimonial = ({ children, name, imgFixed }) => (
  <section className={styles.testimonialSection}>
    <div className={styles.authorImg}><Img fixed={imgFixed} /></div>
    <blockquote>{children}</blockquote>
    <div className={styles.author}><strong>{name}</strong></div>
  </section>
)

Testimonial.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  imgFixed: PropTypes.object.isRequired,
}

export default Testimonial
