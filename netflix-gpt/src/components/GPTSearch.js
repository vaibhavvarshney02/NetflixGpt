import React from 'react'
import {BG_URL} from "../utils/constants";
import GPTSearchbar from './GPTSearchbar'
import GPTMoviesuggetion from './GPTMoviesuggetion'


const GPTSearch = () => {
  return (
    <div>
           <div className='fixed -z-30'>
     <img 
     className='h-screen md:h-auto object-cover'
     src={BG_URL} alt='logo'/>
     </div>
     <GPTSearchbar/>
     <div>
      <GPTMoviesuggetion/>
     </div>
     

    </div>
  )
}

export default GPTSearch;