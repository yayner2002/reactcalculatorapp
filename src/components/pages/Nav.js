import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Nav.css';

function Nav() {
  const navStyle = {
    color: '#fff',
    textDecoration: 'none',
  };
  return (
    <nav className="navBar">
      <div className="navContents">
        <Link to="/" style={navStyle}>
          <h1>Math Magicians</h1>
        </Link>
        <ul className="navLinks">
          <Link to="/" style={navStyle}>
            <li>Home</li>
          </Link>
          <Link to="/calculator" style={navStyle}>
            <li>Calculator</li>
          </Link>
          <Link to="/quote" style={navStyle}>
            <li id="lastItem">Qoute</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
