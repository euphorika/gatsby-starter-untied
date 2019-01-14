import React from 'react'

import styles from './styles.module.styl'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Hero = ({ children, headline, button }) => (
  <section className={styles.heroSection}>
    <h2>{headline}</h2>
    <p>{children}</p>
    <div>
      <button className={styles.button}>
        <Link to={button.link}>
          <span className={styles.text}>{button.text}</span>
        </Link>
      </button>
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
}

export default Hero
