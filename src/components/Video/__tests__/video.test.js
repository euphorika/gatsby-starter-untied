import React from 'React'
import renderer from 'react-test-renderer'
import Video from '../'

describe('Video', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Video />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
