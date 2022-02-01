import React from 'react';
import { Link } from 'react-router-dom';

function Dropdown({isOpen, toggle}) {
  return (
    <div className={isOpen ? 'grid grid-rows-3 text-center items-center bg-green-500' : 'hidden'} onClick={toggle}>
      <Link to="/" className='p-4'>Projets</Link>
      <Link to="/" className='p-4'>Compétences</Link>
      <Link to="/" className='p-4'>Contact</Link>
    </div>
  )
}

export default Dropdown;
