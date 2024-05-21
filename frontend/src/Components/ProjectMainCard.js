import React from 'react'
import { ThemeHook } from '../Context/ThemeContext'

const ProjectMainCard = (props) => {

const {theme} = ThemeHook()

  return (
   <>
   <div className='project-main-card'  style={{ border: theme === "light" ? "1px solid #c2d4ee" : "1px solid #222f43" , backgroundColor: theme === "light" ? "#e8edf5" : "#131c31"}}>
    <div className='project-img-wrapper'>
       <img src={props.imgsrc} alt='project1'/>
    </div>
    <div className='px-3 py-1'>
        <h5>Title</h5>
        <p>
        I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that.
        </p>
    </div>
    <div className='d-flex justify-content-end align-items-end px-3 py-1'>
        <button className='btn-view'>View</button>
    </div>
   </div>
   </>
  )
}

export default ProjectMainCard
