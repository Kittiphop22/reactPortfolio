import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './navbar.css'
import Home from '../../home';
import About from '../../about';
import Contact from '../../contact';

export default function Navbar() {
    const [page, setPage] = useState('home');
    return (
        <div>
            <div className="div">               
                <ul className='div-links'>
                <li onClick={() => setPage('home')}>Home</li>
                <li onClick={() => setPage('about')}>About</li>
                <li onClick={() => setPage('contact')}>Contact</li>
            </ul>
            </div >
            {page === 'home' ? <Home /> : ''}
            {page === 'about' ? <About /> : ''}
            {page === 'contact' ? <Contact /> : ''}
            </div>
    );
}


