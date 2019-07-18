import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './styles.module.styl'

const Hero = ({ children, headline, button, imgFluid }) => (
  <section className={styles.heroSection}>
    <div className={styles.background}>
      <Img
        fluid={imgFluid}
        style={{ height: '100%' }}
        imgStyle={{ objectFit: 'cover' }}
      />
    </div>
    <div className={styles.info}>
      <h2>{headline}</h2>
      <p>{children}</p>
      <div>
        <button className={styles.button}>
          <Link to={button.link}>
            <span className={styles.text}>{button.text}</span>
          </Link>
        </button>
      </div>
    </div>
  </section>
)

Hero.propTypes = {
  children: PropTypes.node.isRequired,
  headline: PropTypes.string.isRequired,
  button: PropTypes.shape({
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }),
  imgFluid: PropTypes.object.isRequired,
}

export default Hero
