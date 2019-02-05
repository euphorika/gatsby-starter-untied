import React from 'react'

import styles from './select.module.styl'

const Select = ({ children, name, label, options }) => {
  const select = (
    <>
      <select className={styles.element} name={name} {...options}>
        {children}
      </select>
    </>
  )

  if (label) {
    return (
      <label className={styles.label}>
        {label}
        {select}
      </label>
    )
  }

  return select
}

export default Select
