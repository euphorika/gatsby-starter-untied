import React from 'react'
import renderer from 'react-test-renderer'
import Carousel from '../'

describe('Carousel', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Carousel>
          <div style="height: 100% width:100%"></div>
          <div style="height: 100% width:100%"></div>
        </Carousel>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
