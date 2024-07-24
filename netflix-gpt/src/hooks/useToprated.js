
import { useEffect } from "react"; 
import { useDispatch } from 'react-redux';
import {API_OPTIONS} from "../utils/constants";
import {addToprated } from '../utils/moviesSlice';
 

const useToprated = () =>{
    const dispatch = useDispatch();

    const getToprated= async () =>{
      const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', 
        API_OPTIONS);
        const json = await data.json();
    
          dispatch( addToprated(json.results));
    };
    
    useEffect(() =>{
      getToprated();
    },[]);
};

export default useToprated;