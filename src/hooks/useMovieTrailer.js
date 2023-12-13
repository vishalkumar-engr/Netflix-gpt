import { useEffect } from "react";
import { GET_API_OPTIONS } from "../utils/constant";
import { addTrailerVideo } from "../utils/movieSlice";
import { useDispatch } from "react-redux";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getMovieVideos = async (movieId) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      GET_API_OPTIONS
    );

    const json = await data.json();
    if (!json.results) return;

    const filterMoviedata = json.results.filter(
      (item) => item.type === "Trailer"
    );

    const trailer = filterMoviedata.length
      ? filterMoviedata[0]
      : json.results[0];

    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideos(movieId);
  }, []);
};

export default useMovieTrailer;
