import React from 'react'
import {AiOutlineHome, AiOutlinePlusCircle} from 'react-icons/ai'
import {BsFilterCircle} from 'react-icons/bs'
import './PopularTest.css'
const PopularTest = () => {
  return (
    <>
      <div className='ptest'>
      <h1 className='p'>Popular Test</h1>
        <div className='flex2'>
            <div className='flex3'>
                <div className='flex1 p head'><div><AiOutlineHome/></div><div><h1>HEALTH TEST AT YOUR HOME</h1></div></div>
                <div className='flex'>
                    <div className='flex4'>
                        <div className='flex1'><div><AiOutlinePlusCircle/></div><div>COVID-RTPCR</div></div>
                        <div className='flex1'><div><AiOutlinePlusCircle/></div><div>Dengue NS1 Antigen</div></div>
                        <div className='flex1'><div><AiOutlinePlusCircle/></div><div>Diabetes Screening</div></div>
                    </div>
                    <div className='flex4'>
                        <div className='flex1'><div><AiOutlinePlusCircle/></div><div>LFT + KFT</div></div>
                        <div className='flex1'><div><AiOutlinePlusCircle/></div><div>Thyroid profile Total</div></div>
                        <div className='flex1'><div><AiOutlinePlusCircle/></div><div>Glucose - Postprandial</div></div>
                    </div>
                </div>
            </div>
            <div className='flex3'>
                <div className='flex1 p head'><div><BsFilterCircle /></div><div><h1>VISIT A LAB NEAR YOU</h1></div></div>
                <div className='flex'>
                    <div className='flex4'>
                        <div className='flex1'><div><AiOutlinePlusCircle/></div><div>USG Whole Abdomen</div></div>
                        <div className='flex1'><div><AiOutlinePlusCircle/></div><div>ECG</div></div>
                        <div className='flex1'><div><AiOutlinePlusCircle/></div><div>HRCT CHEST - Plain</div></div>
                    </div>
                    <div className='flex4'>
                        <div className='flex1'><div><AiOutlinePlusCircle/></div><div>X - Ray Chest PA View</div></div>
                        <div className='flex1'><div><AiOutlinePlusCircle/></div><div>MRI Brain</div></div>
                        <div className='flex1'><div><AiOutlinePlusCircle/></div><div>CECT Whole Abdomen</div></div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default PopularTest
