import { configureStore } from '@reduxjs/toolkit';
import formReducer from './formSlice.ts';

const store = configureStore({
  reducer: {
    form: formReducer,
  },
});

export default store;
