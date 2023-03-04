import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

class Navbar extends React.Component {
    render() {
        return <div>
            <ul>
                <Link to='/'>
                    <li>
                        Home
                    </li>
                </Link>
                <Link to='services'>
                    <li>
                        Services
                    </li>
                </Link>
                <Link to='contactus'>
                    <li>
                        Contactus
                    </li>
                </Link>
            </ul>
        </div>
    }
}

export default Navbar;