import React, { Fragment } from 'react'
import { Link } from 'gatsby'

const Header = ({siteTitle, menuLinks}) => (
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
            <li className="menu-item menu-item-home" key="home">
              <Link to="/">{siteTitle}</Link>
            </li>
            {menuLinks.map(link =>
              <li className="menu-item" key={link.link}>
                <Link to={link.link}>{link.name}</Link>
              </li>
            )}
            <li className="menu-item" key="home">
              <a href="https://youtube.com/c/webdevacademy" target="_blank">YouTube</a>
            </li>
            <li className="menu-item" key="home">
              <a href="https://github.com/webdevacademy" target="_blank">Github</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  </Fragment>
)

export default Header
