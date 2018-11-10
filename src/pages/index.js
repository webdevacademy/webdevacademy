import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import { Container, Row, Card, CardText, CardBody, CardTitle, CardSubtitle, Jumbotron } from 'reactstrap'

import Layout from '../components/layout'

class Home extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )
    const posts = get(this, 'props.data.allWordpressPost.edges')
    const placeholder = 'http://placehold.it/800x480&text=:(';

    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        <Row className="posts" tag="section">
          {posts.map(({ node }) => {
            const title = get(node, 'frontmatter.title') || node.title
            const url = `/${node.categories[0].slug}/${node.slug}`;

            return (
              <article key={node.id} className="col-sm-6 col-md-4">
                <Card className="mb-4">
                  <Link to={url}>
                    <img className="card-img-top" src={node.image || placeholder} alt={node.title} />
                    <CardBody>
                      <CardTitle className="text-dark" 
                        dangerouslySetInnerHTML={{ __html: title }} >
                      </CardTitle>
                    </CardBody>
                  </Link>
                {/* <p dangerouslySetInnerHTML={{ __html: node.description.description }} /> */}
                </Card>
              </article>
            )
          })}
        </Row>
      </Layout>
    )
  }
}

export default Home

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allWordpressPost {
      edges {
        node {
          id
          slug
          title
          categories {
            slug
          }   
        }
      }
    }
  }
`
