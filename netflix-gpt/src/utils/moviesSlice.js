import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice({
     name:'movies',
     initialState:{
        NowPlayingMovies :null,
        trailerVideo :null
     },
     reducers:{
        addNowPlayingMovies:(state,action)=>{
           state.NowPlayingMovies =action.payload;
        } ,
        addPopularMovies:(state,action)=>{
         state.PopularMovies =action.payload;
      } ,
      addUpcomingMovies:(state,action)=>{
         state.UpcomingMovies =action.payload;
      } ,
      addToprated:(state,action)=>{
         state.Toprated =action.payload;
      } ,
   
        addTrailerVideo : (state ,action) =>{
         state.trailerVideo = action.payload;
        }
    }});
        

export const { addNowPlayingMovies ,addPopularMovies,addUpcomingMovies, addToprated,addTrailerVideo} = moviesSlice.actions;
export default   moviesSlice.reducer; 