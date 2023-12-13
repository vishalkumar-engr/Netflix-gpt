import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const popularMovie = useSelector((store) => store.movies?.popularMovie);
  const trendingMovie = useSelector((store) => store.movies?.trendingMovie);
  const upcomingMovie = useSelector((store) => store.movies?.upcomingMovie);
  return (
    <div className="bg-black">
      <div className=" -mt-52 pl-12 relative z-50">
        <MovieList title={"Now playing"} movies={movies} />
        <MovieList title={"Trending"} movies={trendingMovie} />
        <MovieList title={"Popular"} movies={popularMovie} />
        <MovieList title={"Upcoming Movies"} movies={upcomingMovie} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
