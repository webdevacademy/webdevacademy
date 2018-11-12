import React from "react";
import get from 'lodash/get'
import Helmet from 'react-helmet'

// Components
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

const Tags = ({ pageContext, data }) => {
  const { tag, title } = pageContext;
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <header className="page-header section-inner">
        <h1 className="page-title">{ title }</h1>
        <div className="tag-archive-meta"></div>
      </header>

      <div className="content section-inner" id="content">      
      {posts.map(({ node }) => {
        const thumbnail = node.frontmatter.featured_media || placeholder;

        return (
          <div className="post-container post-loaded fade-in" key={node.id} >
            <article id={node.id} className="post has-post-thumbnail hentry clear">
              <div className="featured-media">
                <Link to={node.frontmatter.path} rel="bookmark">
                  <img src={thumbnail} alt={node.title} />
                </Link>
              </div>
              <header className="post-header">
                <h1 className="post-title entry-title">
                  <Link to={node.frontmatter.path} rel="bookmark"
                    dangerouslySetInnerHTML={{ __html: node.frontmatter.title }} />
                </h1>
              </header>
            </article>
          </div>
        )
      })}
      </div>
    </Layout>
  );
};

export default Tags;

export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      sort: {fields: [frontmatter___date], 
      order: ASC}, 
      filter: {
        fileAbsolutePath: {regex: "/posts/"},  
        frontmatter: {
          tags: {
            elemMatch: {
              slug: {in: [$tag]}
            }
          }
        }      
      }
    )
    {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            slug
            featured_media
            categories {
              slug
            }
            tags {
              slug
            }
            path
          }
        }
      }
    }  
  }
`;