
import useMoviehook from '../hooks/useMoviehook'
import Header from './Header'
import Maincontainer from './Maincontainer';
import Secondarycontainer from './Secondarycontainer';



const Browse = () => {

useMoviehook();
  return (
    <div>   
      <Header/>
      <Maincontainer/>
      <Secondarycontainer/>
    </div>
  )
}

export default Browse