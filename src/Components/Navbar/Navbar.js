import React from 'react';

import logo from '../../Assets/images/logo1.png';
import './navbar.css';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <section className="navbar container">
      <Link to='/' className='logo'>
        <img src={logo} alt="logo" height={70} />
      </Link>      
      <div className="nav-ul">
        <div className="ul">
        <NavLink to='cars' style={({ isActive, isPending }) => { return { color: isActive ? '#0fa3b1' : '', fontWeight: isActive ? 'bolder' : '' }; }} >CARS</NavLink>
        <NavLink to='team' style={({ isActive, isPending }) => { return { color: isActive ? '#0fa3b1' : '', fontWeight: isActive ? 'bolder' : '' };  }}>OUR TEAM</NavLink>
        <NavLink to='contact' style={({ isActive, isPending }) => { return { color: isActive ? '#0fa3b1' : '', fontWeight: isActive ? 'bolder' : '' };  }}>CONTACT US</NavLink>
          
        </div>
        <div className="signin">
          <Link to='sign' style={{ textDecoration: 'none' }}>
            <button>SIGN IN</button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Navbar