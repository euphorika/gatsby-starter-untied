/** @jsx jsx */
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { jsx } from 'theme-ui'

const PostLink = ({ post, button }) => (
  <div
    sx={{
      mt: '50px',
    }}
  >
    <h2
      sx={{
        fontSize: 3,
        mb: 2,
      }}
    >
      <Link
        to={post.fields.slug}
        sx={{
          color: 'primary',
          fontWeight: 'bold',
        }}
      >
        {post.frontmatter.title}
      </Link>
    </h2>
    <h3
      sx={{
        fontSize: 3,
        mb: 5,
      }}
    >
      <Link
        to={post.fields.slug}
        sx={{
          color: 'primary',
          fontWeight: 'body',
        }}
      >
        {post.frontmatter.date}
      </Link>
    </h3>
    <p
      sx={{
        fontSize: 0,
        lineHeight: 'body',
      }}
    >
      {post.excerpt}
    </p>
    <div
      sx={{
        textAlign: 'center',
      }}
    >
      <button
        sx={{
          bg: 'primary',
          width: ['100%', '23%'],
          maxWidth: '100%',
          border: '0',
          display: 'inline-block',
          borderRadius: 0,
          fontSize: 0,
          p: 3,
        }}
      >
        <Link
          to={post.fields.slug}
          sx={{
            textDecoration: 'none',
          }}
        >
          <span
            sx={{
              color: 'secondary',
            }}
          >
            Read more
          </span>
        </Link>
      </button>
    </div>
  </div>
)

PostLink.propTypes = {
  post: PropTypes.shape({
    excerpt: PropTypes.string,
    frontmatter: PropTypes.object,
    fields: PropTypes.object,
  }).isRequired,
  button: PropTypes.node,
}

export default PostLink
