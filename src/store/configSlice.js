// src/store/configSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  baseUrl: '',
};

const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    setBaseUrl: (state, action) => {
      state.baseUrl = action.payload;
    },
  },
});

export const { setBaseUrl } = configSlice.actions;

export default configSlice.reducer;
