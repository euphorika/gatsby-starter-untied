import React from "react"
import renderer from "react-test-renderer"
import Slider from "../"

describe("Slider", () => {
  it("renders correctly", () => {
    const image = []
    const slider = <Slider title="Title" images={image} />
    const tree = renderer.create(slider).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
