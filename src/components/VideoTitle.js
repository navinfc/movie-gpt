import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-auto pt-[22%] px-24 absolute text-white bg-gradient-to-r from black'>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='py-6 text-lg w-1/4'>{overview}</p>
      <div className=''>
        <button className='bg-white text-black p-4 px-12 text-lg bg-opacity-65 rounded-lg hover:bg-opacity-45'>▶️ Play</button>
        <button className='bg-white text-black p-4 px-12 mx-2 text-lg bg-opacity-65 rounded-lg hover:bg-opacity-45'>ℹ️ More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle