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

console.log(email.current.value);
console.log(password.current.value);
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
    console.log(user);
   
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