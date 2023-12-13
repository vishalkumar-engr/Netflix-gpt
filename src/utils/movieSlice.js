import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    popularMovie: null,
    trendingMovie: null,
    upcomingMovie: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovie = action.payload;
    },
    addTrendingMovies: (state, action) => {
      state.trendingMovie = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovie = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
  addTrendingMovies,
  addUpcomingMovies,
} = movieSlice.actions;

export default movieSlice.reducer;
