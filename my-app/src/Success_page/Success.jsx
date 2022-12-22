import React from "react";
import { Link } from "react-router-dom";
// import "./Sucess.css"
import styles from "./Success.module.css";
// import {Link} from "react-router-dom;"

const Success = () => {
  return (
    <div className={styles.container1}>
      <div>
        <img src="https://www.clipartmax.com/png/full/179-1795386_patient-success-success-icon-png.png" />
        <h1>Thank you for your purchase!</h1>
        <br></br>
        <h4>
          Your order id:{" "}
          <span id="order">{Math.round(Math.random() * 3311000)}</span>
        </h4>
        <br></br>
      </div>
      <div>
        <Link to="/">Continue Shopping</Link>
        {/* <button onClick="btn()">Continue Shopping</button> */}
      </div>

      <div />
    </div>
  );
};

export default Success;
