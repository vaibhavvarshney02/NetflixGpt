
import useMoviehook from '../hooks/useMoviehook'

import Header from './Header'
import Maincontainer from './Maincontainer';
import Secondarycontainer from './Secondarycontainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GPTSearch from './GPTSearch';
import useToprated from '../hooks/useToprated';
// import GPTSearch from './GPTSearch';
import { useSelector } from 'react-redux';



const Browse = () => {
  const showGptSearch = useSelector( store=> store.gpt.showGptSearch)

useMoviehook();
usePopularMovies();
useUpcomingMovies();
useToprated();

  return (
    <div className='bg-black md:bg-inherit'>   
      <Header/>
      
        {showGptSearch ?(
          <GPTSearch/>
        ) :(
          <>
          
      <Maincontainer/>
      <Secondarycontainer/>
          
          </>
        )
      }
     
    </div>
  )
}

export default Browse