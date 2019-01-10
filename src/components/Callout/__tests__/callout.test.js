import React from 'React'
import renderer from 'react-test-renderer'
import Callout from '../'

describe('Callout', () => {
  it('renders correctly', () => {
    const button = {
      text: 'Text',
      link: '/',
    }

    const callout = (
      <Callout message="Message" button={button}></Callout>
    )
    const tree = renderer.create(callout).toJSON()    
    expect(tree).toMatchSnapshot()
  })
})
