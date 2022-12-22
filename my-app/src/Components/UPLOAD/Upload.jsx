import React from 'react'
import { AiOutlineFileDone } from "react-icons/ai";
import styles from './Upload.module.css'
const Upload = () => {
  return (
    <div className={styles.main}>
        <div className={styles.dr}>
            <div className={styles.one}>
               <h1>Upload Prescription</h1>
               <p>Please attach a prescription to proceed</p>
               <div className={styles.border}><img src="https://res.cloudinary.com/du8msdgbj/image/upload/v1587633147/marketing/tw0dco5xexdieshf2lxs.svg"/><b>UPLOAD NEW</b></div>
               <br/>
               <div className={styles.border}> <img src="https://res.cloudinary.com/du8msdgbj/image/upload/v1587633606/marketing/suctp3js3oqjw7lovs7p.svg" /><b>SAVED PRESCRIPTION</b> </div>
               <hr />
               <h3>Attached Prescription</h3>
               <div className={styles.pre}>
                  <img src="" alt="" /> 
                  <p>Uploaded prescriptions will be shown here</p>
               </div>
            </div>
            <div className={styles.two}>
                <h1>Guide for a valid prescription</h1>
               <div className={styles.fle}>
               <img src="https://www.1mg.com/images/online_consultation/validate_rx.svg" alt="" />
               <ul>
                   <li>Don’t crop out any part of the image</li>
                   <li>Avoid blurred image</li>
                   <li>Include details of doctor and patient + clinic visit date</li>
                   <li>Medicines will be dispensed as per prescription</li>
                   <li>Supported files type: jpeg , jpg , png , pdf</li>
                   <li>Maximum allowed file size: 5MB</li>
               </ul>
               </div>
                <p>Government regulations require a valid prescription</p>
            </div>
        </div>
        <br/>
        <button>CONTINUE</button>
        <div className={styles.img}>
            <img src="https://onemg.gumlet.io/image/upload/v1625555741/xe6glhvttbkmqmbvrhle.png" alt="" />
        </div>
    </div>
  )
}

export default Upload