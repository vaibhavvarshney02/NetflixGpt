import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData} from "../utils/validate"
import { createUserWithEmailAndPassword } from 'firebase/auth' 
import {auth} from "../utils/firebase";
import { signInWithEmailAndPassword } from 'firebase/auth';


const Hellologin = () => {
  const [errormess,setErrormess] =useState(null);
    const [isSignInForm ,setIsSignInForm] = useState(true);
    // const name = useRef(null);
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
  createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
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