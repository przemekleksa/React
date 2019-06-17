import React from 'react';
import { header1 } from './header1.jpg'
import './header.scss';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return ( 
        <div className="header">
            <div className="container">
                <h1>{props.title}</h1>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">Category</Link></li>
                    <li><Link to="/">Drama</Link></li>
                </ul>
            </div>
        </div>
     );
}
 
export default Header;