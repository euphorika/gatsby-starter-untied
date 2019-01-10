import React from 'React'
import renderer from 'react-test-renderer'
import Hero from '../'


describe('Hero', () => {
  it('renders correctly', () => {
    // const backImg = {
    // }

    const button = {
      text: 'Text',
      link: '/',
    }

    const hero = (
      <Hero headline="Title" button={button}>
      Body
      </Hero>
    )
    const tree = renderer.create(hero).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
