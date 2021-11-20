import React from 'react'
import Course from '../components/Course'
import {useSelector} from  'react-redux'

function Courses() {
    const courses = useSelector(state =>state.courses.courses);
    return (
        <div>
            <h2>Курсы</h2>
            {
                courses.map((course, index) =>
                     <Course
                        key = {index}
                        name = {course.courseName}
                        mediaURL = {course.mediaURL}
                        access = {course.access}
                     />
                )
            } 
        </div>
    )
}

export default Courses
