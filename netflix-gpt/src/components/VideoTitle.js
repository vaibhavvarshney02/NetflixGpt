import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className=' w-screen aspect-video pt-[10%] px-20 absolute text-white bg-gradient-to-r from-black'>

        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/4'>{overview}</p>
    <div className='py-10'>

        <button className='bg-white text-black p-4 px-11 text-xl  rounded-lg hover:bg-opacity-80  '> ▶Play</button>
        <button className= ' mx-2 bg-gray-500 text-white p-4 px-11 text-xl bg-opacity-50 rounded-lg'> ℹ️ More Info  </button>
        
    </div>
    </div>
  )
}

export default VideoTitle