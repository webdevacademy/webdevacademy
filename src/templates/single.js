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
          htmlAttributes={{ lang: 'pt-br' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${post.title} | ${siteTitle}`}
          bodyAttributes={{
            'class': 'single'
          }}
        />

        <main className="section-inner clear" role="main">
          <div className="content clear center" id="content">
            <article id={post.id} className="post type-post hentry clear">
              <header className="post-header">
                <h1 className="post-title entry-title">
                  <Link to={this.props.location.pathname} rel="bookmark"
                    dangerouslySetInnerHTML={{ __html: post.title }} />
                </h1>
              </header>
              <div className="post-content clear"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />                
            </article>
          </div>
        </main>        
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
