import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
            <ul>
                <li>
                   <Link to="/">Strona główna</Link>
                </li>
                <li>
                    <Link to="/contact">Kontakt</Link>
                </li>
            </ul>
     );
}
 
export default Navbar;