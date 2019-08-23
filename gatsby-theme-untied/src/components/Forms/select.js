/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import PropTypes from "prop-types"

import FormMessage from "./message"

const Select = ({ children, name, label, message, options }) => {
  const requiredClass = options && options.required ? ` required` : ""
  const select = (
    <React.Fragment>
      <div className={`select-box${requiredClass}`}>
        <select className="element" name={name} {...options}>
          {children}
        </select>
        <span className="after-form-element" />
      </div>
      <FormMessage type={message.type}>{message.text}</FormMessage>
    </React.Fragment>
  )

  if (label) {
    return (
      <div
        sx={{
          variant: "forms.select",
        }}
        className="element-container"
      >
        <label className="label">
          {label}
          {select}
        </label>
      </div>
    )
  }

  return (
    <div
      sx={{
        variant: "forms.select",
      }}
      className="element-container"
    >
      {select}
    </div>
  )
}

Select.defaultProps = {
  message: {},
}

Select.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  message: PropTypes.object,
  options: PropTypes.object,
}

export default Select
