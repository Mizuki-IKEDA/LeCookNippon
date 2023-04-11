import { combineReducers } from 'redux';

import recipesReducer from './recipes';
import favoritesReducer from './fav';

const rootReducer = combineReducers({
  recipes: recipesReducer,
  favorites: favoritesReducer,
});

export default rootReducer;
