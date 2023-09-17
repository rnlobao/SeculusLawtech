import React from 'react';
import './Header.css';

function Header() {
  return (
    <header>
        <div className="logo">
            <img src="./Images/seculus-logo-cortado.png" alt="Logo" />
        </div>
        <nav>
        <ul>
            <li><a href="#">Home</a></li>
        </ul>
        </nav>
    </header>
  );
}

export default Header;

