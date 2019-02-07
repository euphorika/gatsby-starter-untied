import React from 'react'

import styles from './radio.module.styl'

const Radio = ({ value, checked, name, label, options }) => {
  const radio = (
    <>
      <input
        className={`${styles.element} ${styles.autoWidth}`}
        type="radio"
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
        {radio}
        {label}
      </label>
    )
  }

  return radio
}

export default Radio
