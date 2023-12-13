import React from "react";
import { TMDB_IMAGE_BASE } from "../utils/constant";

const MovieCard = ({ imageUrl }) => {
  return (
    <div className="w-48 pr-4">
      <img alt="Movie Card" src={`${TMDB_IMAGE_BASE}${imageUrl}`} />
    </div>
  );
};

export default MovieCard;
