import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    logged: false,
    email: '',
    password: '',
    pseudo: '',
    user: null,
    loading: false,
    error: null,
}

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.error = null;
    }, 
    setLoading: state => {
      state.loading = true;
    },
    setError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }
  },
  // extraReducers: {},
})

// Action creators are generated for each case reducer function
export const { setUser, setLoading, setError } = userSlice.actions;

export const login = (email, password) => async dispatch => {
  dispatch(setLoading());
  try {
    const response = await axios.post('http://localhost:4001', { email, password });
    dispatch(setUser(response.data));
  } catch (error) {
    dispatch(setError(error.message));
  }
}

export default userSlice.reducer;