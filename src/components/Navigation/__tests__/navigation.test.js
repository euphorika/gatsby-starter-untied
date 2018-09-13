import React from "React"
import renderer from "react-test-renderer"
import Navigation from "../"

describe("Navigation", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Navigation />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
