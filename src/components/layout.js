import React, { Fragment } from 'react'

import Header from './header'
import Footer from './footer'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    
    return (
      <Fragment>
        <Header location />
        <div className="wrapper section medium-padding clear">
          {children}
        </div>
        <Footer />
      </Fragment>
    )
  }
}

export default Template
