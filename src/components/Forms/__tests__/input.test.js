import React from 'react'
import renderer from 'react-test-renderer'
import Input from '../input'

describe('Input', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Input name="Name" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
