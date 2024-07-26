// Code for Navbar -- becomes menu button when screen is small.
import './navbar.css'
import React, {useState} from 'react';

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  
  return (
  // navbar links & code
  <nav>
    <a href="aware-air.replit.app" className="logo">AWARE AIR</a>
    {/* div for 3-bar menu for small screens*/}
    <div className="menu" onClick={() => setOpen(!open)}>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <ul className={open ? "open" : ""}>
      <li><a href="/teachable_machine.html">Detect Air Quality with AI</a></li>
      {/* <li><a href="#stay-safe">Stay Safe</a></li>
      <li><a href="#health-equity"k>Air & Health Equity</a></li> */}
    </ul>
  
  </nav>
  );
};