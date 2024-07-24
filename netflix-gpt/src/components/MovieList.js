import React from 'react'
import MovieCard from './MovieCard'


const MovieList = ({ title ,movies }) => {
    console.log(movies);
  return (
    <div className='px-6'>
        <h1 className='text-4xl  text-white py-4 font-bold'>{title}</h1>
        <div className='flex overflow-x-scroll'>
            
            <div className='flex'>
            {movies?.map(movie =>( <MovieCard key={movie.id} posterpath={movie.poster_path}/>))}
    
            </div>
            </div>
   

 
    </div>
  )
}

export default MovieList