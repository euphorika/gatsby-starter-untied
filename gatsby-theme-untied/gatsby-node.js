const fs = require('fs')
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onPreBootstrap = ({ reporter }) => {
  const imagePath = 'src/images'
  const typographyPath = 'src/utils/typography'

  if (!fs.existsSync('src')) {
    reporter.info(`creating src directory`)
    fs.mkdirSync('src')
    fs.mkdirSync('src/utils', { recursive: true })
  }

  if (!fs.existsSync(imagePath)) {
    reporter.info(`creating the ${imagePath} directory`)
    fs.mkdirSync(imagePath, { recursive: true })
  }

  if (!fs.existsSync(typographyPath)) {
    reporter.info(`creating the ${typographyPath} directory`)
    fs.mkdirSync(typographyPath, { recursive: true })
  }
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const blogPostTemplate = require.resolve(`./src/templates/blog.js`)

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: blogPostTemplate,
        context: {}, // additional data can be passed via context
      })
    })
  })
}
