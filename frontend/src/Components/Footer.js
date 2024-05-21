import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {FiFacebook} from 'react-icons/fi'
import {FiInstagram} from 'react-icons/fi'
import {FiTwitter} from 'react-icons/fi'
import {FiLinkedin} from 'react-icons/fi'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { ThemeHook } from '../Context/ThemeContext'
const Footer = () => {

  const {theme} = ThemeHook();

  useEffect(()=>{
    Aos.init();
 },[])

  return (
    <>
    <section className={`footer-wrapper ${theme}`} id='footer'>
          <div className='footer-inner-wrapper'  style={{ border: theme === "light" ? "1px solid #c2d4ee" : "1px solid #222f43" , backgroundColor: theme === "light" ? "#e8edf5" : "#131c31"}} id='footer-wrapper'>
               <div className='footer-grid-wrapper'>
                   <div className='d-flex flex-column justify-content-start align-items-start gap-20'>
                        <h5>Laukik Palekar</h5>
                        <p>When an unknown prnoto sans took a galley and scrambled it to make specimen book not only five When an unknown prnoto sans took a galley and scrambled it to five centurie.</p>
                    </div>
                    <div className='d-flex flex-column justify-content-start align-items-center gap-20'>
                        <h5>Quick Links</h5>
                        <div className='footer-link-wrapper'>
                          <Link to='/'>Home</Link>
                          <Link to='/'>About</Link>
                          <Link to='/'>Skill</Link>
                          <Link to='/'>Project</Link>
                          <Link to='/'>Contact</Link>
                        </div>
                    </div>
                    <div className='d-flex flex-column justify-content-start align-items-center gap-20'>
                        <h5>Newsletter</h5>
                        <p>Sign up to be first to receive the latest stories inspiring us, case studies, and industry news.</p>
                        <div>
                             <form className='form-wrapper'>
                              <input type='text' style={{ border: theme === "light" ? "1px solid #c2d4ee" : "1px solid #222f43" }} placeholder='Name' id='input'/>
                              <input type='email' style={{ border: theme === "light" ? "1px solid #c2d4ee" : "1px solid #222f43" }} placeholder='E-mail' id='input'/>
                              <button className='btn-contact'>Subscribe</button>
                             </form>
                        </div>
                    </div>
               </div>
               <div className='break-line' style={{ backgroundColor: theme === "light" ? "#c2d4ee" : "#222f43" }}>

               </div>
               <div className='footer-base-wrapper'>
                 <div>
                 <p className='py-3 text-center '>&copy; {new Date().getFullYear()} Created by Laukik Palekar</p>
                 </div>
                 <div className='d-flex justify-content-center align-items-center gap-20'>
                 <FiFacebook className='sm-icons'/>
                 <FiInstagram className='sm-icons'/>
                 <FiTwitter className='sm-icons'/>
                 <FiLinkedin className='sm-icons'/>
                 </div>
               </div>
          </div>
    </section>
    </>
  )
}

export default Footer
