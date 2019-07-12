import React from 'react'
import renderer from 'react-test-renderer'
import Navigation from '../'

// required array parameter
const navigationEntries = [
  {
    node: {
      name: 'Menu Entry 1',
      link: '#',
      title: 'Title',
    },
  },
  {
    node: {
      name: 'Menu Entry 2',
      link: '#',
      target: 'Target',
    },
  },
]

describe('Navigation', () => {
  it('renders correctly - navigation center center', () => {
    const tree = renderer
      .create(<Navigation entries={navigationEntries} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly - navigation top center', () => {
    const tree = renderer
      .create(
        <Navigation
          entries={navigationEntries}
          verticalAlignment="top"
          horizontalAlignment="center"
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly - navigation bottom center', () => {
    const tree = renderer
      .create(
        <Navigation
          entries={navigationEntries}
          verticalAlignment="bottom"
          horizontalAlignment="center"
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly - navigation center left', () => {
    const tree = renderer
      .create(
        <Navigation
          entries={navigationEntries}
          verticalAlignment="center"
          horizontalAlignment="left"
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly - navigation center right', () => {
    const tree = renderer
      .create(
        <Navigation
          entries={navigationEntries}
          verticalAlignment="center"
          horizontalAlignment="right"
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
