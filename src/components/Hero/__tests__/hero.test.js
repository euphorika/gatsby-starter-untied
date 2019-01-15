import React from 'React'
import renderer from 'react-test-renderer'
import Hero from '../'

describe('Hero', () => {
  it('renders correctly', () => {
    const imgFluid = {
      aspectRatio: 1.0,
      basde64: 'String',
      sizes: '(max-width: 4928px) 100vw, 4928px',
      src: 'image.jpg',
      srcSet: 'srcSet.image.jpg',
    }

    const button = {
      text: 'Text',
      link: '/',
    }

    const hero = (
      <Hero headline="Title" button={button} imgFluid={imgFluid}>
        Body
      </Hero>
    )
    const tree = renderer.create(hero).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
