import React from 'react';
import { Link } from 'react-router-dom';
import pages from '../pagesPaths';
import './Navbar.css';

function Navbar()
{
  const list = pages.filter((page) => page.name != 'No Found');
  
  return (
    <nav>
      <ul>
        {list.map((page, index) => (
          <div className='div-items'>
            <Link key={index} to={page.path}>
              <li className='page-items'>
                <p>{page.name}</p>
              </li>
            </Link>
          </div>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;