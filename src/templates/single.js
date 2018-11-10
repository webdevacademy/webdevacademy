import React from 'react'
import PropTypes from "prop-types"
import Helmet from 'react-helmet'
import { Link,graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'

class Single extends React.Component {
  render() {
    const post = this.props.data.wordpressPost
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const siteDescription = post.excerpt
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${post.title} | ${siteTitle}`}
        />
        <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
        <article dangerouslySetInnerHTML={{ __html: post.content }} />
        <hr />

        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            listStyle: 'none',
            padding: 0,
          }}
        >
          <li>
            {
              previous &&
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.title}
              </Link>
            }
          </li>
          <li>
            {
              next &&
              <Link to={next.fields.slug} rel="next">
                {next.title} →
              </Link>
            }
          </li>
        </ul>
      </Layout>
    )
  }
}

Single.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default Single

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      id
      title
      slug
      content
    }
  }
`
