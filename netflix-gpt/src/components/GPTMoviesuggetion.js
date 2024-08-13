
import { useSelector } from "react-redux";

import MovieList from "./MovieList";

const GPTMoviesuggetion = () => {
  

  const {movieResults,movieNames} = useSelector((store) => store.gpt);

  if (!movieNames) return null;

  return (
    <div className=" bg-black text-white bg-opacity-90 p-4 m-4">
      {
      movieNames.map((movieName, index) => 
        <MovieList
          key={movieName}
          title={movieName}
          movList={movieResults[index]} 
        />
      )
      }
    </div>
  )
}

export default GPTMoviesuggetion;
