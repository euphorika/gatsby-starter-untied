import React from 'React'
import renderer from 'react-test-renderer'
import Hero from '../'

describe('Hero', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Hero />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
