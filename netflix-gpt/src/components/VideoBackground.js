import React from 'react'

import { useDispatch, useSelector } from 'react-redux';
import useMovieVideo from '../hooks/useMovieVideo';

const VideoBackground = ({movieId}) => {
    const dispatch = useDispatch();
const trailerVideo = useSelector(store => store.movies?.trailerVideo)

// fetch trailer video

useMovieVideo(movieId);
  return (
    <div className='w-screen'>

<iframe  
 className='w-screen aspect-video '
  src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1" }
   title="YouTube video player"  
   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
 ></iframe>


    </div>
  )
}

export default VideoBackground;


