import React from 'react'
import PropTypes from 'prop-types'

import styles from './select.module.styl'

const Select = ({ children, name, label, options }) => {
  const select = (
    <>
      <select className={styles.element} name={name} {...options}>
        {children}
      </select>
      <span className={styles.afterFormElement} />
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

Select.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  options: PropTypes.object,
}
