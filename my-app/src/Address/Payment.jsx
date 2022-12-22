import React, { useContext, useState } from "react";
import { useSelector } from "react-redux";
import CardsPay from "./CardsPay";
import styles from "./payment.module.css";
import PayOnDelivery from "./PayOnDelivery";
import Wallet from "./Wallet";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Redux/Login_Auth";

const Payment = () => {
  const navigate = useNavigate();
  const [comp, setComp] = useState("Wallet");
  const { Otpvisible, setOtpVisible } = useContext(AuthContext);

  const [Mtotal, setMtotal] = React.useState(0);
  const [Dtotal, setDtotal] = React.useState(0);
  const [Ptotal, setPtotal] = React.useState(0);
  const [change, setChange] = React.useState(false);
  let m = 0;
  let p = 0;
  let d = 0;

  const { cartData } = useSelector((state) => {
    return state;
  });

  React.useEffect(() => {
    m = 0;
    p = 0;
    d = 0;
    cartData.map((el) => {
      // console.log(el.qty);
      m += el.qty * el.mrp;
      p += el.qty * el.price;
      d += el.qty * Math.abs(el.mrp - el.price);
      setMtotal(m);
      setPtotal(p);
      setDtotal(d);
    });
  }, [change, cartData]);
  const handleSubmit = () => {
    setOtpVisible(true);
  };
  const handleChange = () => {
    setComp("Wallet");
  };
  const handleChange2 = () => {
    setComp("Cards");
  };
  const handleChange4 = () => {
    setComp("Cod");
  };
  // console.log(comp);
  return (
    <div className={styles.Payment_container}>
      <div className={styles.dis_flex}>
        <div className={styles.one}>
          <div className={styles.flex} onClick={handleChange}>
            <img
              src="https://res.cloudinary.com/du8msdgbj/image/upload/q_auto,f_auto/v1530172217/marketing/vvew3rcvwfjrhknifj1z.png"
              alt=""
            />
            <h4>WALLETS</h4>
          </div>
          <div className={styles.flex}>
            <img
              src="https://res.cloudinary.com/du8msdgbj/image/upload/q_auto,f_auto/v1581576219/marketing/p0w0w4crcgcthkom8j23.png"
              alt=""
            />
            <h4>UPI</h4>
          </div>
          <div className={styles.flex} onClick={handleChange2}>
            <img
              src="https://res.cloudinary.com/du8msdgbj/image/upload/q_auto,f_auto/v1530172186/marketing/p45zk16fua8dmxany3up.png"
              alt=""
            />
            <h4>CARDS</h4>
          </div>
          <div className={styles.flex}>
            <img
              src="https://res.cloudinary.com/du8msdgbj/image/upload/q_auto,f_auto/v1530172229/marketing/bsnk5fvtd4b6xffsvjdm.png"
              alt=""
            />
            <h4>NET BANKING</h4>
          </div>
          <div className={styles.flex} onClick={handleChange4}>
            <img
              src="https://res.cloudinary.com/du8msdgbj/image/upload/q_auto,f_auto/v1530172202/marketing/pyzcsicqsnwawi4yrpo7.png"
              alt=""
            />
            <h4>PAY ON DELIVERY</h4>
          </div>
          <div className={styles.flex}>
            <img
              src="https://res.cloudinary.com/du8msdgbj/image/upload/v1531829770/marketing/ktsnqzkrikf9zsdvd0rp.png"
              alt=""
            />
            <h4>PAY LATER</h4>
          </div>
        </div>
        <div>
          {/* ComponentS */}
          {comp === "Wallet" && <Wallet />}
          {comp === "Cards" && <CardsPay />}
          {comp === "Cod" && <PayOnDelivery />}
        </div>
        <div className={styles.three}>
          <div>
            <img
              src="https://res.cloudinary.com/du8msdgbj/image/upload/v1609235175/rwfhtgwtk8zmnbwdvfme.png"
              alt=""
            />
            <p>
              Pay with Airtel Money and get 10% cashback upto ₹200 on a minimum
              transaction of ₹1000. Valid only for first-time users ...
            </p>
          </div>
          <div style={{ marginTop: "30px" }}>
            <div className={styles.cartSummary}>
              <span>Item Total(MRP)</span>
              <span>₹{Mtotal}</span>
            </div>
            <div className={styles.cartSummary}>
              <span>Price Discount</span>
              <span id="cartSummaryDiscount">-₹{Dtotal.toFixed(2)}</span>
            </div>
            <hr />
            <div className={styles.cartSummary}>
              <span>Shipping Fee</span>
              <span id="cartSummaryShippingFee">As per delivery address</span>
            </div>
            <hr />
            <div className={styles.cartSummary} id="fontbold">
              <span>To be paid</span>
              <span id="cartSummaryToBePaid">₹{Ptotal.toFixed(2)}</span>
            </div>
            <div className={styles.cartTotalSavings}>
              <span id="totalSavingFont">Total Savings</span>
              <span id="totalSavingGreen">₹{Dtotal.toFixed(2)}</span>
            </div>
          </div>
          <button onClick={handleSubmit}>Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
