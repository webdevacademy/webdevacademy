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

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`

    return (
      <footer className="footer bg-dark text-light">
        <Container>
          <span>&copy; 2018 - Web Dev Academy</span>
        </Container>
      </footer>
    );
  }
}

export default Footer
