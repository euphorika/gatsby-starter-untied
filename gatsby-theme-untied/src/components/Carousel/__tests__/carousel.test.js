import React from "react"
import renderer from "react-test-renderer"
import Carousel from "../"

describe("Carousel", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Carousel>
          <div className="carouselSlides" />
        </Carousel>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
