import React from 'react'

import Input from './input'
import Checkbox from './Checkbox'
import Radio from './Radio'
import Select from './Select'

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
        <Radio label="Radio label" name="radio" options={{ required: true }} />
      </div>
      <div className={styles.selectContainer}>
        <Select label="Select label" name="select" options={{ required: true }}>
          <option value="">...</option>
          <option value="value1">Option 1</option>
          <option value="value1">Option 2</option>
          <option value="value1">Option 3</option>
        </Select>
      </div>
    </section>
  )
}

export default Forms
