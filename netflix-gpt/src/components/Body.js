import { useEffect } from 'react'
import {createBrowserRouter } from "react-router-dom";
import Browse from './Browse'
import Hellologin from './Hellologin'
import { RouterProvider } from 'react-router-dom';

import { onAuthStateChanged } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';


const Body = () => {
  const dispatch = useDispatch();
 


   const appRouter = createBrowserRouter([
    {
      path: "/",
      element : <Hellologin/>
    },
    {
      path: "/browse",
      element : <Browse/>
    },
   ]);


   useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName,photoURL} = user;
          dispatch(addUser({uid:uid,
            email:email,
            dispalyName:displayName,
            photoURL:photoURL
           }));
         
        // ...
      } else {
      dispatch(removeUser()); 
     
      }
    });
   },[])
  return (
    <div>
       
      <RouterProvider  router={appRouter}/>
    </div>
  );
};

export default Body