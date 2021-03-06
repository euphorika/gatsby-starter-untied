/** @jsx jsx */
import { jsx } from "theme-ui"

import {
  Input,
  Checkbox,
  Radio,
  Select,
  Button,
  Textarea,
} from "gatsby-theme-untied"

const Forms = () => {
  const startYear = 1900
  let endYear = new Date().getFullYear()

  return (
    <section
      sx={{
        variant: "forms.example",
      }}
      className="forms-section"
    >
      <div className="example-form">
        <div className="form-wrapper">
          <div className="grid-item first-col">
            <Input
              name="firstname"
              message={{
                type: "error",
                text: "What's your first name?",
              }}
              options={{
                placeholder: "Firstname",
                required: true,
              }}
            />
          </div>
          <div className="grid-item snd-col">
            <Input
              name="lastname"
              value="Mustermann"
              options={{
                placeholder: "Lastname",
                required: true,
              }}
            />
          </div>
          <div className="grid-item fullsize">
            <Input
              type="email"
              name="email"
              value="invalid Email"
              message={{
                type: "error",
                text: "Please enter a valid email address.",
              }}
              options={{
                placeholder: "Email",
                required: true,
              }}
            />
          </div>
          <div className="grid-item first-col">
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
          <div className="grid-item snd-col">
            <Select
              name="select"
              message={{
                type: "info",
                text: "Choose your date of birth.",
              }}
              options={{ required: true }}
            >
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
          <div className="grid-item fullsize">
            <Textarea
              name="message"
              options={{ required: true, placeholder: "Message" }}
            />
          </div>
          <div className="grid-item fullsize">
            <Checkbox
              value="accept"
              label="Accept Requirements"
              name="requirements"
              options={{ required: true }}
            />
          </div>
          <div className="grid-item fullsize">
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
