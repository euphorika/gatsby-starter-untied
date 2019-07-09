import React from 'react'
import renderer from 'react-test-renderer'
import Video from '../'

// required array parameter
const videos = [
  {
    node: {
      name: 'video 1',
      src: '#',
      type: 'type',
    },
  },
  {
    node: {
      name: 'video 1',
      src: '#',
      type: 'type',
    },
  },
]

describe('video', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<video entries={videos} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly', () => {
    const tree = renderer.create(<video entries={videos} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
