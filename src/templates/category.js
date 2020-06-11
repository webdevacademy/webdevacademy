import React from 'react';
import { Helmet } from 'react-helmet'

// Components
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Content from './content';

const Category = (props) => {
  const { category } = props.pageContext;
  const posts = props.data.allWordpressPost.edges;
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
  query CategoryPage($slug: String = "") {
    allWordpressPost(sort: {fields: date, order: DESC}, filter: {categories: {elemMatch: {slug: {eq: $slug}}}}) {
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
      totalCount
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;