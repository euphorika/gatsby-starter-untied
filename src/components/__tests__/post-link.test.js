import React from 'react'
import renderer from 'react-test-renderer'
import PostLink from '../post-link'

const postLinkEntry = {
  excerpt: 'excerpt',
  frontmatter: {
    title: 'title',
    date: 'November 05, 2018',
  },
  fields: {
    slug: '/slug',
  },
}

describe('Post-Link', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<PostLink post={postLinkEntry} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
