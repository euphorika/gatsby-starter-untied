import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styles from './styles.module.styl'

const Callout = ({message, button}) => (
  <section className={styles.calloutSection}>
    <h1>{message}</h1>
    <div>
      <button className={styles.button}>
        <Link to = {button.link}>
          <text className={styles.text}> {button.text}</text>
        </Link>
      </button>
    </div>
  </section>
)

Callout.propTypes = {
  message: PropTypes.string.isRequired,
  button: PropTypes.shape({
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  })
}
export default Callout
