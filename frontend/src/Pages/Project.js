import React from 'react'
import Navtab from '../Components/Navtab'
import { Link } from 'react-router-dom'
import {AiOutlineHome} from 'react-icons/ai'
import {HiChevronRight} from 'react-icons/hi'
import { Tab, Tabs } from 'react-bootstrap'
import ProjectMainCard from '../Components/ProjectMainCard'
import { ThemeHook } from '../Context/ThemeContext'

const Project = () => {

  const {theme} = ThemeHook();

  return (
    <>
    <section className={`project-container-wrapper ${theme}`} id='project1'>
    <Navtab/>
                      <div className='lightshadowleft'>
                       <img  src='./Images/lightshadowleft.svg' alt='lightshadowleft.svg' />
                       </div>
         <div className='container-xxl'>
                  <div className='project-header-wrapper'>
                    <h5>Project</h5>
                    <p><Link to='/'><AiOutlineHome className='home-icon'/>&nbsp;Home</Link><HiChevronRight className='right-icon'/>Project</p>
                  </div>
                  <div className='break-line' style={{ backgroundColor: theme === "light" ? "#c2d4ee" : "#222f43"}}></div>
                  <div className='project-details-wrapper'>
                  <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                <Tab eventKey={1} title="ALL">
                <div className='tab-grid'>
                    <ProjectMainCard
                    imgsrc='./Images/project1.jpg'
                    />
                    <ProjectMainCard
                    imgsrc='./Images/project2.jpg'
                    />
                    <ProjectMainCard
                    imgsrc='./Images/project3.jpg'
                    />
                    <ProjectMainCard
                    imgsrc='./Images/project4.png'
                    />
                    <ProjectMainCard
                    imgsrc='./Images/project1.jpg'
                    />
                    <ProjectMainCard
                    imgsrc='./Images/project2.jpg'
                    />
                    <ProjectMainCard
                    imgsrc='./Images/project3.jpg'
                    />
                    <ProjectMainCard
                    imgsrc='./Images/project4.png'
                    />
                </div>
                </Tab>
                <Tab eventKey={2} title="E-COMMERCE">
                <div className='tab-grid'>
                <ProjectMainCard
                    imgsrc='./Images/project1.jpg'
                    />
                    <ProjectMainCard
                    imgsrc='./Images/project2.jpg'
                    />
                    <ProjectMainCard
                    imgsrc='./Images/project3.jpg'
                    />
                    <ProjectMainCard
                    imgsrc='./Images/project4.png'
                    />
                </div>
                </Tab>
                <Tab eventKey={3} title="ADMIN">
                <div className='tab-grid'>
                <ProjectMainCard
                    imgsrc='./Images/project1.jpg'
                    />
                    <ProjectMainCard
                    imgsrc='./Images/project2.jpg'
                    />
                </div>
                </Tab>
                <Tab eventKey={4} title="LANDING PAGE">
                <div className='tab-grid'>
                <ProjectMainCard
                    imgsrc='./Images/project1.jpg'
                    />
                </div>
                </Tab>
                </Tabs>
                  </div>
         </div>
    </section>
    </>
  )
}

export default Project
