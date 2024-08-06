import React, { useRef, useState } from 'react'
import Header from './Header'
import {BG_URL} from "../utils/constants";
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
      displayName: name.current.value, photoURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAb1BMVEUNfoD///8Ae30Adnj7/f0AcHLt9PSiw8P2+vpTnZ7y+Pjl8PCBsrMAdHdMl5kxioy+29upzc7U5OS91tdaoqN3qKmIr7CJubqSvb6x0dIxhIZEjI48h4hhoKGaxMXO5OR6tbZvrrA9k5Uah4nK2tuXb2ZTAAAD90lEQVR4nO3bYXeqIBwGcAVyJqaJOTGHpvb9P+PVWlsmnVZ4cTvn+b2698X47xkIKug4AAAAAAAAAAAAAAAAAAAAAAAAALMiJwuVduYs3Te1L6Oo3DvW8/QFP8r1jKVJrKraZ8ytKxVbjUOcOEu4y1hQS9XNUZmqred+YmlmMQ1xDttLZZcnETVvMePuFR46ttKQuPKuS4udaZpNOGrQdb3cUt+QfeWPS/O1WRqiuHuDZ5bChP5taVGalCZdetug625jK2kiMS2dmIwK2kw6pp8FQith5LSyy00mAVpoWnQTG3PAvtZUZm+blxsk8VbTosuNhu4PS3/oKrvp639HOr38T9YWwuy0lUX7epgs0Da5sxDmoA8TIczgFw6z18OQWDeluIGNCaDUhtka3G4SzZrZt7i3MTVrB0Vhss7c3pmd2Fk0K01lrgzCaMeZwbh9pnSk6ZrUqEnaTLrGt9MxuvnM9LZ5k9/Mzqyy9giQsHHpQL1+M3NukuSjvvEqO/fMQ+m4GD0EeKFhlr7JzU58dQ4TIbX52CzFV+d42/VqhjZpm6fCY77PU9nafaFBoreU+z7zRBrG5q8ATm1SJ8re399VZ7FbLqU71VfOIme+0oTQwRJvAZerDAAAAAAAAAAAAPAyQpc6WDk7Qh2VZdEyceat2reWFdzzRD7L4cYni9Ouo/NsQQz6XknPO5yBnK3RHxdvi1qkajNLnP5aUenX7p3RfvMraHPaamNFa77XRVZOU1/vBkrb4+yyd+fldGN08fRRwpsd9MpumFVyVTuPXp0L+ol4r6aH96qZf9sH6OhwpZeo54+LD0fm96oSbJLFz+xeM/TmpCirpSqf2JPsr3inVPl2cnh2aCuxtnN/Nhpmn3PQUWYtofRRD532TjsVJrX+bFhgO4tDWs3flHl1kqto79xLNORwulKFw2a5NonrFZn9NZNK3VmofrxzkVZStR1drVb0YkOH/5IuyvIqFVx/9nD46bTpNkvczSjtqduhg3yfcyGORXU4NOvBrjmEb4kQgnuBP73gvweYiq19hTBCSHzQnBcfhQqCwDvp/8HuhzjjibL/7c51HO25u5fwsF2mU77jbEhzb7A9I0h3q0UulUmcXRHcmZl+hAVCtjPefZuhq07W92baB3xey/g3dMq34VhSdXw6TyCOcoFDVA+R4YFEFj/uoGE1SsL28e3CQvrFvWszmaTi7pL4iR8LmamY/NYkZ6c3K3GUhbLY8v5p/mptYaxfcXgfowqzqOxm/cT0/yHDiHPijzJSTZiHb2cyzA9KReXH/g++Tbp8Wfz1W5PPL37/VgwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPi9/gH7gDBYPxaZ2QAAAABJRU5ErkJggg=="
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
     src={BG_URL}
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