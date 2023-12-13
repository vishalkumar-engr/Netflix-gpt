import { useEffect } from "react";
import { GET_API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addTrendingMovies } from "../utils/movieSlice";

const useTrendingMovies = () => {
  const dispatch = useDispatch();

  const getTrendingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day",
      GET_API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTrendingMovies(json.results));
  };

  useEffect(() => {
    getTrendingMovies();
  }, []);
  // Note : Always use empty paranthesis otherwise useEffect will call multiple times
};

export default useTrendingMovies;
