import React from "react"
import renderer from "react-test-renderer"
import PricingTable from "../"

describe("PricingTable", () => {
  it("renders correctly", () => {
    const imgFluid = {
      aspectRatio: 1.0,
      base64: "String",
      sizes: "(max-width: 4928px) 100vw, 4928px",
      src: "image.jpg",
      srcSet: "srcSet.image.jpg",
    }
    const callToAction = {
      text: "Text",
      link: "/",
    }
    const pricingTable = (
      <PricingTable
        headline="headline"
        price="1.22"
        imgFluid={imgFluid}
        callToAction={callToAction}
      >
        Description
      </PricingTable>
    )

    const tree = renderer.create(pricingTable).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
