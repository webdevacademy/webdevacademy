import React from 'react';
import Helmet from 'react-helmet'

// Components
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Content from '../templates/content';

const Tag = (props) => {
  const { tag } = props.pageContext;
  const posts = props.data.allMarkdownRemark.edges;
  const siteTitle = props.data.site.siteMetadata.title

  return (
    <Layout>
      <Helmet
        htmlAttributes={{ lang: 'pt-br' }}
        title={`${tag} | ${siteTitle}`}
        bodyAttributes={{
          'class': 'archive tag hfeed no-featured-image'
        }}
      />
      <section className="posts" id="posts">
        <header className="page-header section-inner">
          <h1 className="page-title">{ tag }</h1>
          <div className="tag-archive-meta"></div>
        </header>

        <div className="content section-inner" id="content">
          {posts.map(({ node }) => (
            <Content data={node} key={node.id} /> 
            ))}
        </div>
      </section>
    </Layout>
  );
};

export default Tag;

export const pageQuery = graphql`
  query TagPage($tag: String!) {
    allMarkdownRemark(
      sort: {
        fields: [frontmatter___date], order: DESC
      }, 
      filter: {
        fileAbsolutePath: {regex: "/posts/"}, 
        frontmatter: {            
          tags: { eq: $tag }
        }
      }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            slug
            featured_media
            categories
            tags
            path
          }
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;