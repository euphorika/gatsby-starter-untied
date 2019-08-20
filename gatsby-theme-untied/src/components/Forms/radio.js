/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'

import FormMessage from './message'

const Radio = ({ value, checked, name, label, message, options }) => {
  const radio = (
    <React.Fragment>
      <input
        className="element"
        type="radio"
        value={value}
        name={name}
        checked={checked}
        {...options}
      />
      <span className="after-form-element" />
      <span className="checkmark" />
    </React.Fragment>
  )

  return (
    <div
      sx={{
        variant: 'forms.radio',
      }}
      className="element-container"
    >
      <FormMessage type={message.type}>{message.text}</FormMessage>
      <span className="checkable">
        <label className="label">
          {radio}
          {label}
        </label>
      </span>
    </div>
  )
}

Radio.defaultProps = {
  message: {},
}

Radio.propTypes = {
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  message: PropTypes.object,
  options: PropTypes.object,
}

export default Radio
