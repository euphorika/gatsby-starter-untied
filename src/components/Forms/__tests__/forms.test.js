import React from 'react'
import renderer from 'react-test-renderer'
import Forms from '../'

describe('Forms', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Forms />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
