import React from 'React'
import renderer from 'react-test-renderer'
import CallToAction from '../'

describe('CallToAction', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<CallToAction />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
