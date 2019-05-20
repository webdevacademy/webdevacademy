import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import Content from '../templates/content';

const Home = (props) => {
  const posts = props.data.allMarkdownRemark.edges
  const siteTitle = props.data.site.siteMetadata.title
  const siteDescription = props.data.site.siteMetadata.description

  return (
    <Layout>
      <Helmet
        htmlAttributes={{ lang: 'pt-br' }}
        meta={[{ name: 'description', content: siteDescription }]}
        title={`${siteTitle} | ${siteDescription}`}
        bodyAttributes={{
          'class': 'home blog hfeed no-featured-image date-hidden'
        }}
      />

      <div className="medium-marging bg-dark" style={{ 
        height: '360px', 
        marginBottom: '60px',
        marginTop: '-60px',
      }}>
        
      </div>

      <main className="content section-inner" id="content" role="main">
        <section className="posts" id="posts">
          
          <div className="spinner-container">
            <div id="spinner">
              <div className="double-bounce1"></div>
              <div className="double-bounce2"></div>
            </div>
          </div>

          <div className="page-header section-inner">
            <h1 className="page-title">Mais Recentes...</h1>
          </div>

          {posts.map(({ node }) => (
            <Content data={ node } key={ node.id } /> 
          ))}            
        </section>
      </main>
    </Layout>
  )
}

export default Home

export const postsQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      limit: 6
      sort: { fields: frontmatter___date, order: DESC}
      filter: {fileAbsolutePath: {regex: "/posts/"}}
    ){
      edges {
        node {
          id
          frontmatter {
            slug
            title
            featured_media
            path
            categories
          }
        }
      }
    }
  }
`
