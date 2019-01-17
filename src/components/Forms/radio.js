import React from 'react'

import styles from './radio.module.styl'

const Checkbox = ({ checked, name, label, options }) => {
  const radio = (
    <>
      <input
        className={styles.element}
        type="radio"
        name={name}
        checked={checked}
        {...options}
      />
      <span className={styles.afterCheckbox} />
    </>
  )

  if (label) {
    return (
      <label className={styles.label}>
        {label}
        {radio}
      </label>
    )
  }

  return radio
}

export default Checkbox
