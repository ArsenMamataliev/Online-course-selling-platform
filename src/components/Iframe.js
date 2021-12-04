import React from 'react';

function Iframe({url}) {

    return (
            <iframe
                width="100%"
                height="500px"
                title="This is a unique title" 
                src={url}
                allowFullScreen
            >
            </iframe>
    )
}

export default Iframe
