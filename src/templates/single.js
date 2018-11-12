import React from 'react'
import PropTypes from "prop-types"
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import 'prismjs/themes/prism-twilight.css'

class Single extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const siteDescription = post.excerpt
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'pt-br' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${post.frontmatter.title} | ${siteTitle}`}
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
                    dangerouslySetInnerHTML={{ __html: post.frontmatter.title }} />
                </h1>
              </header>
              <div className="post-content clear"
                dangerouslySetInnerHTML={{ __html: post.html }}
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
  query getPost($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        slug
        title
      }
      html
    }
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
