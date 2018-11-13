import React from "react"
import PropTypes from 'prop-types'
import { Link } from "gatsby"

const PostLink = ({ post }) => (
  <div>
    <h2>
      <Link to={post.fields.slug}>
        {post.frontmatter.title} ({post.frontmatter.date})
      </Link>
    </h2>
    <p>{post.excerpt}</p>
  </div>
)

PostLink.propTypes = {
  post: PropTypes.shape({
    excerpt: PropTypes.string,
    frontmatter: PropTypes.object,
    fields: PropTypes.object,
  }).isRequired
}

export default PostLink
