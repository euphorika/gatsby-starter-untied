/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'

import FormMessage from './message'

import styles from './textarea.module.styl'

const Textarea = ({ children, name, label, message = {}, options }) => {
  const textarea = (
    <React.Fragment>
      <textarea
        className={styles.element}
        value={children}
        name={name}
        {...options}
      />
      <span className={styles.afterFormElement} />
    </React.Fragment>
  )

  if (label) {
    return (
      <div
        sx={{
          variant: 'forms.elements',
        }}
        className={styles.elementContainer}
      >
        <FormMessage type={message.type}>{message.text}</FormMessage>
        <label className={styles.label}>
          {label}
          {textarea}
        </label>
      </div>
    )
  }

  return (
    <div
      sx={{
        variant: 'forms.elements',
      }}
      className={styles.elementContainer}
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
