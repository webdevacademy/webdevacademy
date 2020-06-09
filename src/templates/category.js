import React from 'react';
import { Helmet } from 'react-helmet'

// Components
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Content from '../templates/content';

const Category = (props) => {
  const { category } = props.pageContext;
  const posts = props.data.allMarkdownRemark.edges;
  const siteTitle = props.data.site.siteMetadata.title

  return (
    <Layout>
      <Helmet
        htmlAttributes={{ lang: 'pt-br' }}
        title={`${category} | ${siteTitle}`}
        bodyAttributes={{
          'class': 'archive category hfeed no-featured-image'
        }}
      />
      <section className="posts" id="posts">
        <header className="page-header section-inner">
          <h1 className="page-title">{ category }</h1>
          <div className="tag-archive-meta"></div>
        </header>

        {/* <div className="tagcloud section-inner" style={{paddingBottom: '3em'}}>
          <a href="#" className="tag-cloud-link" aria-label="All(1 item)">All</a>
        </div> */}

        <div className="content section-inner" id="content">
          {posts.map(({ node }) => (
            <Content data={node} key={node.id} /> 
            ))}
        </div>
      </section>
    </Layout>
  );
};

export default Category;

export const pageQuery = graphql`
  query CategoryPage($category: String!) {
    allMarkdownRemark(
      sort: {
        fields: [frontmatter___date], order: DESC
      }, 
      filter: {
        fileAbsolutePath: {regex: "/posts/"}, 
        frontmatter: {            
          categories: { eq: $category }
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