import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {FaSun , FaMoon} from 'react-icons/fa'
import Toggle from './Toggle';
import { ThemeHook } from '../Context/ThemeContext';

const Header = () => {

  const[show,setShow]= useState(true);

  const controlNavbar=()=>{
     if(window.scrollY > 10)
     {
        setShow(false)
     }  
     else{
        setShow(true)
     }
     }

     useEffect(()=>{
        window.addEventListener('scroll',controlNavbar)
        return()=>{
        window.removeEventListener('scroll',controlNavbar)
        }
     },[])

     const {theme} = ThemeHook();


     const scrollToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };
  

     const handleAboutClick = () =>{
      window.scrollTo({ top: 980, left: 0, behavior: 'smooth' });
     }

     const handleSkillClick = () =>{
      window.scrollTo({ top: 1830, left: 0, behavior: 'smooth' });
     }

   
      // const yes = document.getElementById("checkbox");

      // if(yes.checked == true){
      //    console.log("hello");
      // }
      // else{
      //    console.log("world");
      // }

      // const dayHandler=()=>{
      //    const element = document.body;
      //    const day = document.getElementById("day");
      //    const night = document.getElementById("night");

      //    element.classList.toggle("dark-mode");
      //    // element.style.backgroundColor = "red"
      //     day.style.display = "none";
      //     night.style.display = "block";
      //    console.log("day");
      // }

      // const nightHandler=()=>{
      //    const element = document.body;
      //    const day = document.getElementById("day");  
      //    const night = document.getElementById("night");

      //    element.classList.toggle("day-mode");
      //    // element.style.backgroundColor = "red"
      //     day.style.display = "block";
      //     night.style.display = "none";
      //    console.log("night"); 
      // }

  return (
    <>
    <header className={`header-wrapper ${theme} ${show && 'hidden'} px-3`} style={{ borderBottom: theme === "light" ? "1px solid #c2d4ee" : "1px solid #222f43"}} id='header-part'>
    <div className='header-logo px-3'>
       <h5>Laukik Palekar</h5>
    </div>
    <div className='header-link'>
       <Link to='/' onClick={scrollToTop}>Home</Link>
       <Link to='/' onClick={handleAboutClick}>About</Link>
       <Link to='/' onClick={handleSkillClick}>Skill</Link>
       <Link to='/project' onClick={scrollToTop}>Project</Link>
       <Link to='/contact' onClick={scrollToTop}>Contact</Link>
    </div>
    <Toggle/>     
    </header>
    </>
  )
}

export default Header
