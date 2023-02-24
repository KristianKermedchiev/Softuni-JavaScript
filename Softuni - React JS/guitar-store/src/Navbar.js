import React from 'react';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/catalog">Catalog</a></li>
        <li><a href="/register">Register</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;