import React from 'React'
import renderer from 'react-test-renderer'
import Input from '../'

describe('Input', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Input name="Name" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
