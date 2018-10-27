import React from 'react'
import { Link } from 'gatsby'
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap'

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    return(
      <Navbar color="dark" dark fixed="fixed" expand="md">
        <Container>
          <NavbarBrand href={rootPath}>
            Web Dev Academy
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link className="nav-link" to='/tags/html-css'>HTML & CSS</Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to='/tags/bootstrap'>Bootstrap</Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to='/tags/javascript'>JavaScript</Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to='/tags/react'>React</Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to='/tags/nodejs'>Node.js</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Header
