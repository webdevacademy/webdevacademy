import React from 'react'
import { Helmet } from 'react-helmet'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'

class Page extends React.Component {
  render() {
    const page = this.props.data.wordpressPage
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const siteDescription = ''

    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${page.title} | ${siteTitle}`}
          bodyAttributes={{
            'class': 'page-template page-template-template-nosidebar page-template-template-nosidebar-php page single single-post'
          }}
        />
        
        <div className="section-inner">
          <div className="content center">
            <article className="post">
              <header className="post-header">
                <h1 className="post-title entry-title"
                  dangerouslySetInnerHTML={{ __html: page.title }} />
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
    wordpressPage(id: { eq: $id }) {
      id
      slug
      title
      content
    }
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
