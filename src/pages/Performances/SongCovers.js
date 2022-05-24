import React from 'react'
import ReactPlayer from 'react-player/youtube'

const SongCovers = ({ item }) => {
  return (
    <div className='col-xl-6 col-12 p-3'>
      <ReactPlayer
        width={500}
        height={285}
        className='mx-auto'
        controls={true}
        url={item.link}
      />
      <h5 className='text-center mb-1 mt-3'>{item.title}</h5>
    </div>
  )
}

export default SongCovers
