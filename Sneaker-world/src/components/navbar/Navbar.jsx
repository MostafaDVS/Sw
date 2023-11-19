import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.png';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="sw__navbar">
      <div className="sw__navbar-links">
        <div className="sw__navbar-links_logo">
          <h1 className='sw_logo'>SW</h1>
        </div>
        <div className="sw__navbar-links_container">
          <p><a href="#home">HOME</a></p>
          <p><a href="#wsw">SNEAKER WORLD</a></p>
          <p><a href="#possibility">SERVICES</a></p>
          <p><a href="#features">ABOUT US</a></p>
          <p><a href="#blog">TOPICS</a></p>
        </div>
      </div>
      <div className="sw__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="sw__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="sw__navbar-menu_container scale-up-center">
          <div className="sw__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#wsw">What is sw?</a></p>
            <p><a href="#possibility">Open AI</a></p>
            <p><a href="#features">Case Studies</a></p>
            <p><a href="#blog">Library</a></p>
          </div>
          <div className="sw__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;