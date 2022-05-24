import React from 'react'
import { Container } from 'react-bootstrap'
import '../../style.css'

const LandingPage = () => {
  return (
    <>
      <div className='bg-warning landing-page text-light'>
        <div className='landing-page-content'>
          <div className='text-center'>
            <div>
              <h1 className='poppins-500'>
                <span className='text-danger'>Welcome to </span>Phil Music Studio
              </h1>
              <p className='mx-auto poppins-300 col-lg-7 col-10 col-md-9'>
                If you are looking for quality band rehearsal rental, band recording, audio mixing, guitar and drum lessons, then our studio has
                what you need!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LandingPage
