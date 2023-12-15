import React from "react";
import { TMDB_IMAGE_BASE } from "../utils/constant";

const MovieCard = ({ imageUrl }) => {
  if (!imageUrl) return;
  return (
    <div className="pr-4 w-48 h-48">
      <img
        className="w-48 h-48"
        alt="Movie Card"
        src={`${TMDB_IMAGE_BASE}${imageUrl}`}
      />
    </div>
  );
};

export default MovieCard;
