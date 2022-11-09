import React from 'react'
import './labpage.css'
import image from '../assets/images/Poster.png'
const LabPage = () => {
  return (
    <div>
      <div className="nav">Navbar</div>
      <div className="nav">SubNavbar</div>
        <div>
        Labpage
        <img src={image} alt="poster" style={{width:"100%"}}/>




        </div>  
      <div className="foot">Footer</div>
    </div>
  )
}

export default LabPage
