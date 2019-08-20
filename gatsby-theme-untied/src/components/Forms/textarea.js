/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'

import FormMessage from './message'

const Textarea = ({ children, name, label, message = {}, options }) => {
  const textarea = (
    <React.Fragment>
      <textarea className="element" value={children} name={name} {...options} />
      <span className="after-form-element" />
    </React.Fragment>
  )

  if (label) {
    return (
      <div
        sx={{
          variant: 'forms.textarea',
        }}
        className="element-container"
      >
        <FormMessage type={message.type}>{message.text}</FormMessage>
        <label className="label">
          {label}
          {textarea}
        </label>
      </div>
    )
  }

  return (
    <div
      sx={{
        variant: 'forms.textarea',
      }}
      className="element-container"
    >
      <FormMessage type={message.type}>{message.text}</FormMessage>
      {textarea}
    </div>
  )
}

export default Textarea

Textarea.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  message: PropTypes.object,
  options: PropTypes.object,
}
