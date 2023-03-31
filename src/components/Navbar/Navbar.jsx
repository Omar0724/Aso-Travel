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
          <link to='#' className="logo  flex">
            <h1 ><SiYourtraveldottv className="icon"/></h1> 
            </link>
        </div>
        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <link to="#" className='navLink'>Home</link>
            </li>
            <li className="navItem">
              <link to="" className='navLink'>Book</link>
            </li><li className="navItem">
              <link to="#" className='navLink'>Package</link>
            </li><li className="navItem">
              <link to="#" className='navLink'>About</link>
            </li><li className="navItem">
              <link to="#" className='navLink'>Contact</link>
            </li><li className="navItem">
              <link to="#" className='navLink'>FAQ</link>
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