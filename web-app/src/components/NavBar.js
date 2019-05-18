import React, { Component } from 'react'
import { Navbar, NavItem, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class NavBar extends Component {
  render () {
    const { user } = this.props
    return (
      <div>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />     
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Anonymous Reports</Navbar.Brand>
          <Navbar id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/classify">Classify</Nav.Link>
            </Nav>
          </Navbar>

        </Navbar>
      </div>
    )
  }
}

export default connect(null)(NavBar)