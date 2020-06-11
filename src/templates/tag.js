import React from 'react';
import { Helmet } from 'react-helmet'

// Components
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Content from './content';

const Tag = (props) => {
  const { tag } = props.pageContext;
  const posts = props.data.allWordpressPost.edges;
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
  query TagPage($slug: String = "") {
    allWordpressPost(sort: {fields: date, order: DESC}, filter: {tags: {elemMatch: {slug: {eq: $slug}}}}) {
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