import React from 'react'
import './LabPage.css'
import image from '../assets/images/Poster.png'
const LabPage = () => {
  return (
    <div>
      <div className="nav">Navbar</div>
      <div className="nav">SubNavbar</div>
        <div>
        Labpage
        <img src={image} alt="Poster" style={{width:'100%'}}/>
        </div>  
    </div>
  )
}

export default LabPage
