import { createSlice } from "@reduxjs/toolkit";

const courses = [
    {courseName:"Амазон курс", mediaURL:'https://s3.us-west-2.amazonaws.com/images.unsplash.com/application-1638440824315-9cdfc5332067image', access: true},
    {courseName:"Wildberries курс", mediaURL:'https://s3.us-west-2.amazonaws.com/images.unsplash.com/application-1637996789187-865ee7cbe5eeimage', access: false},
    {courseName:"Криптовалюта курс", mediaURL:'https://s3.us-west-2.amazonaws.com/images.unsplash.com/application-1637996801595-f254bdf624f9image', access: false}
]

const coursesSlice = createSlice({
    name: "couses",
    initialState: {
      courses, 
      access: false,
    }
})
export default coursesSlice.reducer; 