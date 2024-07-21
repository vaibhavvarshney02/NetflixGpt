
import {createBrowserRouter } from "react-router-dom";
import Browse from './Browse'
import Hellologin from './Hellologin'
import { RouterProvider } from 'react-router-dom';



const Body = () => {

 


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


  
  return (
    <div>
       
      <RouterProvider  router={appRouter}/>
    </div>
  );
};

export default Body