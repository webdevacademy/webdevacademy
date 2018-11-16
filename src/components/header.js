import React, { Fragment } from 'react'
import { Link } from 'gatsby'

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { location, children } = this.props

    return(
      <Fragment>
        <a className="screen-reader-text skip-link" href="#content">
          Pular para o Conte&uacute;do
        </a>       
        <header className="navigation section no-padding bg-dark">
          <nav id="site-navigation" className="navigation-inner section-inner clear" role="navigation">
            <button className="nav-toggle fleft" aria-controls="primary-menu" aria-expanded="false">
              Menu
            </button>

            <div className="main-navigation">
              <ul id="primary-menu" className="menu">
                <li className="menu-item menu-item-home">
                  <Link to={'/'}>Web Dev Academy</Link>
                </li>
                <li className="menu-item">
                  <Link to={"/comece-aqui"}>Comece Aqui</Link>
                </li>
                <li className="menu-item">
                  <Link to={"/sobre"}>Sobre</Link>
                </li>
                <li className="menu-item">
                  <Link to={"/cursos"}>Cursos</Link>
                </li>
                <li className="menu-item">
                  <Link to={"/artigos"}>Artigos</Link>
                </li>
                <li className="menu-item">
                  <Link to={"/downloads"}>Downloads</Link>
                </li>
                <li className="menu-item">
                  <Link to={"/videos"}>Videos</Link>
                </li>
              </ul>			
            </div>
          </nav>
        </header>
      </Fragment>
    );
  }
}

export default Header
