import React from 'React'
import renderer from 'react-test-renderer'
import Callout from '../'

describe('Callout', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Callout />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
