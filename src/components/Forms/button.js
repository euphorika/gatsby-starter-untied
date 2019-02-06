import React from 'react'

import styles from './button.module.styl'

const Button = ({ children, type, options }) => (
  <button className={styles.button} type={type} {...options}>
    {children}
  </button>
)

export default Button
