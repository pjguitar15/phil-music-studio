import React from 'react'
import '../../style.css'

// import sections
import LandingPage from './LandingPage'
import Rates from './Rates'
import About from './About'
import MyFooter from '../../components/MyFooter'
import GetInTouch from '../../components/GetInTouch'

const Home = () => {
  return (
    <>
      <LandingPage />
      <Rates />
      <About />
      <GetInTouch />
      <MyFooter />
    </>
  )
}

export default Home
