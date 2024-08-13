import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterpath}) => {
  if(!posterpath) return null;
  return (
    <div className='w-48 pr-4 '>
        <img  alt="Movie-Card"
        src={IMG_CDN_URL + posterpath}
        />
    </div>
  )
}

export default MovieCard