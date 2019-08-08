/** @jsx jsx */
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'

const TeamMembers = ({ headline, children }) => {
  const headlineElement = headline ? <h2>{headline}</h2> : null
  return (
    <section>
      {headlineElement}
      {children}
    </section>
  )
}

TeamMembers.propTypes = {
  children: PropTypes.node.isRequired,
  headline: PropTypes.string,
}

export default TeamMembers
