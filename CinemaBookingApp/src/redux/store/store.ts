import {configureStore} from '@reduxjs/toolkit';
import movieReducer from '../slices/movieSlice';
import showReducer from '../slices/showSlice';
export const store = configureStore({
  reducer: {
    movies: movieReducer,
    shows: showReducer,
  },
});
