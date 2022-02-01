import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return <>
    <nav classname="navbar">
      <div className="navbar-container">
        <Link to="/" className='pl-8'>
          HOME
        </Link>
      </div>
    </nav>
  </>;
}

export default Navbar;
