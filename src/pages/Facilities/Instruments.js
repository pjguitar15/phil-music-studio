import React from 'react'
import { Container, Card } from 'react-bootstrap'
// guitar photos
import guitar from '../../assets/white-fender.jpg'
import bassGuitar from '../../assets/bass-guitar.jpg'

const Instruments = () => {
  return (
    <>
      <Container className='py-5'>
        <h3 className='poppins-600 mb-3'>OUR INSTRUMENTS</h3>
        <div className='row'>
          <div className='col-12 col-md-6 col-lg-3 bg-warning'>
            <Card className='border-0 mb-4'>
              <div className='position-relative'>
                <Card.Img
                  className='rounded-0 h-100'
                  variant='top'
                  src={guitar}
                />
                <Card.Body
                  className='px-5 bg-danger text-light position-absolute w-100'
                  style={{ bottom: '0' }}
                >
                  <Card.Text className='poppins-500 m-0'>
                    Squire Stratocaster
                  </Card.Text>
                </Card.Body>
              </div>
            </Card>
          </div>
          <div className='col-12 col-md-6 col-lg-3'>
            <Card className='border-0 mb-4 bg-warning'>
              <Card.Img
                className='rounded-0 w-100'
                style={{ objectFit: 'cover' }}
                variant='top'
                src={bassGuitar}
              />
              <div>
                <Card.Body
                  className='px-5 bg-danger text-light position-absolute w-100'
                  style={{ bottom: '0' }}
                >
                  <Card.Text className='poppins-500 m-0'>Bass Guitar</Card.Text>
                </Card.Body>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Instruments
