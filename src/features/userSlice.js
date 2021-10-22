import { createSlice } from "@reduxjs/toolkit";

let user = {
  login: "developer21",
  password: "123456"
}

const userSlice = createSlice({
  name: "user",
  initialState: {
    user, 
    status: false,
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
