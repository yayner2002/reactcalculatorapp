import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div>
      <h1>Math Magicians</h1>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/calculator">
          <li>Calculator</li>
        </Link>
        <Link to="/quote">
          <li>Qoute</li>
        </Link>
      </ul>
    </div>
  );
}

export default Nav;
