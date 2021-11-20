import React from 'react';

function Iframe({url}) {
    return (
        <div>
            <iframe
                className="frame"
                title="This is a unique title" 
                src={url}
            >
            </iframe>
        </div>
    )
}

export default Iframe
