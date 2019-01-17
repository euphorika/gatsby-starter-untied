import React from 'react'

import styles from './checkbox.module.styl'

const Checkbox = ({ checked, name, label, options }) => {
  const checkbox = (
    <>
      <input
        className={styles.element}
        type="checkbox"
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
        {checkbox}
      </label>
    )
  }

  return checkbox
}

export default Checkbox
