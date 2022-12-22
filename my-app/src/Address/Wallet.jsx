import React from 'react'
import styles from './Wallet.module.css'

const Wallet = () => {
  return (
    <div className={styles.container}>
        <div className={styles.box}>
            <div className={styles.flex}>
               <img src="https://res.cloudinary.com/du8msdgbj/image/upload/q_auto,f_auto/v1532939475/marketing/jwodyz6rhzi7tardzxii.png"/>
               <h6>Paytm PostPaid | Wallet </h6>
            </div>
            <div>
                <p>Pay with Paytm Postpaid or Paytm wallet on Tata 1mg for ₹999 or more and get 4000 cashback points. Offer ends 31st May 2022.</p>
            </div>
            <p>LINK WALLET</p>
        </div>
        <div className={styles.box}>
           <div className={styles.flex}>
               <img src="https://res.cloudinary.com/du8msdgbj/image/upload/v1594272078/marketing/ahvfzsqhj9nlgzexicdf.png"/>
               <h6>Mobiikwik </h6>
            </div>
            <div>
                <p>Pay with Mobiwiki Postpaid or Mobiwiki wallet on Tata 1mg for ₹999 or more and get 4000 cashback points. Offer ends 31st May 2022.</p>
            </div>
            <p>LINK WALLET</p>
        </div>
        <div className={styles.box}>
           <div className={styles.flex}>
               <img src="https://res.cloudinary.com/du8msdgbj/image/upload/v1612955877/marketing/q3zsbh4i3vgqa8ijcv0h.png"/>
               <h6>Amazon Pay </h6>
            </div>
        </div>
        <div className={styles.box}>
        <div className={styles.flex}>
               <img src="https://res.cloudinary.com/du8msdgbj/image/upload/q_auto,f_auto/v1530102864/marketing/c6nghvgylcvcbqix6qzl.png"/>
               <h6>FreeCharger PayLater | Wallet </h6>
            </div>
           
            <p>LINK WALLET</p>
        </div>
        <div className={styles.box}>
        <div className={styles.flex}>
               <img src="https://res.cloudinary.com/du8msdgbj/image/upload/q_auto,f_auto/v1530102837/marketing/l265joanpwafqbp165df.png"/>
               <h6>Airtel Payments Bank</h6>
            </div>
            <div>
                <p>Pay with Airtel Postpaid or Airtel wallet on Tata 1mg for ₹999 or more and get 4000 cashback points. Offer ends 31st May 2022.</p>
            </div>
        </div>
        <div className={styles.box}>
           <div className={styles.flex}>
               <img src="https://res.cloudinary.com/du8msdgbj/image/upload/q_auto,f_auto/v1530102966/marketing/wstivvhhjrmqbrh5octm.png"/>
               <h6>PhonePe</h6>
            </div>
        </div>
    </div>
  )
}

export default Wallet