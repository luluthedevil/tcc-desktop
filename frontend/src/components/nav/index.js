import React, { useRef } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import {FaBars, FaTimes } from 'react-icons/fa';

export default function NavBar() {
    const navRef = useRef();
    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
  return (
    <header>
        <div className="logo">
            <Link to="/" className='logo-title'>
                Kitab 📚
            </Link>
        </div>
        <nav className="navbar" ref={navRef}>
            <Link to="/" className="menu-btn">
                Home
            </Link>
            <Link to="/library" className="menu-btn">
                Biblioteca
            </Link>
            <Link to="/books" className="menu-btn">
                Livros
            </Link>
            <Link to="/rewards" className="menu-btn">
                Recompensas
            </Link>
            <Link to="/politcs" className="menu-btn">
                Políticas
            </Link>
            <Link to="/terms" className="menu-btn">
                Termos
            </Link>
            <div className="nav-btn nav-close-btn">
                <button onClick={showNavBar}>
                    <FaTimes size={25} />
                </button>
            </div>
        </nav>
        <div className="nav-btn">
            <button onClick={showNavBar}>
                <FaBars size={25} />
            </button>
        </div>
    </header>
  );
}
