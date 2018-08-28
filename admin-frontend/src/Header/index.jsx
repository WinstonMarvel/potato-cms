import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component{
    render(){
        return(
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
                    <a href="/admin" className="navbar-brand logo">Potato CMS</a>
                    <ul className="navbar-nav">
                        {/* <li className="nav-item"><a href="" className="nav-link mr-3">Posts</a></li> */}
                        <li className="nav-item"><Link to="/admin/" className="nav-link mr-3">Dashboard</Link></li>
                        <li className="nav-item"><Link to="/admin/pages" className="nav-link mr-3">Pages</Link></li>
                        <li className="nav-item"><Link to="/admin/menus" className="nav-link mr-3">Menus</Link></li>
                        {/* <li className="nav-item"><a href="" className="nav-link">Settings</a></li> */}
                    </ul>
                </nav>
            </header>
        );
    }
}


export default Header;


