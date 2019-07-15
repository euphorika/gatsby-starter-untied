import React from 'react'
import PropTypes from 'prop-types'

import styles from './button.module.styl'

const Button = ({ children, type, options }) => (
  <button className={styles.button} type={type} {...options}>
    {children}
  </button>
)

export default Button

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string.isRequired,
  options: PropTypes.object,
}
