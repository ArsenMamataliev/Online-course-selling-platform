import React from 'react';
import AccountMenu from '../components/AccountMenu';
import Footer from '../components/Footer';
import VideoLessonGroup from '../components/VideoLessonGroup';

function Profile() {
    
    return (
        <div className="profile">
            <AccountMenu/>
            <VideoLessonGroup/>
            <Footer/>
        </div>
    )
}

export default Profile
