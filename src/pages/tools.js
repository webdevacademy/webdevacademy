import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const ToolsPage = () => (
  <Layout>
    <Helmet
      htmlAttributes={{ lang: 'pt-br' }}
      // meta={[{ name: 'description', content: siteDescription }]}
      title="Ferramentas e Downloads – Web Dev Academy"
      bodyAttributes={{
        'class': 'page single'
      }}
    />
    
    <div className="section-inner">
      <div className="content center clear" id="content">
        <section className="clear">
          <header className="page-header">
            <h1 className="page-title entry-title">Ferramentas Recomendadas</h1>
          </header>
          <div className="post-content clear">
            <h3>lorem ipsum</h3>
          </div>
        </section>
      </div>
    </div>
  </Layout>
)

export default ToolsPage
