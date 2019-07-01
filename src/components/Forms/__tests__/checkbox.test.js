import React from 'react'
import renderer from 'react-test-renderer'
import Checkbox from '../checkbox'

describe('Checkbox', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Checkbox value="Value" name="Name" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders required correctly', () => {
    const tree = renderer
      .create(
        <Checkbox value="Value" name="Name" options={{ required: true }} />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
