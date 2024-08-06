import React from 'react'
import {BG_URL} from "../utils/constants";
import GPTSearchbar from './GPTSearchbar'
import GPTMoviesuggetion from './GPTMoviesuggetion'
// import {BG_URL} from "../utils/constants";

const GPTSearch = () => {
  return (
    <div>
           <div className='absolute -z-10'>
     <img 
     src={BG_URL}
alt='logo'
/>
     </div>
     <GPTSearchbar/>
     <GPTMoviesuggetion/>

    </div>
  )
}

export default GPTSearch