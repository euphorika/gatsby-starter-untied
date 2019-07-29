import React from 'react'
import PropTypes from 'prop-types'

import styles from './button.module.styl'

const Button = ({ children, type, options }) => (
  <div className={styles.elementContainer}>
    <button className={styles.button} type={type} {...options}>
      {children}
    </button>
  </div>
)

export default Button

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string.isRequired,
  options: PropTypes.object,
}
