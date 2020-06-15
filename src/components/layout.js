import React, { Fragment } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import Header from './header'
import Footer from './footer'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={data => (
      <Fragment>  
        <Header 
          menuLinks={data.site.siteMetadata.menuLinks} 
          siteTitle={data.site.siteMetadata.title} 
        />
        <div className="wrapper section medium-padding clear">
          {children}
        </div>
        <Footer />
      </Fragment>
    )}
  />
)


export default Layout
