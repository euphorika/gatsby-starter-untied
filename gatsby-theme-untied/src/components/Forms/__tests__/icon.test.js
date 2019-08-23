import React from "react"
import renderer from "react-test-renderer"
import Icon from "../icon"

describe("Icon", () => {
  it("renders info correctly", () => {
    const tree = renderer.create('<Icon type="info" />')
    expect(tree).toMatchSnapshot()
  })

  it("renders warn correctly", () => {
    const tree = renderer.create('<Icon type="warn" />')
    expect(tree).toMatchSnapshot()
  })

  it("renders error correctly", () => {
    const tree = renderer.create('<Icon type="error" />')
    expect(tree).toMatchSnapshot()
  })
})
