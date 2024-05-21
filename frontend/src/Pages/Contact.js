import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineHome} from 'react-icons/ai'
import {HiChevronRight} from 'react-icons/hi'
import Navtab from '../Components/Navtab'
import { ThemeHook } from '../Context/ThemeContext'

const Contact = () => {

  const {theme} = ThemeHook();

  return (
   <>
   <section className={`contact-wrapper ${theme}`}>
   <Navtab/>
                      <div className='lightshadowleft'>
                       <img src='./Images/lightshadowleft.svg' alt='lightshadowleft.svg' />
                       </div>
         <div className='container-xxl'>
             <div className='contact-header-wrapper'>
                    <h5>Contact Us</h5>
                    <p><Link to='/'><AiOutlineHome className='home-icon'/>&nbsp;Home</Link><HiChevronRight className='right-icon'/>Contact</p>
                  </div>
                  <div className='break-line'></div>
                  <div className='contact-details-wrapper'>
                        <h6>Drop Us a Line</h6>
                        <p>Your email address will not be published. Required fields are marked *</p>
                        <div>
                              <form className='d-flex flex-column gap-20'>
                                <div className='form-wrapper-1'>
                                <input type='text' placeholder='Your Name' style={{ border: theme === "light" ? "1px solid #c2d4ee" : "1px solid #222f43" }}/>
                                <input type='text' placeholder='Email' style={{ border: theme === "light" ? "1px solid #c2d4ee" : "1px solid #222f43" }}/>
                                </div>
                                <div className='form-wrapper-2'>
                                <input type='text' placeholder='Phone Number' style={{ border: theme === "light" ? "1px solid #c2d4ee" : "1px solid #222f43" }}/>
                                <input type='text' placeholder='Subject' style={{ border: theme === "light" ? "1px solid #c2d4ee" : "1px solid #222f43" }}/>
                                </div>
                                <div className='form-wrapper-3'>
                                <textarea type='text' placeholder='Message' style={{ border: theme === "light" ? "1px solid #c2d4ee" : "1px solid #222f43" }}/>
                                </div>
                              </form>
                        </div>
                  </div>
         </div>
    </section>
   </>
  )
}

export default Contact
