
import useMoviehook from '../hooks/useMoviehook'

import Header from './Header'
import Maincontainer from './Maincontainer';
import Secondarycontainer from './Secondarycontainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useToprated from '../hooks/useToprated';



const Browse = () => {

useMoviehook();
usePopularMovies();
useUpcomingMovies();
useToprated();

  return (
    <div>   
      <Header/>
      <Maincontainer/>
      <Secondarycontainer/>
    </div>
  )
}

export default Browse