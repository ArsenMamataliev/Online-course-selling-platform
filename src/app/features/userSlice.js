import { createSlice } from "@reduxjs/toolkit";

let user = {
  login: "developer21",
  password: "123456"
}

const lessonList = [
{lessonName: "Урок 1", lessonURL: "https://youtu.be/U5EemWhhuz4"},
{lessonName: "Урок 2", lessonURL: "https://www.youtube.com/watch?v=nDPJAbublas"},
{lessonName: "Урок 3", lessonURL: "https://www.youtube.com/watch?v=nDPJAbublas"},
{lessonName: "Урок 4", lessonURL: "https://www.youtube.com/watch?v=nDPJAbublas"},
{lessonName: "Урок 5", lessonURL: "https://www.youtube.com/watch?v=nDPJAbublas"},
{lessonName: "Урок 6", lessonURL: "https://www.youtube.com/watch?v=nDPJAbublas"},
{lessonName: "Урок 7", lessonURL: "https://www.youtube.com/watch?v=nDPJAbublas"},
{lessonName: "Урок 8", lessonURL: "https://www.youtube.com/watch?v=nDPJAbublas"},
{lessonName: "Урок 9", lessonURL: "https://www.youtube.com/watch?v=nDPJAbublas"},
{lessonName: "Урок 10", lessonURL: "https://www.youtube.com/watch?v=nDPJAbublas"},
{lessonName: "Урок 11", lessonURL: "https://www.youtube.com/watch?v=nDPJAbublas"},
{lessonName: "Урок 12", lessonURL: "https://www.youtube.com/watch?v=nDPJAbublas"}
];

const userSlice = createSlice({
  name: "user",
  initialState: {
    user, 
    status: false,
    lessonList
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
