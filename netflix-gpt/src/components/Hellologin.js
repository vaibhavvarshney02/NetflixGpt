import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData} from "../utils/validate"
import { createUserWithEmailAndPassword } from 'firebase/auth' 
import {auth} from "../utils/firebase";
import { signInWithEmailAndPassword , updateProfile} from 'firebase/auth';

import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../utils/userSlice';


const Hellologin = () => {
  
  const [errormess,setErrormess] =useState(null);
    const [isSignInForm ,setIsSignInForm] = useState(true);
    const dispatch = useDispatch();
   
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    
    const handlebtnclick = () =>{
      // validate the form data
      // checkValidData(email,password)

// console.log(email.current.value);
// console.log(password.current.value);
// console.log(name.current.value);
const mess =checkValidData(email.current.value,password.current.value);

setErrormess(mess);
//Sign UP logic
if(!isSignInForm){
  createUserWithEmailAndPassword(
     auth,
     email.current.value,
     password.current.value)
  .then((userCredential) => {
    // Signed up hone ke baad update ho jayega
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name.current.value, photoURL: "data:image/png;base64,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"
    }).then(() => {
      // Profile updated!
      const {uid,email,displayName,photoURL} = auth.currentUser;
      dispatch(
        addUser({
        uid:uid,
        email:email,
        dispalyName:displayName,
        photoURL:photoURL
       })
      );
     


      // ...
    }).catch((error) => {
      // An error occurred
      setErrormess(error.mess);
      // ...
    });
    // console.log(user);
  
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrormess(errorCode+ "-" +errorMessage);
    // ..
  });

}
else{
// Sign In logic
signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user; 
  
   
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrormess(errorCode+ "-" +errorMessage);
  });

}



    };
  const toggleSignInform = () =>{
    setIsSignInForm(!isSignInForm)
  }
  return (
    <div>
     <Header/>
     <div className='absolute'>
     <img 
     src='https://assets.nflxext.com/ffe/siteui/vlv3/655a9668-b002-4262-8afb-cf71e45d1956/5ff265b6-3037-44b2-b071-e81750b21783/IN-en-20240715-POP_SIGNUP_TWO_WEEKS-perspective_WEB_c6d6616f-4478-4ac2-bdac-f54b444771dd_small.jpg'
alt='logo'
/>
     </div>
      <form onSubmit={(e)=> e.preventDefault() }
       className=' w-3/12 absolute p-14 bg-black my-36  mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
      <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign-Up" }</h1>
      


      { !isSignInForm  && 
      (<input 
        ref={name}
        type='text'
         placeholder=' Full Name'
          className='py-4 my-4 w-full bg-gray-700'/>
      )}


        <input
        ref={email}
        type='text'
         placeholder=' Email Address'
          className='py-4 my-4 w-full bg-gray-700'/>


  
        <input 
        ref={password}
        type='Password'
         placeholder='Password'
          className='py-4 my-4 w-full bg-gray-700'/>
  <p className='text-red-500 font-bold text-lg py-2  '>{errormess}</p>

        <button className='py-4 my-6  bg-red-700 w-full rounded-lg' onClick={handlebtnclick}>
        {isSignInForm ? "Sign In" : "Sign-Up" }
        </button>
        <p className='py-4  cursor-pointer' onClick={toggleSignInform}>{isSignInForm ? "New to netflix ? Sign-UP Now" : "Already Registerd Sign-In Now" }</p>
        
      </form>
    </div>
  )
}

export default Hellologin