import React from 'react'
import MovieList from "./MovieList";
import { useSelector } from 'react-redux';
const Secondarycontainer = () => {
  const movies =  useSelector(store => store.movies)
  return (
    <div className='bg-black'>

      
<div className='-mt-60 relative z-20'>
<MovieList title={"Now Playing"} movies =  {movies.NowPlayingMovies }/>
<MovieList title={"Popular"} movies =  {movies.PopularMovies }/>
    

      <MovieList title={"Upcoming Movies"} movies =  {movies.UpcomingMovies}/>
      <MovieList title={"Top Rated"} movies =  {movies.Toprated }/>
      <MovieList title={"Horror"} movies =  {movies.NowPlayingMovies }/>
</div>
    
    </div>
  )
}

export default Secondarycontainer