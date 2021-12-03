import React from 'react';
import {useHistory} from 'react-router-dom'

function Iframe({url}) {
    const history = useHistory();
    return (
            <iframe
                width="400px"
                height="500px"
                title="This is a unique title" 
                src={url}
                allowFullScreen
            >
            </iframe>
    )
}

export default Iframe
