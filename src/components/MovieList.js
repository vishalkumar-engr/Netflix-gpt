import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6">
      <h1 className="py-4 text-3xl text-white">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex">
          {movies &&
            movies.length > 0 &&
            movies.map((movie) => {
              return (
                <MovieCard key={movie?.id} imageUrl={movie?.poster_path} />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
