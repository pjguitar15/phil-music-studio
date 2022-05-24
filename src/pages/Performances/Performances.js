import React from 'react'
import ReactPlayer from 'react-player/youtube'
import { Container } from 'react-bootstrap'
import SongCovers from './SongCovers'
const Performances = () => {
  const youtubeLinks = [
    {
      id: 1,
      link: 'https://www.youtube.com/watch?v=Pi0e2WRvwZs',
      title: 'Binibini-Zack Tabudlo (by Star Band)',
    },
    {
      id: 2,
      link: 'https://www.youtube.com/watch?v=DuVaLWf2114',
      title: 'Nothings gonna stop us now cover by Moon Band',
    },
    {
      id: 3,
      link: 'https://www.youtube.com/watch?v=oPkaHxvxoso',
      title: 'Get Lucky cover by Sun Band',
    },
    {
      id: 4,
      link: 'https://www.youtube.com/watch?v=PiXXfiUh-QU',
      title: 'Sultans of Swing cover by The Band',
    },
  ]
  return (
    <>
      <Container>
        <h3 className='text-center poppins-500 my-4'>Band of the Month</h3>
        <ReactPlayer
          className='mx-auto'
          controls={true}
          url='https://www.youtube.com/watch?v=fbDdyzJyl6s'
        />
        <div className='row py-5'>
          {youtubeLinks.map((item, index) => (
            <SongCovers key={index} item={item} />
          ))}
        </div>
      </Container>
    </>
  )
}

export default Performances
