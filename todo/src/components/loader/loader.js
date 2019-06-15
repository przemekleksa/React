import React from 'react';

const Loader = (props) => {
    return ( 
        <>
        {props.isFetching &&
            <div>
                ładuję dane
            </div>
        }
        </>
     );
}
 
export default Loader;