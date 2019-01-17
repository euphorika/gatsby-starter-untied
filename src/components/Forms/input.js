import React from 'react'

import styles from './input.module.styl'

const Input = ({ value, name, type = 'text', label, options }) => {
  const input = (
    <>
      <input
        className={styles.element}
        {...options}
        value={value}
        name={name}
        type={type}
      />
      <span className={styles.afterInput} />
    </>
  )

  if (label) {
    return (
      <label>
        {label}
        {input}
      </label>
    )
  }

  return input
}

export default Input
