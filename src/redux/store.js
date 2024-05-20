import { configureStore } from '@reduxjs/toolkit';

import filterReducer from './filterSlice';
import campersReducer from './campersSlice';
import favoritesReducer from './favoritesSlice';

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    favorites: favoritesReducer,
    filter: filterReducer,
  },
});