import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    logged: false,
    email: '',
    password: '',
    pseudo: '',
    loading: false,
}

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {}
})

// Action creators are generated for each case reducer function
// export const { getrecipes } = userSlice.actions;

export default userSlice.reducer;