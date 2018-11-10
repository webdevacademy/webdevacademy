import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'

class Page extends React.Component {
  render() {
    const page = this.props.data.wordpressPage
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const siteDescription = page.excerpt

    console.log(this.props);

    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${page.title} | ${siteTitle}`}
        />
        <div className="wrapper section medium-padding">
          <div className="section-inner">
            <div className="content center clear" id="content">
              <article id="post-80" className="page type-page hentry clear">
                <header className="post-header">
                  <h1 className="post-title entry-title"
                    dangerouslySetInnerHTML={{ __html: page.title }} />
                </header>
                <div className="post-content clear"
                  dangerouslySetInnerHTML={{ __html: page.content }} />
              </article>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Page

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
      date(formatString: "MMMM DD, YYYY")
    }
  }
`
