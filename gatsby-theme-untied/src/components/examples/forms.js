import React from 'react'

import Input from '../Forms/input'
import Checkbox from '../Forms/checkbox'
import Radio from '../Forms/radio'
import Select from '../Forms/select'
import Button from '../Forms/button'
import Textarea from '../Forms/textarea'

import styles from './forms.module.styl'

const Forms = () => {
  const startYear = 1900
  let endYear = new Date().getFullYear()

  return (
    <section className={styles.formsSection}>
      <div className={styles.exampleForm}>
        <div className={styles.formWrapper}>
          <div className={`${styles.gridItem} ${styles.firstCol}`}>
            <Input
              name="firstname"
              message={{
                type: 'error',
                text: "What's your first name?",
              }}
              options={{
                placeholder: 'Firstname',
                required: true,
              }}
            />
          </div>
          <div className={`${styles.gridItem} ${styles.sndCol}`}>
            <Input
              name="lastname"
              value="Mustermann"
              options={{
                placeholder: 'Lastname',
                required: true,
              }}
            />
          </div>
          <div className={`${styles.gridItem} ${styles.fullsize}`}>
            <Input
              type="email"
              name="email"
              value="invalid Email"
              message={{
                type: 'error',
                text: "Please enter a valid email address.",
              }}
              options={{
                placeholder: 'Email',
                required: true,
              }}
            />
          </div>
          <div className={`${styles.gridItem} ${styles.firstCol}`}>
            <div role="group">
              <Radio
                value="male"
                label="Male"
                name="gender"
                options={{ required: true }}
              />
              <Radio
                value="female"
                label="Female"
                name="gender"
                options={{ required: true }}
              />
              <Radio
                value="other"
                label="Other"
                name="gender"
                options={{ required: true }}
              />
            </div>
          </div>
          <div className={`${styles.gridItem} ${styles.sndCol}`}>
            <Select name="select" options={{ required: true }}>
              <option value="">Year of Birth</option>
              {Array(endYear - startYear + 1)
                .fill()
                .map(() => endYear--)
                .map(value => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
            </Select>
          </div>
          <div className={`${styles.gridItem} ${styles.fullsize}`}>
            <Textarea
              name="message"
              options={{ required: true, placeholder: 'Message' }}
            />
          </div>
          <div className={`${styles.gridItem} ${styles.fullsize}`}>
            <Checkbox
              value="accept"
              label="Accept Requirements"
              name="requirements"
              options={{ required: true }}
            />
          </div>
          <div className={`${styles.gridItem} ${styles.fullsize}`}>
            <Button type="submit" options={{ disabled: false }}>
              <span>Send</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Forms
