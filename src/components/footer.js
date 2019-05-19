import React, { Fragment } from 'react'
import { SearchWidget, TextWidget } from './widgets'

const Footer = () => (
  <Fragment>
    <footer className="footer bg-graphite" id="footer">
      <div className="section-inner row clear" role="complementary">
        <div class="column column-1 one-third medium-padding">
          <div class="widgets">
            { TextWidget('Sobre a Academy', 'Aqui na Web Dev Academy você pode aprender sobre Frontend, Backend e Desenvolvimento Web') }
          </div>
        </div>
        
        <div class="column column-2 one-third medium-padding">
          <div class="widgets">
            { TextWidget('Tópicos') }
          </div>
        </div>
        
        <div class="column column-3 one-third medium-padding">
          <div class="widgets">
            { SearchWidget('Pesquisar...') }
          </div>
        </div>
      </div>
    </footer>

    <div className="credits section bg-dark small-padding">
      <div className="credits-inner section-inner clear">

        <p className="credits-left fleft">
          Built with <a href="http://gatsbyjs.com/" target="_blank">Gatsby</a> 
          &nbsp;&amp; <a href="http://netlify.com/" target="_blank">Netlify</a>
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
