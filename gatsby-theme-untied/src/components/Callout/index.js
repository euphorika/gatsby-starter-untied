import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styles from './styles.module.styl'

const Callout = ({ message, button }) => (
  <section className={styles.calloutSection}>
    <h2 className={styles.message}> {message} </h2>
    <button className={styles.button}>
      <Link to={button.link} className={styles.buttonLink}>
        <span className={styles.text}> {button.text}</span>
      </Link>
    </button>
  </section>
)

Callout.propTypes = {
  message: PropTypes.string.isRequired,
  button: PropTypes.shape({
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }),
}
export default Callout
