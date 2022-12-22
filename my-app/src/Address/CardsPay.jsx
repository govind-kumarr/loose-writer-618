import React, { useContext } from "react";
import styles from "./CardsPay.module.css";
import { AuthContext } from "../Redux/Login_Auth";
import { Otp_form } from "../LoginSignup/Otp_form";
import { useNavigate } from "react-router-dom";
const CardsPay = () => {
  const [data, setData] = React.useState({});
  const navigate = useNavigate();
  const { Otpvisible, setOtpVisible } = useContext(AuthContext);
  const handleChange = (e) => {
    const inputName = e.target.name;
    setData({
      ...data,
      [inputName]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setData(data);
    setOtpVisible(true);
  };
  const handle = () => {
    navigate("/Sucess");
  };

  return (
    <div className={styles.container}>
      <div>
        <h3>Credits & Debit Cards</h3>
        <p>Add New Card For Payment</p>
      </div>
      <div className={styles.box}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="">Card Number</label>
          <br />
          <input
            type="number"
            name="cardnumber"
            placeholder="XXXX XXXX XXXX XXXX"
            onChange={handleChange}
          />
          <div className={styles.flex}>
            <div>
              <label htmlFor="">Expiry Date(MM/YY)</label>
              <br />
              <input
                type="number"
                name="expiry"
                placeholder="MM/YY"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="">Security Code</label>
              <br />
              <input
                type="number"
                name="cvv"
                placeholder="CVV"
                onChange={handleChange}
              />
            </div>
          </div>
          <input
            type="text"
            name="name"
            placeholder="Name on Card"
            onChange={handleChange}
          />
          <div className={styles.check}>
            <input type="checkbox" name="details" />
            <p>
              Your card details will be saved securely for future transactions,
              based on the industry standards.
            </p>
          </div>
          <button type="submit" onSubmit={handleSubmit}>
            MAKE PAYMENT
          </button>
        </form>
      </div>

      <div className={styles.imge}>
        <p>We support domestic credit and debit cards of following brands</p>
        <div>
          <img
            src="https://res.cloudinary.com/du8msdgbj/image/upload/q_auto,f_auto/v1530098811/marketing/szfylmvspyj5ccvhesnp.png"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/du8msdgbj/image/upload/q_auto,f_auto/v1530098898/marketing/rv6lj5fubobesvsomlzr.png"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/du8msdgbj/image/upload/q_auto,f_auto/v1530098792/marketing/vujtyvkwxchd16egv0wt.png"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/du8msdgbj/image/upload/q_auto,f_auto/v1532957968/marketing/j9kc0uquxwrcbyoeomfw.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default CardsPay;
