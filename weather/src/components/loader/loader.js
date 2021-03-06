import React from 'react';
import './loader.css';

const Loader = (props) => {
    return (
        <div className="loader">
            {props.isLoading &&
                <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
            }
        </div>
    );
}

export default Loader;