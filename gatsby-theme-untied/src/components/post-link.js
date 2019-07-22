import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styles from './post-link.module.styl'

const PostLink = ({ post, button }) => (
  <div className={styles.postLinkMainContainer}>
    <h2 className={styles.postLinkTitle}>
      <Link to={post.fields.slug} className={styles.postLinkSlug}>
        {post.frontmatter.title}
      </Link>
    </h2>
    <h3 className={styles.postLinkDate}>
      <Link to={post.fields.slug} className={styles.postLinkSlug}>
        {post.frontmatter.date}
      </Link>
    </h3>
    <p className={styles.postLinkExcerpt}>{post.excerpt}</p>
    <div className={styles.buttonContainer}>
      <button className={styles.button}>
        <Link to={post.fields.slug} className={styles.buttonSlug}>
          <span className={styles.buttonText}>Read more</span>
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
