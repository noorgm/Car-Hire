import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Cars from './Pages/Cars/Cars';
import Contact from './Pages/Contact/Contact';
import Team from './Pages/Team/Team';
import Sign from './Pages/SignIn/Sign';

import './App.css';


function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route exct path='/' element={<Home />}></Route>
          <Route path='/cars' element={<Cars />}></Route>
          <Route path='/team' element={<Team />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/sign' element={<Sign />}></Route>
          <Route path='/*' element={<h1>Page Don't Exist!</h1>}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
