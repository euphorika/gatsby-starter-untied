/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'

import FormMessage from './message'

const Checkbox = ({ value, checked, name, label, message, options }) => {
  const checkbox = (
    <React.Fragment>
      <input
        className="element"
        type="checkbox"
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
        variant: 'forms.checkbox',
      }}
      className="element-container"
    >
      <FormMessage type={message.type}>{message.text}</FormMessage>
      <span className="checkable">
        <label className="label">
          {checkbox}
          {label}
        </label>
      </span>
    </div>
  )
}

Checkbox.defaultProps = {
  message: {},
}

Checkbox.propTypes = {
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  message: PropTypes.object,
  options: PropTypes.object,
}

export default Checkbox
