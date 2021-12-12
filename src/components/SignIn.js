import React, {useState, useEffect} from 'react';
import {useHistory} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { passwordVerification } from '../app/features/userSlice';
import amazoneLogo from '../media/logo.png';
import CustomizedSnackbars from './Alert';

function SignIn() {

    const history = useHistory();
    const dispatch = useDispatch();
    const signInStatus = useSelector(state => state.user.status);

    useEffect(() => {
        if(signInStatus){
            history.push('/courses');
        }
      }, [signInStatus]);
     

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const saveLogin = e => setLogin(e.target.value);
    const savePassword = e => setPassword(e.target.value);

    return (

        <form action="" className="form-container">
            <h2>Вход в систему</h2>
            <img src={amazoneLogo} alt="Amozon logo"/>
            <label htmlFor="text"><b>Логин</b></label>
            <input type="text" 
                placeholder="Логин"
                name="name" 
                value={login}
                required 
                onChange={saveLogin}
            />

            <label htmlFor="psw"><b>Пароль</b></label>
            <input type="password" 
                placeholder="Пароль"
                name="psw"
                value={password}
                required 
                onChange={savePassword}
            />

            <button type="submit"
                className="btn"
                onClick = {() => {
                    dispatch(passwordVerification({login, password}));
                }}
            >
            Вход
            </button>

            {
               !signInStatus ?  < CustomizedSnackbars severity='error' title = 'Неправильный логин или пароль'/> : ''
            }
            
        </form>    
    )
}

export default SignIn
