import React, { useState } from 'react';
import './navbar.css';
import {SiYourtraveldottv} from "react-icons/si";
import {IoIosCloseCircleOutline} from "react-icons/io";
import {BiDotsVerticalRounded} from "react-icons/bi";



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
          <a href='#' className="logo  flex">
            <h1 ><SiYourtraveldottv className="icon"/></h1> 
            </a>
        </div>
        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="#" className='navLink'>Home</a>
            </li>
            <li className="navItem">
              <a href="#" className='navLink'>Book</a>
            </li><li className="navItem">
              <a href="#" className='navLink'>Package</a>
            </li><li className="navItem">
              <a href="#" className='navLink'>About</a>
            </li><li className="navItem">
              <a href="#" className='navLink'>Contact</a>
            </li><li className="navItem">
              <a href="#" className='navLink'>FAQ</a>
            </li>
            <button className='btn'>
              <a href="/"> Book Now</a>
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