import React from 'react'
import { useSelector } from 'react-redux';
import VideoLesson from './VideoLesson';

function VideoLessonGroup() {
    
    const lessonList = useSelector(state => state.user.lessonList);
    return (
        <div>
            {
                lessonList.map((lesson, id)=>
                    <VideoLesson 
                        key = {id}
                        name = {lesson.lessonName}
                        url = {lesson.lessonURL}
                    />
                )
            }
        </div>
    )
}

export default VideoLessonGroup
