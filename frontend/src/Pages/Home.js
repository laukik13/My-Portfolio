import React, { useEffect, useState } from 'react'
import Navtab from '../Components/Navtab'
import { Link, useLocation } from 'react-router-dom'
import ReactTyped from 'react-typed'
import { Carousel } from 'antd'
import Projectcard from '../Components/Projectcard'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { ThemeHook } from '../Context/ThemeContext'

const Home = () => {

   const {theme} = ThemeHook()

   useEffect(()=>{
      Aos.init();
   },[])

  return (
    <>
    <section className={`home-wrapper ${theme}`} style={{  }} id='home'>
      <Navtab/>
                      <div className='lightshadowleft'>
                       <img  src='./Images/lightshadowleft.svg' alt='lightshadowleft.svg' />
                       </div>
          <div className='container-xxl'>
               <div className='home-inner-wrapper'>
                      <div className='home-details'>
                        <h5 data-aos="fade" data-aos-duration="2000">Hello Everyone!</h5>
                        <div>
                        <h1 data-aos="fade-up" data-aos-duration="1000"><b>I’m</b></h1>{" "}
                        <h2 className='color-linear' data-aos="fade-up" data-aos-duration="1000">
                          <b>
                        <ReactTyped
                        strings={['Laukik Palekar','Frontend Developer','Backend Developer','Full Stack Developer','React Developer' ,'Web Developer']}
                        typeSpeed={200}
                        loop
                        backSpeed={20}
                        cursorChar="|"
                        showCursor={true}
                        >
                        </ReactTyped>
                        </b>
                        </h2>
                        </div>
                        <p data-aos="fade-up" data-aos-duration="2000">I'm Laukik Palekar, a MERN (MongoDB, Express.js, React.js, Node.js) stack developer passionate about creating scalable and efficient web applications.</p>
                        <Link className='btn-contact'>Contact</Link>
                      </div>
                      <div className='home-image'>
                      <div className='lightshadowcenter'>
                       <img  src='./Images/lightshadowcenter.svg' alt='lightshadowcenter.svg'/>
                       </div>
                       <div className='profile'>
                       <img  src='./Images/profile.png' alt='profile.png' data-aos="fade" data-aos-duration="2000"/>
                       </div>
                       <div className='plus1'>
                       <img  src='./Images/plus.svg' alt='plus1.png'/>
                       </div>
                       <div className='plus2'>
                       <img  src='./Images/plus2.svg' alt='plus2.png'/>
                       </div>
                       <div className='round'>
                       <img  src='./Images/round.svg' alt='round.png'/>
                       </div>
                       <div className='round2'>
                       <img  src='./Images/round3.svg' alt='round2.png'/>
                       </div>
                      </div>
               </div>
          </div>
          <div className='project-wrapper' style={{ border: theme === "light" ? "1px solid #c2d4ee" : "1px solid #222f43" , backgroundColor: theme === "light" ? "#e8edf5" : "#131c31"}} id='projectwrapper'>
               <div className='px-3 py-3'>
                  <h5 data-aos="fade-up" data-aos-duration="1000">Latest Project's</h5>
                  <p data-aos="fade" data-aos-duration="1000">Don't miss out on the latest news about Travel tips, Hotels review, Food guide...</p>
               </div>
               <div>
                  <div>
                       <Carousel>
                        <div className='inner-carousel-wrapper'>
                           <Projectcard
                           imgsrc='./Images/project1.jpg'
                           />
                           <Projectcard
                           imgsrc='./Images/project2.jpg'
                           />
                           <Projectcard
                           imgsrc='./Images/project3.jpg'
                           /> 
                           <Projectcard
                           imgsrc='./Images/project4.png'
                           />
                        </div>
                        <div className='inner-carousel-wrapper'>
                        <Projectcard
                           imgsrc='./Images/project1.jpg'
                           />
                           <Projectcard
                           imgsrc='./Images/project2.jpg'
                           />
                           <Projectcard
                           imgsrc='./Images/project3.jpg'
                           /> 
                           <Projectcard
                           imgsrc='./Images/project4.png'
                           />
                        </div>
                        <div className='inner-carousel-wrapper'>
                        <Projectcard
                           imgsrc='./Images/project1.jpg'
                           />
                           <Projectcard
                           imgsrc='./Images/project2.jpg'
                           />
                           <Projectcard
                           imgsrc='./Images/project3.jpg'
                           /> 
                           <Projectcard
                           imgsrc='./Images/project4.png'
                           />
                        </div>
                       </Carousel>
                  </div>   
               </div>
          </div>
    </section>
    <section className={`project-down-wrapper ${theme}`} id='projectdown'>

    </section >
    <section className={`about-wrapper ${theme}`} id='about'>
    <div className='lightshadowright'>
                       <img  src='./Images/lightshadowright.svg' alt='lightshadowright.svg'/>
                       </div>
      <div className='container-xxl'>
      <h5 className='color-linear py-3' data-aos="fade-up" data-aos-duration="2000">About <b>Me</b></h5>
      <div className='about-grid-wrapper'>
         <div className='about-img-wrapper'>
            <img src='./Images/profile3.png' alt='profile2' data-aos="fade" data-aos-duration="2000"/>
         </div>
         <div className='about-details-wrapper'>
            <p data-aos="fade-right" data-aos-duration="2000">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

            <Link className='btn-download'>Download CV</Link>
         </div>
      </div>
      </div>
    </section >
    <section className={`skill-wrapper ${theme}`} id='skill'>
         <div className='lightshadowleft'>
         <img  src='./Images/lightshadowleft.svg' alt='lightshadowleft.svg' />
         </div>
    <div className='container-xxl'>
      <h5 className='color-linear py-3' data-aos="fade-up" data-aos-duration="2000">My <b>Skills</b></h5>
      <div className='skill-grid-wrapper'> 
          <div className='skill-roundprogress-bar'>
            <div className='roundprogress-bar-div' data-aos="flip-right" data-aos-duration="2000">
            <CircularProgressbar value={85} text='85%'/>
            <h5 data-aos="flip-right" data-aos-duration="3000">HTML 5</h5>
            </div>
            <div className='roundprogress-bar-div' data-aos="flip-right" data-aos-duration="2000">
            <CircularProgressbar value={85} text='85%'/>
            <h5 data-aos="flip-right" data-aos-duration="3000">CSS 3</h5>
            </div>
            <div className='roundprogress-bar-div' data-aos="flip-right" data-aos-duration="2000">
            <CircularProgressbar value={83} text='83%'/>
            <h5 data-aos="flip-right" data-aos-duration="3000">JAVASCRIPT</h5>
            </div>
            <div className='roundprogress-bar-div' data-aos="flip-right" data-aos-duration="2000">
            <CircularProgressbar value={70} text='70%'/>
            <h5 data-aos="flip-right" data-aos-duration="3000">REACT JS</h5>
            </div>
            <div className='roundprogress-bar-div' data-aos="flip-right" data-aos-duration="2000">
            <CircularProgressbar value={65} text='65%'/>
            <h5 data-aos="flip-right" data-aos-duration="3000">SQL</h5>
            </div>
            <div className='roundprogress-bar-div' data-aos="flip-right" data-aos-duration="2000">
            <CircularProgressbar value={70} text='70%'/>
            <h5 data-aos="flip-right" data-aos-duration="3000">NODE JS</h5>
            </div>
            <div className='roundprogress-bar-div' data-aos="flip-right" data-aos-duration="2000">
            <CircularProgressbar value={75} text='75%'/>
            <h5 data-aos="flip-right" data-aos-duration="3000">EXPRESS JS</h5>
            </div>
            <div className='roundprogress-bar-div' data-aos="flip-right" data-aos-duration="2000">
            <CircularProgressbar value={75} text='75%'/>
            <h5 data-aos="flip-right" data-aos-duration="3000">MONGODB</h5>
            </div>
          </div>
          <div className='skill-progress-bar'>
          <div className='d-flex justify-content-center align-items-center gap-20'>
          <div className="progress">
          <div className="progress-bar" role="progressbar" style={{width: '75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" data-aos="fade-right" data-aos-duration="2000"></div>
          </div>
          <h5>html</h5>
          </div>
          <div className='d-flex justify-content-center align-items-center gap-20'>
          <div className="progress">
          <div className="progress-bar" role="progressbar" style={{width: '30%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" data-aos="fade-right" data-aos-duration="2000"></div>
          </div>
          <h5>html</h5>
          </div>
          <div className='d-flex justify-content-center align-items-center gap-20'>
          <div className="progress">
          <div className="progress-bar" role="progressbar" style={{width: '45%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" data-aos="fade-right" data-aos-duration="2000"></div>
          </div>
          <h5>html</h5>
          </div>
          <div className='d-flex justify-content-center align-items-center gap-20'>
          <div className="progress">
          <div className="progress-bar" role="progressbar" style={{width: '55%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" data-aos="fade-right" data-aos-duration="2000"></div>
          </div>
          <h5>html</h5>
          </div>
          <div className='d-flex justify-content-center align-items-center gap-20'>
          <div className="progress">
          <div className="progress-bar" role="progressbar" style={{width: '75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" data-aos="fade-right" data-aos-duration="2000"></div>
          </div>
          <h5>html</h5>
          </div>
          </div>
      </div>
    </div>
    </section>
    </>
  )
}

export default Home
