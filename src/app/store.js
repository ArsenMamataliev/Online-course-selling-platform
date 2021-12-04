import { configureStore } from '@reduxjs/toolkit';
import coursesSlice from './features/coursesSlice';
import photoSliderSlice from './features/photoSliderSlice';
import userSlice from './features/userSlice';


export const store = configureStore({
  reducer: {
    user: userSlice,
    courses: coursesSlice,
    photoSliderStatus: photoSliderSlice
  },
});
