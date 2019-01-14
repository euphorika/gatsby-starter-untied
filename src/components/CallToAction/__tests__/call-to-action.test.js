import React from 'React'
import renderer from 'react-test-renderer'
import CallToAction from '../'

describe('CallToAction', () => {
  it('renders correctly', () => {
    const button = {
      text: 'Text',
      link: '/',
    }

    const callToAction = <CallToAction button={button} />

    const tree = renderer.create(callToAction).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
