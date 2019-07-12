import React from 'react'
import renderer from 'react-test-renderer'
import PricingTable from '../'

describe('PricingTable', () => {
  it('renders correctly', () => {
    const callToAction = {
      text: 'Text',
      link: '/',
    }
    const pricingTable = (
      <PricingTable
        headline="headline"
        price="1.22"
        callToAction={callToAction}
      >
        Description
      </PricingTable>
    )

    const tree = renderer.create(pricingTable).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
