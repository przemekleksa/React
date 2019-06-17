import React from 'react';
import Header from '../../components/header/header';

const Category = (props) => {
    return ( 
        <div>
            <Header title={props.match.params.name} />
        </div>
     );
}
 
export default Category;