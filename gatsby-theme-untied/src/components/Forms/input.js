import React from 'react'
import PropTypes from 'prop-types'

import FormMessage from './message'
import Icon from './icon'

import styles from './input.module.styl'

const Input = ({
  value,
  name,
  type = 'text',
  label,
  message = {},
  options,
}) => {
  const renderIcon =
    message.type && message.text ? (
      <div className={styles.icon}>
        <Icon type={message.type} />
      </div>
    ) : null

  const input = (
    <>
      <input
        className={styles.element}
        {...options}
        value={value}
        name={name}
        type={type}
      />
      <span className={styles.afterFormElement} />
      {renderIcon}
      <FormMessage type={message.type}>{message.text}</FormMessage>
    </>
  )

  if (label) {
    return (
      <div className={styles.elementContainer}>
        <label>
          {label}
          {input}
        </label>
      </div>
    )
  }

  return <div className={styles.elementContainer}>{input}</div>
}

export default Input

Input.propTypes = {
  value: PropTypes.any,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string,
  message: PropTypes.object,
  options: PropTypes.object,
}
