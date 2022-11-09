import React from 'react'
import './LabPage.css'
import image from '../assets/images/Poster.png'
import Slider from './Silder'
const LabPage = () => {
  return (
    <div>
      <div className="nav">Navbar</div>
      <div className="nav">SubNavbar</div>
        <div>
        <Slider />
        <img src={image} alt="Poster" className='Poster' />
        </div>  
    </div>
  )
}

export default LabPage
