import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  recipes: [],
  status: 'idle',
  error: null,
}

export const fetchRecipes = createAsyncThunk(
  'recipes/fetchRecipes',
  async() => {
    try{
      const response = await axios.get(
        "http://localhost:3001/recipes"
      );
      return [...response.data];
    }catch(err){
      console.log(err);
    }
  }
);

const recipeSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.recipes = action.payload;
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

export const selectRecipes = state => state.recipes.recipes;
export const getRecipesStatus = state => state.recipes.status;
export const getRecipesError = state => state.recipes.error;

export default recipeSlice.reducer;