import React from 'react';
import {useHistory} from "react-router-dom";
import Button from '@mui/material/Button';
import CustomizedSnackbars from './Alert';

function Course({name, access, mediaURL}) { 
    const [showErrorAlert, setShowErrorAlert] = React.useState(false);
    const [showSuccessAlert, setShowSuccessAlert] = React.useState(false)
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
        <div className='courseList'>
            <h2>{name}</h2>
            <img src={mediaURL} alt="photoName" />
            <Button 
                variant="contained"
                color="warning"
                onClick={accessFn}
                fullWidth='true'
            >
                Начать курс
            </Button>
            {
               showErrorAlert ?  <CustomizedSnackbars severity='error' title='У вас нету доступ на этот курс'/> : ''
            }

            {
                showSuccessAlert ?  <CustomizedSnackbars severity='success' title='Доступ есть'/> : ''
            }
            
        </div>
    )
}

export default Course
