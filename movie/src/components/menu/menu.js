import React, { Component } from 'react';
import './menu.scss';

class Menu extends Component {
    state = { 
        isOpen: false
     }

    openMenu = () => {
        this.setState({
            isOpen: true
        })
    }

    closeMenu = () => {
        this.setState({
            isOpen: false
        })
    }

    render() { 
        return ( 
            <div>
                <button className="hamburger" onClick={this.openMenu}> 
                    <span />
                    <span />
                    <span />
                 </button>
                 <div className={(this.state.isOpen) ? 'menu open': 'menu'}>
                    <button className="close" onClick={this.closeMenu}>
                        <span />
                        <span />
                    </button>
                    <nav>
                        <ul>
                            <li>
                                <a href="#">Strona główna</a>
                            </li>
                            <li>
                                <a href="#">Filmy</a>
                            </li>
                            <li>
                                <a href="#">Seriale</a>
                            </li>
                        </ul>
                    </nav>
                 </div>
            </div>
         );
    }
}
 
export default Menu;