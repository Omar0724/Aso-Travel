import React, { useState } from 'react';
import './navbar.css';
import {SiYourtraveldottv} from "react-icons/si";
import {IoIosCloseCircleOutline} from "react-icons/io";
import {BiDotsVerticalRounded} from "react-icons/bi";
import { Link } from 'react-router-dom';


 const Navbar =()=> {
  const [active,setActive]=useState('navBar');

  const showNav=()=>{
    setActive('navBar activeNavbar')
  }

  const removeNavbar=()=>{
    setActive('navBar')
  }
  return (
    <>
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <Link to='#' className="logo  flex">
            <h1 ><SiYourtraveldottv className="icon"/></h1> 
            </Link>
        </div>
        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <Link to="/" className='navLink'>Home</Link>
            </li>
            <li className="navItem">
              <Link to="/booking" className='navLink'>Book</Link>
            </li><li className="navItem">
              <Link to="/" className='navLink'>Package</Link>
            </li><li className="navItem">
              <Link to="" className='navLink'>About</Link>
            </li><li className="navItem">
              <Link to="#" className='navLink'>Contact</Link>
            </li><li className="navItem">
              <Link to="#" className='navLink'>FAQ</Link>
            </li>
            <button className='btn'>
              <Link to="/login"> Login</Link>
            </button>
            <button className='btn'>
              <Link to="/signup"> Sign Up</Link>
            </button>
          </ul>
          <div onClick={removeNavbar} className="closeNavbar" >
          <IoIosCloseCircleOutline className='icon'/>
          </div>
          </div>
          <div onClick={showNav} className="toggleNavbar">
          <BiDotsVerticalRounded className='icon'/>
          </div>
        
      </header>
    </section>
    </>
  )
}
export default Navbar