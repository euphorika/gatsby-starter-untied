import React from 'react'
import PropTypes from 'prop-types'

import FormMessage from './message'

import styles from './select.module.styl'

const Select = ({ children, name, label, message = {}, options }) => {
  const requiredClass = options && options.required ? ` ${styles.required}` : ''
  const select = (
    <>
      <div className={`${styles.selectBox}${requiredClass}`}>
        <select className={styles.element} name={name} {...options}>
          {children}
        </select>
        <span className={styles.afterFormElement} />
      </div>
      <FormMessage type={message.type}>{message.text}</FormMessage>
    </>
  )

  if (label) {
    return (
      <div className={styles.elementContainer}>
        <label className={styles.label}>
          {label}
          {select}
        </label>
      </div>
    )
  }

  return <div className={styles.elementContainer}>{select}</div>
}

export default Select

Select.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  message: PropTypes.object,
  options: PropTypes.object,
}
