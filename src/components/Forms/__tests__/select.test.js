import React from 'react'
import renderer from 'react-test-renderer'
import Select from '../select'

describe('Select', () => {
  it('renders correctly', () => {
    const select = (
      <Select name="Select">
        <option value="" />
      </Select>
    )

    const tree = renderer.create(select).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
