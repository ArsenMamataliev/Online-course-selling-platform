import { createSlice } from "@reduxjs/toolkit";

const photoSliderSlice = createSlice({
    name: "photoSlider",
    initialState: {
     photoSliderStatus: true,
    },
    reducers:{
        hidePhotoSlider(state){
            state.photoSliderStatus = false;
          },
        showPhotoSlider(state){
            state.photoSliderStatus = true;
          }
    }
})

export const {hidePhotoSlider, showPhotoSlider} = photoSliderSlice.actions;
export default photoSliderSlice.reducer; 