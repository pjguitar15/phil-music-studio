import React from 'react'
import { Container } from 'react-bootstrap'

const About = () => {
  return (
    <div className='bg-dark py-5 text-light'>
      <Container>
        <h3 className='poppins-300'>
          ABOUT <span className='text-danger poppins-600'>OUR STUDIO</span>
        </h3>
        <p className='poppins-300 col-lg-8 col-12' style={{ textAlign: 'justify' }}>
          We aim to provide the best quality band rehearsal experience possible.
          Our goal is to develop talents and skills with a friendly musical
          environment. We want to produce good quality music and give
          opportunity to people towards their own musical career success.
        </p>
      </Container>
    </div>
  )
}

export default About
