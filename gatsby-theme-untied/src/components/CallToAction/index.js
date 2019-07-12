import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.styl'
import { Link } from 'gatsby'

const CallToAction = ({ button }) => (
  <section className={styles.callToActionSection}>
    <button className={styles.button}>
      <Link to={button.link}>
        <span> {button.text} </span>
      </Link>
    </button>
  </section>
)

CallToAction.propTypes = {
  button: PropTypes.shape({
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }),
}

export default CallToAction
