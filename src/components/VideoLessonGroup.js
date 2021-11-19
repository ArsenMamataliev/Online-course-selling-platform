import React from 'react'
import { useSelector } from 'react-redux';
import VideoLesson from './VideoLesson';


function VideoLessonGroup() {
    
    const courseList = useSelector(state => state.user.courseList);
    return (
        <div>
            {
                courseList.map((course, index)=>
                    <VideoLesson 
                        key = {index}
                        name = {course.courseTitle}
                        subtopics = {course.subtopics}
                    />
                )
            }
        </div>
    )
}

export default VideoLessonGroup
