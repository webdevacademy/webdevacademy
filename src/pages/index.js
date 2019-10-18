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

      <section id="mc_embed_signup" className="content">
        <form 
            action="https://webdevacademy.us4.list-manage.com/subscribe/post?u=e0789ae860c6bf83f9be80aa8&amp;id=1d34bdc447" 
            method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" 
            className="validate page-header section-inner bg-white" 
            target="_blank" 
            novalidate>
          <div id="mc_embed_signup_scroll" className="post-content">
            <h2>Receba Tutoriais por Email</h2>
            <div className="mc-field-group">
              <input type="email" value="" name="EMAIL" className="required email" id="mce-EMAIL" placeholder="Digite seu e-mail..."/>
            </div>
            {/* <div className="mc-field-group">
              <label for="mce-FNAME">Name </label>
              <input type="text" value="" name="FNAME" className="required" id="mce-FNAME" />
            </div> */}
            <div id="mce-responses" className="clear">
              <div className="response" id="mce-error-response" style={{ 'display': 'none' }}></div>
              <div className="response" id="mce-success-response" style={{ 'display': 'none' }}></div>
            </div>
            <div style={{ 'position': 'absolute', 'left': '-5000px' }} aria-hidden="true"><input type="text" name="b_e0789ae860c6bf83f9be80aa8_1d34bdc447" tabindex="-1" value="" /></div>
            <div className="clear">
              <input type="submit" value="Quero Receber!" name="subscribe" id="mc-embedded-subscribe" className="button" />
            </div>
          </div>
        </form>
      </section>

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
