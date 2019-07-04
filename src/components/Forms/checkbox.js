import React from 'react'
import PropTypes from 'prop-types'

import FormMessage from './message'

import styles from './checkbox.module.styl'

const Checkbox = ({ value, checked, name, label, message = {}, options }) => {
  const checkbox = (
    <>
      <input
        className={styles.element}
        type="checkbox"
        value={value}
        name={name}
        checked={checked}
        {...options}
      />
      <span className={styles.afterFormElement} />
      <span className={styles.checkmark} />
    </>
  )

  return (
    <div className={styles.elementContainer}>
      <FormMessage type={message.type}>{message.text}</FormMessage>
      <span className={styles.checkable}>
        <label className={styles.label}>
          {checkbox}
          {label}
        </label>
      </span>
    </div>
  )
}

export default Checkbox

Checkbox.propTypes = {
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  message: PropTypes.object,
  options: PropTypes.object,
}
