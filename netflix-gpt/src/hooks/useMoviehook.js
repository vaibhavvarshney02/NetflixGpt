
import { useEffect } from "react"; 
import { useDispatch } from 'react-redux';
import {API_OPTIONS} from "../utils/constants";
import { addNowPlayingMovies } from '../utils/moviesSlice';
 

const useMoviehook = () =>{
    const dispatch = useDispatch();

    const getNowplayingMovies = async () =>{
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', 
        API_OPTIONS);
        const json = await data.json();
    
          dispatch(addNowPlayingMovies(json.results));
    };
    
    useEffect(() =>{
      getNowplayingMovies();
    },[]);
};

export default useMoviehook;