import React from 'react';
import ReactPlayer from 'react-player/lazy';

function ReactPlayerComponent({url}) {
    return (
        <div>
            <ReactPlayer url={url} 
              controls
              width='100%' 
            /> 
        </div>
    )
}

export default ReactPlayerComponent
