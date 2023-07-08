import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import logo from '../../Assets/images/logoo.svg';
// import MenuIcon from '@mui/icons-material/Menu';
import './navbar.css';

const Navbar = () => {

  return (
    <nav className="grid">
      <Link to='/' className='nav-logo'>
        <img src={logo} alt="logo" />
      </Link>      

      <div className="nav-ul">
        <NavLink className='one' to='cars' style={({ isActive, isPending }) => { return { color: isActive ? 'var(--highlight)' : '', fontWeight: isActive ? 'bolder' : '' }; }} >Cars</NavLink>
        <NavLink className='two' to='team' style={({ isActive, isPending }) => { return { color: isActive ? 'var(--highlight)' : '', fontWeight: isActive ? 'bolder' : '' };  }}>Our Team</NavLink>
        <NavLink className='three' to='contact' style={({ isActive, isPending }) => { return { color: isActive ? 'var(--highlight)' : '', fontWeight: isActive ? 'bolder' : '' };  }}>Contact Us</NavLink>       
      </div>
        
      <Link to='sign' className='nav-sign'>
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