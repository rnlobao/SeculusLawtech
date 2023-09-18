import React from 'react';
import './Header.css';

function Header() {
  return (
    <header>
        <img className="logo-header" src="Images/seculus-logo-cortado.png" alt="Logo" />
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href='/login'>Login</a></li>
            </ul>
        </nav>
    </header>
  );
}

export default Header;

