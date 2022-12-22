import React, { useState } from "react";
import styles from "./Address.module.css";

const Address = () => {
  const [data, setData] = useState({});

  const handleChange = (e) => {
    const inputName = e.target.name;
    setData({
      ...data,
      [inputName]: e.target.value,
    });
  };

  const add = async (data) => {
    let response = await fetch(
      `https://mock-test-8th-json-server.herokuapp.com/api/address`,
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      }
    );
    let data1 = await response.json();
    setData(data1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData(data);
    add(data);
  };

  return (
    <div className={styles.address}>
      <form onSubmit={handleSubmit}>
        <h2>Add New Address</h2>
        <div className={styles.form}>
          <input
            type="text"
            name="buliding"
            placeholder="Flat Number,Building Name,Street/Locality"
            onChange={handleChange}
          />
          <input
            type="text"
            name="landmark"
            placeholder="Landmark(optional)"
            onChange={handleChange}
          />
          <input
            type="number"
            name="pincode"
            placeholder="Pincode"
            onChange={handleChange}
          />
          <input
            type="text"
            name="locality"
            placeholder="Locality"
            onChange={handleChange}
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            onChange={handleChange}
          />
          <input
            type="text"
            name="state"
            placeholder="State"
            onChange={handleChange}
          />
          <input
            type="text"
            name="name"
            placeholder="Customer Name"
            onChange={handleChange}
          />
          <input
            type="number"
            name="mobile"
            placeholder="10 Digit Mobile Number"
            onChange={handleChange}
          />
          <div className={styles.flexip}>
            <input
              type="radio"
              name="address_place"
              value="Home"
              onChange={handleChange}
            />
            <label htmlFor="Home">Home</label>
            <input
              type="radio"
              name="address_place"
              value="Office"
              onChange={handleChange}
            />
            <label htmlFor="Office">Office</label>
            <input
              type="radio"
              name="address_place"
              value="Other"
              onChange={handleChange}
            />
            <label htmlFor="Other">Other</label>
          </div>
          <div className={styles.flexbtn}>
            <button type="submit">CANCEL</button>
            <button type="submit" value="Submit" onSubmit={handleSubmit}>
              SAVE
            </button>
          </div>
        </div>
      </form>
      <div className={styles.flexp}>
        <div>
          <p>
            Tata 1mg is a technology platform to facilitate transaction of
            business. The products and services are offered for sale by the
            sellers. The user authorizes the delivery personel to be his agent
            for delivery of the goods. For details read terms and conditions.
          </p>
        </div>
        <div>
          <p>
            *NeuCoins will be credited 7 days after your complete order is
            delivered in case of Products and in case of Lab Services NeuCoins
            will be credited within 24 hours from the time of generation of test
            report. NeuCoins will not be credited in case a return request is
            initiated for the order. NeuCoins are rounded to the nearest integer
            and the value of NeuCoins earned may change if total order value
            changes.
          </p>

          <p>
            **Coupon Discount value may change if the total order value changes.
          </p>

          <p>
            ***Items in your cart will always reflect the most recent price as
            compared to the prices in their product detail page.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Address;
