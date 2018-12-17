import React from 'React'
import renderer from 'react-test-renderer'
import TeamMembers from '../'

describe('TeamMember', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<TeamMembers />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
