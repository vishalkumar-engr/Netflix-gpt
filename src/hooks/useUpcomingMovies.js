import { useEffect } from "react";
import { GET_API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day",
      GET_API_OPTIONS
    );
    const json = await data.json();
    dispatch(addUpcomingMovies(json?.results));
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);
  // Note : Always use empty paranthesis otherwise useEffect will call multiple times
};

export default useUpcomingMovies;
