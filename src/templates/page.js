import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'

class Page extends React.Component {
  render() {
    const page = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const siteDescription = ''

    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${page.frontmatter.title} | ${siteTitle}`}
          bodyAttributes={{
            'class': 'page'
          }}
        />
        
        <div className="section-inner">
          <div className="content center clear" id="content">
            <article id="post-80" className="page type-page hentry clear">
              <header className="post-header">
                <h1 className="post-title entry-title"
                  dangerouslySetInnerHTML={{ __html: page.frontmatter.title }} />
              </header>
              <div className="post-content clear"
                dangerouslySetInnerHTML={{ __html: page.html }} />
            </article>
          </div>
        </div>        
      </Layout>
    )
  }
}

export default Page

export const pageQuery = graphql`
  query getPage($id: String!) {
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
