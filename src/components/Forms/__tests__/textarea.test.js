import React from 'react'
import renderer from 'react-test-renderer'
import Textarea from '../textarea'

describe('Textarea', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Textarea name="Name" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
