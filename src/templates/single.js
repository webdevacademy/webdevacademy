import React from 'react'
import { useEffect } from "react"
import PropTypes from "prop-types"
import { Helmet } from 'react-helmet'
import { Link, graphql } from 'gatsby'
import { DiscussionEmbed } from 'disqus-react'

import Prism from "prismjs"
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
  const post = props.data.wordpressPost
  const siteTitle = props.data.site.siteMetadata.title
  const siteUrl = props.data.site.siteMetadata.siteUrl
  const siteDescription = post.excerpt ? post.excerpt : String.empty;
  const { prev, next } = props.pageContext 
  const hasVideo = post.video || false;

  post.path = `${siteUrl}/${post.categories[0].slug}/${post.slug}`;

  useEffect(() => {
    Prism.highlightAll()
  })  

  const disqusConfig = {
    shortname: 'webdevacademycombr',
    config: { identifier: post.wordpress_id.toString() },
    url: post.path
  }
  

  return (
    <Layout location={props.location}>
      <Helmet
        htmlAttributes={{ lang: 'pt-br' }}
        meta={[{ name: 'description', content: siteDescription }]}
        title={`${post.title} | ${siteTitle}`}
        bodyAttributes={{
          class: 'single',
        }}
      />

      <main className="section-inner clear" role="main">
        <div className="content clear fleft" id="content">
          <article id={post.id} className="post type-post hentry clear">
            {hasVideo && (
              <div className="featured-media" style={{ marginBottom: '-5%' }}>
                <iframe
                  width="100%"
                  height="532"
                  src={post.video}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
            <header className="post-header">
              <h1 className="post-title entry-title">
                <Link
                  to={props.location.pathname}
                  rel="bookmark"
                  dangerouslySetInnerHTML={{ __html: post.title }}
                />
              </h1>
            </header>
            <div
              className="post-content clear"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            {/* <PostsNavigation prev={prev && prev.node} next={next && next.node} /> */}
            {/* <Disqus identifier={post.wordpress_id} title={post.title} url={post.path} /> */}

            <DiscussionEmbed {...disqusConfig} />
          </article>
        </div>

        <Sidebar data={post.tags} />
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
  query getPost($slug: String!) {
    wordpressPost(slug: { eq: $slug }) {
      id
      wordpress_id
      title      
      slug
      content
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
    site {
      siteMetadata {
        title
        description
        siteUrl      
      }
    }
  }
`
