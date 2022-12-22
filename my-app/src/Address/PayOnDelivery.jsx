import React from 'react'
import styles from './PayOnDelivery.module.css'

const PayOnDelivery = () => {
  return (
    <div className={styles.container}>
        <div className={styles.flex}>
            <img src="https://res.cloudinary.com/du8msdgbj/image/upload/q_auto,f_auto/v1530103046/marketing/dwuduzecduhobnrvro1z.png" alt="" />
            <h6>CASH ON DELIVERY</h6>
        </div>
        <p>Wait! You can save more. Pay online for this order & get additional 5% 1mgCash (up to ₹25).</p>
    </div>
  )
}

export default PayOnDelivery