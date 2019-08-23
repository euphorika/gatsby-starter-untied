import React from "react"
import renderer from "react-test-renderer"
import Callout from "../"

describe("Callout", () => {
  it("renders correctly", () => {
    const button = {
      text: "Text",
      link: "/",
    }

    const callout = <Callout message="Message" button={button} />
    const tree = renderer.create(callout).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
