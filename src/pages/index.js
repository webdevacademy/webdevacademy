import React from 'react'
import { Link, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import Layout from '../components/layout'
import Content from '../templates/content';

const Home = (props) => {
  const posts = props.data.allWordpressPost.edges
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

      <main className="content section-inner" id="content" role="main">
        <section className="posts" id="posts">
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
    allWordpressPost(limit: 6, sort: {fields: date, order: DESC}) {
      edges {
        node {
          id
          title
          slug
          jetpack_featured_media_url
          categories {
            name
            slug
          }
          tags {
            name
            slug
          }
        }
      }
    }
  }
`
