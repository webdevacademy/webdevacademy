import React from 'react'
import { Link } from 'gatsby'
import { Container, Row} from 'reactstrap'

import 'prismjs/themes/prism-twilight.css'

// main site style
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
      <Container className="mt-5">
        {header}
        {children}
      </Container>
    )
  }
}

export default Template
