import React from 'React'
import renderer from 'react-test-renderer'
import PricingTable from '../'

describe('PricingTable', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<PricingTable />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
