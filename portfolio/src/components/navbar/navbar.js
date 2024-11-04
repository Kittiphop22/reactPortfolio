import React,{useState} from 'react';
 import './navbar.css'

 export default function Navbar(){
    return (
        <nav className="navbar">
            <ul className="navbar-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}
