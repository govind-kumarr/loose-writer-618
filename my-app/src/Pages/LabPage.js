import React from 'react'
import './labpage.css'
import image from '../assets/images/Poster.png'
import PopularTest from '../Components/PopularTest'
import HealthCheckup from '../Components/HealthCheckup'
import FeatureLab from '../Components/FeatureLab'
import InfoVideo from '../Components/InfoVideo'
import HappyCustomer from '../Components/HappyCustomer'
import LabCustomer from '../Components/LabCustomer'
import Carosel from './Carosel'
const LabPage = () => {
  return (
    <div >
        <div className='lab'>
        <Carosel />
        <PopularTest />
        <img src={image} alt="Poster" className='Poster' />
        {/* <HealthCheckup/> */}
        <FeatureLab />
        <InfoVideo />
        <HappyCustomer />
        <LabCustomer />
        </div>  
        
    </div>
  )
}

export default LabPage
