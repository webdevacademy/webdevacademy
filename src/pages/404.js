import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const NotFoundPage = () => (
  <Layout>
    <Helmet
      htmlAttributes={{ lang: 'pt-br' }}
      // meta={[{ name: 'description', content: siteDescription }]}
      title="Página não Encontrada – Web Dev Academy"
      bodyAttributes={{
        'class': 'page single'
      }}
    />
    
    <div className="section-inner">
      <div className="content center clear" id="content">
        <section className="clear">
          <header className="post-header">
            <h1 className="post-title entry-title">
              Opa! Página não encontrada. =(
            </h1>
          </header>
          <div className="post-content clear">
            <p>
              Parece que nada foi encontrado neste endereço.<br />
              Você pode tentar ir para a <Link to={'/'}>Página Inicial</Link> ou prefere fazer uma busca?
          </p>
          </div>
        </section>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
