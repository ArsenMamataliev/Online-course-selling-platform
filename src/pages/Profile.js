import React from 'react';
import AccountMenu from '../components/AccountMenu';
import Footer from '../components/Footer';
import PhotoSlider from '../components/PhotoSlider';
import VideoLessonGroup from '../components/VideoLessonGroup';
import { useSelector } from 'react-redux';

function Profile() {
    
    const photoSliderStatus = useSelector(state => state.photoSliderStatus.photoSliderStatus);
    console.log(photoSliderStatus);
    return (
        <div className="profile">
            <AccountMenu/>
            {
               photoSliderStatus ? <PhotoSlider /> : ""
            }
            <VideoLessonGroup/>
            <Footer/>

        </div>
    )
}

export default Profile
