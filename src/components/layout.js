import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import { Container, Row} from 'reactstrap'

import Header from './header'
import Footer from './footer'

// main site style
import 'prismjs/themes/prism-twilight.css'
import '../assets/style.css'
import '../assets/custom.css'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    
    return (
      <Fragment>
        <Header location />
        {children}
        <Footer />
      </Fragment>
    )
  }
}

export default Template
