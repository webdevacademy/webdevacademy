import React, { Fragment } from 'react'
import { SearchWidget, TagCloudWidget, TextWidget } from './widgets.js'

const Footer = () => (
  <Fragment>
    <footer className="footer bg-graphite" id="footer">
      <div className="section-inner row clear" role="complementary">
        <div className="column column-1 one-third medium-padding">
          <div className="widgets">
            <TextWidget title="Sobre a Academy">
              Aqui na Web Dev Academy você pode aprender sobre Frontend, Backend e Desenvolvimento Web
            </TextWidget>
          </div>
        </div>
        
        <div className="column column-2 one-third medium-padding">
          <div className="widgets">
            <TagCloudWidget title="Tópicos" />
          </div>
        </div>
        
        <div className="column column-3 one-third medium-padding">
          <div className="widgets">
            <SearchWidget title="Pesquisar" />
          </div>
        </div>
      </div>
    </footer>

    <div className="credits section bg-dark small-padding">
      <div className="credits-inner section-inner clear">
        <p className="credits-left fleft">
          <a href="#">Desde 2014</a> 
          <span className="sep"> | </span>
          Feito com <a href="https://gatsbyjs.org/" target="_blank">Gatsby</a> 
          &nbsp;&amp; <a href="https://wordpress.org/" target="_blank">WordPress</a>
          <span className="sep"> | </span>
          Theme:&nbsp;
          <a href="http://www.andersnoren.se/teman/baskerville-wordpress-theme/" target="_blank" rel="designer">
            Baskerville 2 
          </a>
        </p>

        <p className="credits-right fright">
          <a className="tothetop" title="Para o topo" href="#">Para Cima &uarr;</a>
        </p>
      </div>
    </div>
  </Fragment>
)

export default Footer
