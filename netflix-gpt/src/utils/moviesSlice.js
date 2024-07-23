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
        addTrailerVideo : (state ,action) =>{
         state.trailerVideo = action.payload;
        }
    }});
        

export const { addNowPlayingMovies ,addTrailerVideo} = moviesSlice.actions;
export default   moviesSlice.reducer; 