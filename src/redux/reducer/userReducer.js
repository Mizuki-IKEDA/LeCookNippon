import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    logged: false,
    email: '',
    password: '',
    pseudo: '',
    loading: false,
}

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: {},
})

// Action creators are generated for each case reducer function
// export const { getrecipes } = userSlice.actions;

export default userSlice.reducer;