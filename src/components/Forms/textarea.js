import React from 'react'

import styles from './textarea.module.styl'

const Textarea = ({ children, name, label, options }) => {
  const textarea = (
    <>
      <textarea
        className={styles.element}
        value={children}
        name={name}
        {...options}
      />
      <span className={styles.afterFormElement} />
    </>
  )

  if (label) {
    return (
      <label className={styles.label}>
        {label}
        {textarea}
      </label>
    )
  }

  return textarea
}

export default Textarea
