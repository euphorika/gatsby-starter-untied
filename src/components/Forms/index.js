import React from 'react'

import Input from './input'
import Checkbox from './Checkbox'
import Radio from './Radio'

import styles from './styles.module.styl'

const Forms = () => {
  const inputTypes = ['text', 'email', 'number']

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
                required: true,
              }}
            />
          </div>
        ))}
      </div>
      <div className={styles.checkboxContainer}>
        <Checkbox
          label="Checkbox label"
          name="checkbox"
          options={{ required: true }}
        />
      </div>
      <div className={styles.radioContainer}>
        <Radio
          label="Radio label"
          name="radio"
          options={{ required: true }}
        />
      </div>
    </section>
  )
}

export default Forms
