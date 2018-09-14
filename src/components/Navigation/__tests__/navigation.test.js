import React from "React"
import renderer from "react-test-renderer"
import Navigation from "../"

// required array parameter
const navigationEntries = [
  {
    text: 'Menu Entry 1',
    to: '#',
    title: null
  },{
    text: 'Menu Entry 2',
    to: '#',
    title: null
  },{
    text: 'Menu Entry 3',
    to: '#',
    title: null
  },{
    text: 'Menu Entry 4',
    to: '#',
    title: null
  },{
    text: 'Menu Entry 5',
    to: '#',
    title: null
  },{
    text: 'Menu Entry 6',
    to: '#',
    title: null
  }
]

describe("Navigation", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Navigation entries={navigationEntries} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
