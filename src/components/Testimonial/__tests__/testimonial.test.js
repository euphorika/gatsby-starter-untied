import React from 'React'
import renderer from 'react-test-renderer'
import Testimonial from '../'

describe('Testimonial', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Testimonial />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
