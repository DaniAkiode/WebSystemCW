import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    //Navigation Bar
    render() {
        return (
            <nav className="navbar navbar-dark bg-success navbar-expand-lg">
                <Link to="/" className="navbar-brand">Profile List</Link>
                <div className="collpase navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/edit/:id" className="nav-link">Edit Profile</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/create" className="nav-link">Create Profile</Link>
                        </li>       
                        <li className="navbar-item">
                            <Link to="/signup" className="nav-link">Sign Up</Link>
                        </li>                      
                    </ul>
                </div>
            </nav>
        )
    }
}