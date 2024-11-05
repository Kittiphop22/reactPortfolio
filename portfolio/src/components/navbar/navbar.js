import React from 'react';
import { BrowserRouter,Link,Route,Routes } from 'react-router-dom';
import './navbar.css'
import Home from '../../home';
import About from '../../about';
import Contact from '../../contact';

 export default function Navbar(){
    return (
        <BrowserRouter>
            <nav className="navbar">
                <ul className="navbar-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>                
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
        </Routes>    
        </BrowserRouter>    
    );
}
