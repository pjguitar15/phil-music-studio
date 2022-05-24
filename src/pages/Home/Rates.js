import React from 'react'
import { Container, Card } from 'react-bootstrap'
import '../../style.css'
// item images
import studioImg from '../../assets/landing-page.jpg'
import recordingImg from '../../assets/recording.jpg'
import mixingImg from '../../assets/mixing.jpg'
import lessonsImg from '../../assets/drum-lessons.jpg'

const Rates = () => {
  const rateItems = [
    {
      id: 1,
      title: 'Studio rental',
      description:
        'Support musicians to flourish by providing great room acoustics, excellent facilities, a friendly atmosphere and convenient location. Space affects the quality and performance of music.',
      price: 'P250 / hour',
      img: studioImg,
    },
    {
      id: 2,
      title: 'Recording',
      description:
        'Recording is the art of catching lighting in a bottle — capturing those inspired moments and performances that make music so compelling. Let us take care of the gear and technical details so you can focus on performance.',
      price: 'P500 / hour',
      img: recordingImg,
    },
    {
      id: 3,
      title: 'Mixing',
      description:
        'Mixing is the process of balancing the elements in a song to elevate the emotion and vives it conveys. Above all else, our goal in this stage is to help you achieve your vision for how you want each song to move your audience.',
      price: 'P2,000 / song',
      img: mixingImg,
    },
    {
      id: 4,
      title: 'Lessons',
      description:
        'We provide music lessons for guitar and drums. Our instructors has the required skills to teach and has a lot of experiences with the instrument. Let us know what skill level you are in and we can start from there.',
      price: 'P400 / 1 hour 30 min',
      img: lessonsImg,
    },
  ]
  return (
    <>
      <Container className='py-5'>
        <div className='row'>
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
                  <Card.Title className='poppins-500 m-0'>
                    {item.title}
                  </Card.Title>
                  <p className='lato m-0'>{item.price}</p>
                  <p className='lato text-muted mt-2' style={{ textAlign: 'justified' }}>{item.description}</p>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </Container>
    </>
  )
}

export default Rates
