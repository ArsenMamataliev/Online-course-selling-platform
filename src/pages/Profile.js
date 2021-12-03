import React from 'react';
import AccountMenu from '../components/AccountMenu';
import Footer from '../components/Footer';
import Pagination from '../components/Pagination';
import PhotoSlider from '../components/PhotoSlider';
import VideoLessonGroup from '../components/VideoLessonGroup';

function Profile() {
    
    return (
        <div className="profile">
            <AccountMenu/>
            <PhotoSlider/>
            <VideoLessonGroup/>
            <Footer/>

        </div>
    )
}

export default Profile
