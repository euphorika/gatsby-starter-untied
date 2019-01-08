import React from 'React'
import renderer from 'react-test-renderer'
import Hero from '../'

describe('Hero', () => {
  it('renders correctly', () => {
    //const backImg = {}
    const hero = (
      <Hero headline="Title">
      Body
      </Hero>
    )
    const tree = renderer.create(hero).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
