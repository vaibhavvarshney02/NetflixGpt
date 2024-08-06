import React from 'react'
import {signOut } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { addUser , removeUser } from '../utils/userSlice';
import {LOGO} from '../utils/constants';
import { toggleGptSearchView } from '../utils/GPTSlice';
import {SUPPORTED_LANGUAGE} from '../utils/constants';
import lang from "../utils/languageconstant";
import { changeLanguage } from '../utils/configSlice';




const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);
const navigate = useNavigate();


  const handleSignOut= ()=>{
   
    signOut(auth)
    .then(() => {

    
    }).catch((error) => {
      // An error happened.

    });
  }
  useEffect(()=>{
   const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName,photoURL} = user;
          dispatch(
            addUser({uid:uid,
            email:email,
            dispalyName:displayName,
            photoURL:photoURL
           }));
           navigate("/browse");
         
        // ...
      } else {
      dispatch(removeUser()); 
      navigate("/");
     
      }
    });
    // unsubscribe when components unmount
    return () => unsubscribe();
   },[])
   const handleGptSearch = () =>{
    dispatch(toggleGptSearchView());
   };
   const handleLanguagechange = (e) =>{
    dispatch(changeLanguage(e.target.value));
    
   }
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>

<img  className='w-40'
src={LOGO}
alt='logo'
/>
{ user && 
 <div className='flex p-2'>
  <select className='p-2 m-2 bg-gray-900 text-white ' onChange={handleLanguagechange}>
  
  {SUPPORTED_LANGUAGE.map((lang) => (
   <option  key={lang.identifire}  value={lang.identifire} >
    {lang.name}
    </option>
   ))}
  </select>
  <button className='py-2 px-4 mx-2  my-2 bg-purple-800 text-white rounded-lg'  onClick={handleGptSearch}>GPT Search</button>
<img  className='w-12 h-12'
src={user?.photoUrl}
alt='usericon'

/>
<button onClick={handleSignOut} className='font-bold text-white '>(Sign Out)</button>
</div>
}
    </div>
  )
}

export default Header