import React from 'react'

import Input from './input'

import styles from './styles.module.styl'

const Forms = () => {
  const inputTypes = [
    'text',
    'email',
    'number',
  ]

  return (
    <section className={styles.formsSection}>
      <div className={styles.inputContainer}>
        {inputTypes.map((value, key) => (
          <div key={key}>
            <Input
              type={value}
              name={value}
              label={value.toUpperCase()}
              options={{
                placeholder: value.toUpperCase(),
                required: 'required',
              }}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Forms
