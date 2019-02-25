import React from 'react'
import renderer from 'react-test-renderer'
import { PureHeader as Header } from '../'

describe('Header', () => {
  it('renders correctly', () => {
    const data = {
      allMenuEntryMain: {
        edges: [
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
              target: '_blank',
            },
          },
        ],
      },
    }
    const siteTitle = 'Site Title'

    const tree = renderer
      .create(<Header siteTitle={siteTitle} data={data} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
