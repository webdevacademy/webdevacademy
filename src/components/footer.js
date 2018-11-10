import React, { Fragment } from 'react'
import { Link } from 'gatsby'

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  renderColumn(title) {
    return (
      <div class="column one-third medium-padding">
        <div class="widgets">
          <div class="widget">
            <div class="widget-content clear">
              <h3 class="widget-title">{ title }</h3>
              <div class="textwidget">
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`

    return (
      <Fragment>
        <footer className="footer bg-graphite" id="footer">
          <div class="section-inner row clear" role="complementary">
            { this.renderColumn('Sobre a Academy') }
            { this.renderColumn() }
            { this.renderColumn() }
          </div>
        </footer>
        <div className="credits section bg-dark small-padding">
          <div className="credits-inner section-inner clear">

            <p className="credits-left fleft">
              Built with  &nbsp;
              <a href="http://wordpress.org/" target="_blank">WordPress</a> 
              &nbsp;&amp;&nbsp;
              <a href="http://gatsbyjs.com/" target="_blank">Gatsby</a>
              <span className="sep"> | </span>
              Theme:&nbsp;
              <a href="http://www.andersnoren.se/teman/baskerville-wordpress-theme/" target="_blank" rel="designer">
                Baskerville 2 
              </a>
            </p>

            <p class="credits-right fright">
              <a class="tothetop" title="Para o topo" href="#">Para Cima &uarr;</a>
            </p>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Footer
