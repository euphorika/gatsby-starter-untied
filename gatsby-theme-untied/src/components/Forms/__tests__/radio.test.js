import React from "react"
import renderer from "react-test-renderer"
import Radio from "../checkbox"

describe("Radio", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Radio value="Value" name="Name" />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("renders required correctly", () => {
    const tree = renderer
      .create(<Radio value="Value" name="Name" options={{ required: true }} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
