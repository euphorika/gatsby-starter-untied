import React from 'react'
import PropTypes from 'prop-types'

import FormMessage from './message'

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
      <span className={styles.afterFormElement} />
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

  return (
    <div>
      <FormMessage>Hier ist alles in Ordnung!</FormMessage>
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
  messages: PropTypes.array,
  options: PropTypes.object,
}
