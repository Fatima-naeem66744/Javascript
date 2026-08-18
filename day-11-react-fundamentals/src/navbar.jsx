// Navbar — renders nav links 
// from an array prop using .map(), each with a proper key.
import React from 'react';

const Navbar = ({ links }) => {
    return (
    <nav>
      <ul>
        {links.map((link) => (
          <li key={link.url}>
            <a href={link.url}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;