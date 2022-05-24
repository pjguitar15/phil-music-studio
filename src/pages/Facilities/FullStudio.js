import React from 'react'
import { Container, Card } from 'react-bootstrap'
// item images
import studioImg from '../../assets/landing-page.jpg'
import recordingImg from '../../assets/recording.jpg'
import mixingImg from '../../assets/mixing.jpg'
import lessonsImg from '../../assets/drum-lessons.jpg'

const FullStudio = () => {
  const rateItems = [
    {
      id: 2,
      title: 'Drums Space',
      img: recordingImg,
    },
    {
      id: 3,
      title: 'Guitar Players Space',
      img: mixingImg,
    },
    {
      id: 4,
      title: 'Bassist Space',
      img: lessonsImg,
    },
  ]
  return (
    <>
      <Container className='py-5'>
        <h3 className='poppins-600 mb-3'>STUDIO ROOM</h3>
        <div className='row'>
          <div className='col-12'>
            <Card className='border-0 mb-4'>
              <div className='position-relative'>
                <Card.Img
                  className='rounded-0'
                  style={{ height: '350px', objectFit: 'cover' }}
                  variant='top'
                  src={studioImg}
                />
                <Card.Body
                  className='px-5 bg-danger text-light position-absolute'
                  style={{ bottom: '0' }}
                >
                  <Card.Text className='poppins-500 m-0'>
                    Full Studio View
                  </Card.Text>
                </Card.Body>
              </div>
            </Card>
          </div>
          {rateItems.map((item, index) => (
            <div key={index} className='col-12 col-md-6 col-lg-4'>
              <Card className='border-0'>
                <Card.Img
                  className='rounded-0'
                  style={{ height: '150px', objectFit: 'cover' }}
                  variant='top'
                  src={item.img}
                />
                <Card.Body className='px-0'>
                  <Card.Text className='poppins-500 m-0'>
                    {item.title}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </Container>
    </>
  )
}

export default FullStudio
