import React, { useState, useEffect } from 'react'
import '../style.css'
import { Navbar, NavDropdown, Nav, Container } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'

const MyNavbar = () => {
  const [navbar, setNavbar] = useState(false)

  // useLocation and useNavigate
  const location = useLocation()

  // scrolls back to top when location is changed
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])
  // change background to white when passed 300 axis Y up
  const scrollListener = () => {
    if (window.scrollY >= 170) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', scrollListener)
  return (
    <div className={`shadow ${navbar ? 'fixed-top' : ''
      }`}>
      <Navbar bg='dark' expand='lg' variant='dark' className='py-4'>
        <Container>
          <Navbar.Brand href='#home' className='poppins-500'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              className='bi bi-vinyl-fill me-2 mb-1'
              viewBox='0 0 16 16'
            >
              <path d='M8 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm0 3a1 1 0 1 1 0-2 1 1 0 0 1 0 2z' />
              <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4 8a4 4 0 1 0 8 0 4 4 0 0 0-8 0z' />
            </svg>
            Phil Music Studio
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto text-uppercase poppins-500'>
              <Link
                className='nav-link mx-1'
                to='/'
                style={{ textDecoration: 'none' }}
              >
                Home
              </Link>
              <Link
                className='nav-link mx-1'
                to='/facilities'
                style={{ textDecoration: 'none' }}
              >
                Facilities
              </Link>
              <Link
                className='nav-link mx-1'
                to='/performances'
                style={{ textDecoration: 'none' }}
              >
                Performances
              </Link>
              <Link
                className='nav-link mx-1'
                to='/book-a-schedule'
                style={{ textDecoration: 'none' }}
              >
                Book a Schedule
              </Link>
              <Link
                className='nav-link mx-1'
                to='/contact'
                style={{ textDecoration: 'none' }}
              >
                Contact
              </Link>
              <NavDropdown className='navmx-1' title='Lessons' id='basic-nav-dropdown'>
                <NavDropdown.Item href='#action/3.2'>
                  <Link
                    className='mx-1'
                    to='/drum-lessons'
                    style={{ textDecoration: 'none' }}
                  >
                    Drum Lessons
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3'>
                  <Link
                    className='mx-1'
                    to='/guitar-lessons'
                    style={{ textDecoration: 'none' }}
                  >
                    Guitar Lessons
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#action/3.4'>
                  <Link
                    className='mx-1'
                    to='/our-instructors'
                    style={{ textDecoration: 'none' }}
                  >
                    Our Instructors
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default MyNavbar
