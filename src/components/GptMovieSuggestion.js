import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const { movieNames, moviesResults } = useSelector((store) => store?.gpt);
  if (!movieNames) return;

  return (
    <div className="bg-black m-4 mb-0 p-4 bg-opacity-90">
      {movieNames.map((movieName, index) => {
        return (
          <MovieList
            key={movieName}
            title={movieName}
            movies={moviesResults[index]}
          />
        );
      })}
    </div>
  );
};

export default GptMovieSuggestion;
