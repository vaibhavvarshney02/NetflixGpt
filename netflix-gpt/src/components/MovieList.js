import React from 'react'
import MovieCard from './MovieCard'


const MovieList = ({ title ,movies }) => {
    // console.log(movies);
  return (
    <div className='z-10 p-2 text-white'>
        <h1 className='text-4xl  text-white py-4 font-bold'>{title}</h1>
        <div className='flex overflow-x-scroll pl-2'>
            
            <div className='flex gap-4'>
            {movies?.map(movie =>(
               <MovieCard key={movie.id} posterpath={movie.poster_path}/>))}
    
            </div>
            </div>
   

 
    </div>
  )
}

export default MovieList