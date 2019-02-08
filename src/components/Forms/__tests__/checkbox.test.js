import React from 'React'
import renderer from 'react-test-renderer'
import Checkbox from '../checkbox'

describe('Checkbox', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Checkbox value="Value" name="Name" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
