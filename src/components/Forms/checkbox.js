import React from 'react'
import PropTypes from 'prop-types'

import styles from './checkbox.module.styl'

const Checkbox = ({ value, checked, name, label, options }) => {
  const checkbox = (
    <>
      <input
        className={`${styles.element} ${styles.autoWidth}`}
        type="checkbox"
        value={value}
        name={name}
        checked={checked}
        {...options}
      />
      <span className={styles.afterFormElement} />
    </>
  )

  if (label) {
    return (
      <label className={styles.label}>
        {checkbox}
        {label}
      </label>
    )
  }

  return checkbox
}

export default Checkbox

Checkbox.propTypes = {
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  options: PropTypes.object
}
