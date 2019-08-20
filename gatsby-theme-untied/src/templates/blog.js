/** @jsx jsx */
import { jsx } from 'theme-ui'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <div
        sx={{
          p: 4,
        }}
      >
        <div>
          <h1
            sx={{
              fontSize: 3,
              fontWeight: 'bold',
              mb: 2,
            }}
          >
            {frontmatter.title}
          </h1>
          <h2
            sx={{
              fontSize: 3,
              fontWeight: 'body',
              mb: 4,
            }}
          >
            {frontmatter.date}
          </h2>
          <div
            sx={{
              fontSize: 0,
              lineHeight: 'body',
            }}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`
