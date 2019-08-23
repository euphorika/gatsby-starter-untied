/** @jsx jsx */
import { graphql } from "gatsby"

import PostLink from "../components/post-link"
import Layout from "../components/layout"

import { jsx } from "theme-ui"

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return (
    <Layout>
      <div
        sx={{
          p: 4,
        }}
      >
        <h1
          sx={{
            fontSize: 3,
          }}
        >
          Blog
        </h1>
        {posts}
      </div>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
