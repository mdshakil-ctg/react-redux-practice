import React from 'react';
import { FaCartPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {
   return (
      <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to='/'>Home</Link></li>
        <li><a href='/top-rated'>Top Rated</a></li>
        <li><Link to='about'>About</Link></li>
      <li><Link to='/cart'><FaCartPlus className='cart'/></Link></li>
      </ul>
    </div>
    <a href='/' className="btn btn-ghost normal-case text-xl">Redux Practice</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link to='/'>Home</Link></li>
      <li><a href='/top-rated'>Top Rated</a></li>
      <li><a href='/about'>About</a></li>
      <li><Link to='/cart'><FaCartPlus className='cart'/></Link></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a href='/get-started' className="btn">Get started</a>
  </div>
</div>
   );
};

export default Navbar;