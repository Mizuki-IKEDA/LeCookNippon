import { configureStore } from '@reduxjs/toolkit';
import recipeReducer from '../reducer/recipeReducer';
import userReducer from '../reducer/userReducer';

const store = configureStore({
  reducer: {
    recipes: recipeReducer,
    users: userReducer,
  },
})

export default store;