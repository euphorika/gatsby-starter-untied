import React from 'react'
import PropTypes from 'prop-types'

import styles from './select.module.styl'

const Select = ({ children, name, label, options }) => {
  const requiredClass = options && options.required ? ` ${styles.required}` : ''
  const select = (
    <div className={`${styles.selectBox}${requiredClass}`}>
      <select className={styles.element} name={name} {...options}>
        {children}
      </select>
      <span className={styles.afterFormElement} />
    </div>
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

Select.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  options: PropTypes.object,
}