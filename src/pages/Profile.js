import React from 'react';
import { useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { signOut } from '../features/userSlice';

function Profile() {
    const login = useSelector(state => state.user.user.login);
    const loginStatus = useSelector(state => state.user.status);
    const history = useHistory();

    const signOutFn = () => {
        history.push("/");
        signOut();
        
    }
    
    if(!loginStatus){
        return <Redirect to="/" />
    }
    return (
        <div>
            <h4> Welcome { login }! You signed in to the profile page </h4>
            <button 
                className="signOut"
                onClick={signOutFn}
            >
            Sign out
            </button>
        </div>
    )
}

export default Profile
