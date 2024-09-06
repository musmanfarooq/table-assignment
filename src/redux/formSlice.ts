import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    name: '',
    age: '',
    country: '',
  },
  reducers: {
    setFormData: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setFormData } = formSlice.actions;
export default formSlice.reducer;
