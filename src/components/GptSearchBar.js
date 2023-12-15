import React, { useRef } from "react";
import { GET_API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addGptMovieResult } from "../utils/gptSlice";
// import openai from "../utils/openai";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const dispach = useDispatch();

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      GET_API_OPTIONS
    );

    const json = await data.json();
    return json.results;
  };

  const handleGptSearch = async () => {
    // const gptQuery = `Act as a Movie Recommendation system and suggest some movies for the query: ${searchText.current.value}. only give me names of 5 movies, comma seperated like the result ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya`;

    // const gptResults = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: gptQuery }],
    //   model: "gpt-3.5-turbo",
    // });
    // console.log("Results", gptResults);

    const result =
      "Andaz Apna Apna, Chupke Chupke, Padosan, Hera Pheri, Chalti Ka Naam Gaadi".split(
        ", "
      );

    const promiseArray = result.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);
    dispach(
      addGptMovieResult({ movieNames: result, movieResults: tmdbResults })
    );
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="bg-black w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9 rounded-lg"
          placeholder="What would you like to watch today?"
        />
        <button
          className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3"
          onClick={handleGptSearch}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
