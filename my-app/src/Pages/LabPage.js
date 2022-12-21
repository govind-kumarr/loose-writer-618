import React from 'react'
import './labpage.css'
import image from '../assets/images/Poster.png'
import Slider from './Slider'
const LabPage = () => {
  return (
    <div >
      <div className="nav">Navbar</div>
      <div className="nav">SubNavbar</div>
        <div className='lab'>
        {/* <Slider /> */}
        <h3 className='textLeft'>Book A Lab Test</h3>
        </div>  
        <img src={image} alt="Poster" className='Poster' />
    </div>
  )
}

export default LabPage
