import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import data from '../../data';

const initialState = {
  recipes: data,
  loading: true,
}

export const recipeSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    getrecipes: (state) => {
        state.recipes = data;
    }
    }
})

// Action creators are generated for each case reducer function
export const { getrecipes } = recipeSlice.actions;

export default recipeSlice.reducer;