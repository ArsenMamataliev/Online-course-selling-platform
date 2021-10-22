import React, {useState, useEffect} from 'react';
import {useHistory} from "react-router-dom";
import {useSelector} from "react-redux";
import { useDispatch } from 'react-redux';
import { passwordVerification } from '../features/userSlice';

function SignIn() {

    const history = useHistory();
    const dispatch = useDispatch();
    const loginStatus = useSelector(state => state.user.status);


    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const saveLogin = e => setLogin(e.target.value);
    const savePassword = e => setPassword(e.target.value);

    useEffect(()=> {
        dispatch(passwordVerification({login, password}))
    }, [password])

    return (

        <form action="" className="form-container">
            <h1>Login</h1>

            <label for="email"><b>Name</b></label>
            <input type="text" 
                placeholder="Login"
                name="name" 
                value={login}
                required 
                onChange={saveLogin}
            />

            <label for="psw"><b>Password</b></label>
            <input type="password" 
                placeholder="Password"
                name="psw"
                value={password}
                required 
                onChange={savePassword}
            />

            <button type="submit"
                className="btn"
                disabled = {!loginStatus? true : false}
                onClick = {() => history.push("/profile")}
            >
            Sign in
            </button>
        </form>    
    )
}

export default SignIn
