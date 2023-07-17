import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import logo from '../../Assets/images/logoo.svg';
import MenuIcon from '@mui/icons-material/Menu';
import './navbar.css';

const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(false);
  
  const menuIconHandler = () => {
    setOpenMenu(!openMenu);
  };

  const menuIconNavHandler = () => {
    setOpenMenu(false);
  };

  
  return (
    <nav className="grid">
      <Link to='/' className='nav-logo'  onClick={menuIconNavHandler} >
        <img src={logo} alt="logo" />
      </Link>      

      <div className={`menu-icon ${openMenu ? 'active' : ''}`} onClick={menuIconHandler} >
        <MenuIcon />
      </div>

      <div className={`nav-ul ${openMenu ? 'active' : ''}`}>
        <NavLink className='one' to='cars' style={({ isActive, isPending }) => { return { color: isActive ? 'var(--highlight)' : '', fontWeight: isActive ? 'bolder' : '' }; }} onClick={menuIconNavHandler} >Cars</NavLink>
        <NavLink className='two' to='team' style={({ isActive, isPending }) => { return { color: isActive ? 'var(--highlight)' : '', fontWeight: isActive ? 'bolder' : '' };  }} onClick={menuIconNavHandler} >Our Team</NavLink>
        <NavLink className='three' to='contact' style={({ isActive, isPending }) => { return { color: isActive ? 'var(--highlight)' : '', fontWeight: isActive ? 'bolder' : '' };  }} onClick={menuIconNavHandler} >Contact Us</NavLink>       
      </div>
        
      <Link to='sign' onClick={menuIconNavHandler} className={`nav-sign ${openMenu ? 'active' : ''}`}>
        <button>Sign In</button>
      </Link>        
    </nav>
  )
}

export default Navbar
































// import React from 'react';
// import { Link, NavLink } from 'react-router-dom';

// import logo from '../../Assets/images/logoo.svg';
// import MenuIcon from '@mui/icons-material/Menu';
// import './navbar.css';

// const Navbar = () => {

//   return (
//     <nav className="navbar container">
//       <Link to='/' className='logo'>
//         <img src={logo} alt="logo" className='nav-logo' />
//       </Link>      
//       <div className='nav-ul'>
//         <div className="ul">
//           <NavLink className='one' to='cars' style={({ isActive, isPending }) => { return { color: isActive ? 'var(--highlight)' : '', fontWeight: isActive ? 'bolder' : '' }; }} >Cars</NavLink>
//           <NavLink className='two' to='team' style={({ isActive, isPending }) => { return { color: isActive ? 'var(--highlight)' : '', fontWeight: isActive ? 'bolder' : '' };  }}>Our Team</NavLink>
//           <NavLink className='three' to='contact' style={({ isActive, isPending }) => { return { color: isActive ? 'var(--highlight)' : '', fontWeight: isActive ? 'bolder' : '' };  }}>Contact Us</NavLink>          
//         </div>
//         <Link to='sign' style={{ textDecoration: 'none' }}>
//           <button>Sign In</button>
//         </Link>
//       </div>
//     </nav>
//   )
// }

// export default Navbar