import React, {useState} from 'react';
import Button from '@mui/material/Button';
import noInternetIcon from '../media/no_internet_icon.jpg';
import { Offline } from "react-detect-offline";
import Alert from './Alert';
function NoInternetConnection() {
    
    const [showAlert, setShowAlert] = useState(false);

    const updatePage = () => {
        if(Offline){
            setShowAlert(true);
        }
    }
    return (
        <div className='no-internet'>
            <img src={noInternetIcon} alt="Иконка" id="no-internet-icon"/>
            <p> Проверьте пожалуйста интернет соединения</p>
              <Button 
                variant="contained"
                color="error"
                onClick={updatePage}
            >
                Попрововать снова
            </Button>
            {
                showAlert ? <Alert severity='warning' title = 'Проверьте еще раз ваш интернет'/> : ''
            }
        </div>
    )
}

export default NoInternetConnection
