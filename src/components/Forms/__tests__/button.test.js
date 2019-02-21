import React from 'React'
import renderer from 'react-test-renderer'
import Button from '../button'

describe('Button', () => {
  it('renders correctly', () => {
    const button = <Button type="button">Button Text</Button>

    const tree = renderer.create(button).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
