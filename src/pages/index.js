import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

class Home extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )
    const posts = get(this, 'props.data.allMarkdownRemark.edges')
    const placeholder = 'http://placehold.it/480x252&text=:(';

    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'pt-br' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${siteTitle} | ${siteDescription}`}
          bodyAttributes={{
            'class': 'home blog hfeed no-featured-image date-hidden'
          }}
        />

        <main className="content section-inner" id="content" role="main">
          <section className="posts" id="posts">
            <div className="spinner-container">
              <div id="spinner">
                <div className="double-bounce1"></div>
                <div className="double-bounce2"></div>
              </div>
            </div>

            {posts.map(({ node }) => {
              const thumbnail = node.frontmatter.featured_media || placeholder;
              const url = `/${node.frontmatter.path}`;

              return (
                <div className="post-container post-loaded fade-in" key={node.id} >
                  <article id={node.id} className="post has-post-thumbnail hentry clear">
                    <div className="featured-media">
                      <Link to={url} rel="bookmark">
                        <img src={thumbnail} alt={node.title} />
                      </Link>
                    </div>
                    <header className="post-header">
                      <h1 className="post-title entry-title">
                        <Link to={url} rel="bookmark" 
                          dangerouslySetInnerHTML={{ __html: node.frontmatter.title }} />
                      </h1>
                    </header>
                  </article>
                </div>
              )
            })}
          </section>
        </main>
      </Layout>
    )
  }
}

export default Home

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC}
      filter: {fileAbsolutePath: {regex: "/tags/"}}
    ){
      edges {
        node {
          id
          frontmatter {
            slug
            title
            featured_media
            path
          }
        }
      }
    }
  }
`
