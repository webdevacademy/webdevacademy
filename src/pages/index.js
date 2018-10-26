import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import { Container, Row, Card, CardText, CardBody, CardTitle, CardSubtitle, Jumbotron } from 'reactstrap'

import Layout from '../components/layout'
import { rhythm } from '../utils/typography'

class Home extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )
    const posts = get(this, 'props.data.allContentfulPost.edges')
    const placeholder = 'http://placehold.it/800x480&text=:(';

    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        <Container className="mt-5">
          <Row>
            {posts.map(({ node }) => {
              const title = get(node, 'frontmatter.title') || node.title
              return (
                <article key={node.id} className="col-sm-6 col-md-4">
                  <Card className="mb-4">
                    <Link to={node.slug}>                      
                      <img className="card-img-top" src={node.image || placeholder} alt={node.title} />
                      <CardBody>
                        <CardTitle className="text-dark">{title}</CardTitle>
                      </CardBody>
                    </Link>                  
                  {/* <p dangerouslySetInnerHTML={{ __html: node.description.description }} /> */}
                  </Card>
                </article>
              )
            })}
          </Row>
        </Container>
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
    allContentfulPost {
      edges {
        node {
          id
          title
          slug
          description {
            description
          }
        }
      }
    }
  }
`
