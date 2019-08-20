/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'

import FormMessage from './message'
import Icon from './icon'

const Input = ({ value, name, type, label, message, options }) => {
  const renderIcon =
    message.type && message.text ? (
      <div className="icon">
        <Icon type={message.type} />
      </div>
    ) : null

  const input = (
    <React.Fragment>
      <input
        className="element"
        {...options}
        value={value}
        name={name}
        type={type}
      />
      <span className="after-form-element" />
      {renderIcon}
      <FormMessage type={message.type}>{message.text}</FormMessage>
    </React.Fragment>
  )

  if (label) {
    return (
      <div
        sx={{
          variant: 'forms.inputs',
        }}
        className="element-container"
      >
        <label className="label">
          {label}
          {input}
        </label>
      </div>
    )
  }

  return (
    <div
      sx={{
        variant: 'forms.inputs',
      }}
      className="element-container"
    >
      {input}
    </div>
  )
}

Input.defaultProps = {
  type: 'text',
  message: {},
}

Input.propTypes = {
  value: PropTypes.any,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string,
  message: PropTypes.object,
  options: PropTypes.object,
}

export default Input
