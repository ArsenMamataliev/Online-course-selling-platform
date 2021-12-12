import { createSlice } from "@reduxjs/toolkit";
import courseList from './courseList';

let user = {
  login: "user",
  password: "amazone2021"
}

const userSlice = createSlice({
  name: "user",
  initialState: {
    user, 
    status: false,
    courseList
  },
  reducers:{
    passwordVerification(state, action){

      if(state.user.login === action.payload.login && state.user.password === action.payload.password){
        return {...state, status : true};
      }
    },
    signOut(state){
      return {...state, status : false};
    }
  }

})

export const {passwordVerification, signOut} = userSlice.actions;
export default userSlice.reducer; 
