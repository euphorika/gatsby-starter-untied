import React from 'react'
import PropTypes from 'prop-types'

import FormMessage from './message'

import styles from './input.module.styl'

const Input = ({
  value,
  name,
  type = 'text',
  label,
  message = {},
  options,
}) => {
  const input = (
    <>
      <input
        className={styles.element}
        {...options}
        value={value}
        name={name}
        type={type}
      />
      <span className={styles.afterFormElement} />
    </>
  )

  if (label) {
    return (
      <div className={styles.elementContainer}>
        <label>
          {label}
          {input}
        </label>
      </div>
    )
  }

  return (
    <div className={styles.elementContainer}>
      <FormMessage type={message.type}>{message.text}</FormMessage>
      {input}
    </div>
  )
}

export default Input

Input.propTypes = {
  value: PropTypes.any,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string,
  message: PropTypes.object,
  options: PropTypes.object,
}
