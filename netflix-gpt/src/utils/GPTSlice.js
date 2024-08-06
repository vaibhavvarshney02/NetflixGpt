import { createSlice } from "@reduxjs/toolkit";

const GPTSlice = createSlice({
     name:'gpt',
     initialState:{
        showGptSearch:false,
     },
     reducers:{
        toggleGptSearchView:(state,action)=>{
            state.showGptSearch =!state.showGptSearch;
        },
    },
      
});
export const { toggleGptSearchView} = GPTSlice.actions;
export default  GPTSlice.reducer; 