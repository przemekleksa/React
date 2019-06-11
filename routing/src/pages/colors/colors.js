import React from 'react';

const Colors = (props) => {
    return ( 
        <div style={{ 
            backgroundColor: `rgb(${props.match.params.r}, ${props.match.params.g}, ${props.match.params.b})`
        }}>
            to jest kolorowy div
        </div>
     );
}
 
export default Colors;
