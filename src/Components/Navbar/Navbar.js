import React from 'react';

import logo from '../../Assets/images/logoo.svg';
import './navbar.css';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <section className="navbar container">
      <Link to='/' className='logo'>
        <img src={logo} alt="logo" className='nav-logo' />
      </Link>      
      <div className="nav-ul">
        <div className="ul">
          <NavLink className='one' to='cars' style={({ isActive, isPending }) => { return { color: isActive ? 'var(--highlight)' : '', fontWeight: isActive ? 'bolder' : '' }; }} >Cars</NavLink>
          <NavLink className='two' to='team' style={({ isActive, isPending }) => { return { color: isActive ? 'var(--highlight)' : '', fontWeight: isActive ? 'bolder' : '' };  }}>Our Team</NavLink>
          <NavLink className='three' to='contact' style={({ isActive, isPending }) => { return { color: isActive ? 'var(--highlight)' : '', fontWeight: isActive ? 'bolder' : '' };  }}>Contact Us</NavLink>
          
        </div>
        <div className="signin">
          <Link to='sign' style={{ textDecoration: 'none' }}>
            <button>Sign In</button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Navbar