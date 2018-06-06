import React from 'react'
import logo from './logo.png'
import { Link, NavLink } from 'react-router-dom'
import Menu from './Menu/Menu'
import './Navbar.css'


function Navbar(props) {
    function handleLoginOuSair(e) {
        if (props.usuario) {
            props.onSairClick();
        }
    }

    return (
        <nav className="navbar">
            <Link to="/">
                <img className="navbar-logo" src={logo} alt="Logo" />
            </Link>

            <Menu usuario={props.usuario} onSairClick={props.onSairClick} />
        </nav>
    )
}

export default Navbar