import React from 'react'
import PropTypes from "prop-types"
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Disqus from 'gatsby-plugin-disqus'

import 'prismjs/themes/prism-okaidia.css'

import Layout from '../components/layout'
import Sidebar from '../components/sidebar'
import PostsNavigation from '../components/postnav';

/**
 * This template is used for displaying single posts.
 * 
 * @param {*} props 
 */
const Single = (props) => {
  const post = props.data.markdownRemark
  const siteTitle = props.data.site.siteMetadata.title
  const siteUrl = props.data.site.siteMetadata.siteUrl
  const siteDescription = post.excerpt ? post.excerpt : String.empty;
  const { prev, next } = props.pageContext 
  const hasVideo = post.frontmatter.video || false;

  return (
    <Layout location={props.location}>
      <Helmet
        htmlAttributes={{ lang: 'pt-br' }}
        meta={[{ name: 'description', content: siteDescription }]}
        title={`${post.frontmatter.title} | ${siteTitle}`}
        bodyAttributes={{
          'class': 'single'
        }}
      />

      <main className="section-inner clear" role="main">
        <div className="content clear fleft" id="content">
          <article id={post.id} className="post type-post hentry clear">
            {hasVideo &&
              <div className="featured-media" style={{'marginBottom': '-5%'}}>
                <iframe width="100%" height="432" 
                  src={post.frontmatter.video} frameborder="0" 
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                  allowfullscreen>
                </iframe>
              </div>
            }
            <header className="post-header">
              <h1 className="post-title entry-title">
                <Link to={props.location.pathname} rel="bookmark"
                  dangerouslySetInnerHTML={{ __html: post.frontmatter.title }} />
              </h1>
            </header>
            <div className="post-content clear"
              dangerouslySetInnerHTML={{ __html: post.html }}
            /> 
            <PostsNavigation prev={prev && prev.node} next={next && next.node} />
            <Disqus identifier={post.frontmatter.pid.toString()}
              title={post.frontmatter.title}
              url={`${siteUrl}${post.frontmatter.path}`} />
          </article>
        </div>

        <Sidebar data={post} />
      </main>        
    </Layout>
  )
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
        pid
        path
        slug
        title
        tags
        video
        menus
      }
      html
    }
    site {
      siteMetadata {
        title
        description
        siteUrl      
      }
    }
  }
`
