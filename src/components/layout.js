import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import { Container, Row} from 'reactstrap'

import Header from './header'
import Footer from './footer'

// main site style
import 'prismjs/themes/prism-twilight.css'
import '../assets/index.scss'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1>
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            Web Dev Academy
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3>
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            Web Dev Academy
          </Link>
        </h3>
      )
    }
    return (
      <Fragment>
        <Header />
        <Container className="mt-5" tag="main">
          {children}
        </Container>
        <Footer />
      </Fragment>
    )
  }
}

export default Template
