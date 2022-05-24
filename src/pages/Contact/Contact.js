import React from 'react'
import { Container, Form, Button } from 'react-bootstrap'

const Contact = () => {
  return (
    <>
      <Container>
        <div className='row my-5 shadow-sm'>
          <Form className='col-md-6 col-12 p-5'>
            <h3 className='poppins-600'>Talk to Us</h3>
            <Form.Group className='my-2'>
              <Form.Text>Enter your full name</Form.Text>
              <Form.Control type='text' placeholder='Full name' />
            </Form.Group>
            <Form.Group className='my-2'>
              <Form.Text>Enter your email</Form.Text>
              <Form.Control type='text' placeholder='Email' />
            </Form.Group>
            <Form.Group className='my-2'>
              <Form.Text>Enter your contact number</Form.Text>
              <Form.Control type='text' placeholder='Contact number' />
            </Form.Group>
            <Form.Group className='my-2'>
              <Form.Text>Please type your inquiry</Form.Text>
              <Form.Control as='textarea' row={3} placeholder='Your inquiry' />
            </Form.Group>
            <Form.Group>
              <Button size='sm'>Submit</Button>
            </Form.Group>
          </Form>
          {/* right col */}
          <div className='col-12 col-md-6 bg-dark text-light p-5'>
            <h4 className='poppins-500'>Contact Us</h4>
            <h6 className='poppins-300 mt-3'>Contact Number: 09970832389</h6>
            <h6 className='poppins-300 mt-3'>
              Email: philmusicstudio@gmail.com
            </h6>
            <h6 className='poppins-300 mt-3'>
              Location: Block 26 Lot 28, Beverly St. Sampaguita Village, Trece
              Martires City, Cavite
            </h6>
            <h6 className='poppins-300 mt-3'>
              Facebook Page: /philmusicstudio
            </h6>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Contact
