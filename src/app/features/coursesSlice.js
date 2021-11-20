import { createSlice } from "@reduxjs/toolkit";

const courses = [
    {courseName:"Амазон курс", mediaURL:'../media/amazon_advertise.mp4', access: true}
    // {courseName:"Wildberries курс", mediaURL:'../media/WB.jpg', access: false},
    // {courseName:"Криптовалюта курс", mediaURL:'../media/cryptocurrency-trading.jpeg', access: false}
]

const coursesSlice = createSlice({
    name: "couses",
    initialState: {
      courses, 
      access: false,
    }
})
export default coursesSlice.reducer; 