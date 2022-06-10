import React, {useRef} from 'react'
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap'

import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Header = (props) => {
  const inputRef = useRef()
  const navigate = useNavigate();

  const formSubmitted = (e) => {
    console.log(e)
    e.preventDefault()

    console.log(inputRef.current.value)

    props.setSearchKey(inputRef.current.value)

    navigate("/");
    // navigate(`search/?q=${inputRef.current.value}`);
  }
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
 
          <Navbar.Brand ><Link to="/" style={{textDecoration: "none", color: "black"}}>GeekGallery</Link></Navbar.Brand>
       
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>
            <Form className="d-flex" onClick={formSubmitted} action='#'>
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                name="search"
                ref={inputRef}
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header

