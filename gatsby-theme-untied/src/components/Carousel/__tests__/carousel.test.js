import React from 'react'
import renderer from 'react-test-renderer'
import Carousel from '../'

describe('Carousel', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Carousel>
          <div
            className="carouselSlides"
            id="slide0"
            id="slide1"
            id="slide2"
          />

        </Carousel>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
