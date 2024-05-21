import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Toggle from './Toggle';


const Navtab = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };


   const handleAboutClick = () =>{
    window.scrollTo({ top: 980, left: 0, behavior: 'smooth' });
   }

   const handleSkillClick = () =>{
    window.scrollTo({ top: 1830, left: 0, behavior: 'smooth' });
   }


  return (
    <>
    <header className='navbar px-3' id='navbar'>
    <div className='header-logo px-3'>
       <h5>Laukik Palekar</h5>
    </div>
    <div className='header-link'>
    <Link to='/' onClick={scrollToTop}>Home</Link>
       <Link to='/' onClick={handleAboutClick}>About</Link>
       <Link to='/'  onClick={handleSkillClick}>Skill</Link>
       <Link to='/project' onClick={scrollToTop}>Project</Link>
       <Link to='/contact' onClick={scrollToTop}>Contact</Link>
    </div>
    <Toggle/>
    </header>
    </>
  )
}

export default Navtab
