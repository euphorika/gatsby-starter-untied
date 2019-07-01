import React from 'react'
import PropTypes from 'prop-types'

import styles from './message.module.styl'

const FormMessage = ({ type, children }) => {
  const makeClassName = type => {
    switch (type) {
      case 'warn':
        return styles.warn

      case 'error':
        return styles.error

      case 'info':
      default:
        return styles.info
    }
  }

  return (
    <div className={`${styles.formMessage} ${makeClassName(type)}`}>
      {children}
    </div>
  )
}

FormMessage.propTypes = {
  type: PropTypes.oneOf(['info', 'warn', 'error']),
  children: PropTypes.node.isRequired,
}

export default FormMessage
