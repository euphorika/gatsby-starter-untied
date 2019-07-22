import React from 'react'
import PropTypes from 'prop-types'

import InfoIcon from './icons/info'
import WarningIcon from './icons/warning'
import ErrorIcon from './icons/error'

const FormIcon = ({ type }) => {
  switch (type) {
    case 'error':
      return <ErrorIcon />
    case 'warn':
      return <WarningIcon />
    case 'info':
    default:
      return <InfoIcon />
  }
}

FormIcon.propTypes = {
  type: PropTypes.oneOf(['info', 'warn', 'error']).isRequired,
}

export default FormIcon
