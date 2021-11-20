import React, {useState} from 'react'
import { Button } from 'react-bootstrap';
import {useHistory} from "react-router-dom";
import CustomizedSnackbars from './Alert';
import amazonAdvertise from '../media/amazon_advertise.mp4';


function Course({name, access}) { 
    const [showErrorAlert, setShowErrorAlert] = useState(false);
    const [showSuccessAlert, setShowSuccessAlert] = useState(false)
    const history = useHistory(); 


    const accessFn = () => {
        if(access){
            setShowSuccessAlert(true);
            history.push('/profile')
        }else{
            setShowErrorAlert(true)
        }
    }
    return (
        <div className="course">
            <h2>{name}</h2>
            <iframe  src={amazonAdvertise} title="fsdf"/>
            <Button onClick={accessFn}>Начать курс</Button>
            {
               showErrorAlert ?  <CustomizedSnackbars severity='error' title = 'У вас нету доступ на этот курс'/> : ''
            }

            {
                showSuccessAlert ?  <CustomizedSnackbars severity='success' title = 'Доступ есть'/> : ''
            }
            
        </div>
    )
}

export default Course
