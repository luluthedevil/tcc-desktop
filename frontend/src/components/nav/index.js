import React, { useRef } from 'react';
import './style.css';
import {FaBars, FaTimes } from 'react-icons/fa';

export default function NavBar() {
    const navRef = useRef();
    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
  return (
    <header>
        <div className="logo">
            <a href='#'>
                Kitab 📚
            </a>
        </div>
        <nav className="navbar" ref={navRef}>
            <a href="../index.html" className="menu-btn">
                Home
            </a>
            <a href='#' className="menu-btn">
                Biblioteca
            </a>
            <a href='#' className="menu-btn">
                Livros
            </a>
            <a href='#' className="menu-btn">
                Recompensas
            </a>
            <a href='#' className="menu-btn">
                Políticas
            </a>
            <a href='#' className="menu-btn">
                Termos
            </a>
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
