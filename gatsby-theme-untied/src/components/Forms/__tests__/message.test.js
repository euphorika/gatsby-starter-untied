import React from 'react'
import renderer from 'react-test-renderer'
import Message from '../message'

describe('Message', () => {
  it('renders info message correctly', () => {
    const element = <Message>Error Message</Message>
    const tree = renderer.create(element).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders warn message correctly', () => {
    const element = <Message type="warn">Error Message</Message>
    const tree = renderer.create(element).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders error message correctly', () => {
    const element = <Message type="error">Error Message</Message>
    const tree = renderer.create(element).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
