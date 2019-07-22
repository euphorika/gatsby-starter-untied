import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import styles from './styles.module.styl'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <div className={styles.blogPostMainContainer}>
        <div className={styles.blogPost}>
          <h1 className={styles.blogPostTitle}>{frontmatter.title}</h1>
          <h2 className={styles.blogPostDate}>{frontmatter.date}</h2>
          <div
            className={styles.blogPostContent}
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
