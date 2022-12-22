import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./addaddress.module.css";
import { AddressContext } from "./AddressApi";
import { useNavigate } from "react-router-dom";

const AddAddress = () => {
  const { id, setId, handle } = useContext(AddressContext);
  const [address, setAddress] = useState();
  let navigate = useNavigate();

  const getAddress = async () => {
    let res = await fetch(
      `https://mock-test-8th-json-server.herokuapp.com/api/address`
    );
    let data1 = await res.json();
    console.log(data1);
    setAddress(data1);
  };

  // console.log(address);

  useEffect(() => {
    getAddress();
  }, [id]);

  const handleChange = (e) => {
    // console.log(e.target.value);
    setId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handle(id);
    navigate("/Delivery");
  };
  // console.log(id);

  return (
    <div className={styles.box}>
      <form onSubmit={handleSubmit}>
        {address &&
          address.map((el) => {
            return (
              <div className={styles.flex} key={el.id}>
                <div>
                  <input
                    type="radio"
                    name="deliveryAdd"
                    value={el.id}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <h6>{el.address_place}</h6>
                  <p>{el.name}</p>
                  <p>
                    {el.mobile},{el.buliding},{el.locality}
                  </p>
                  <p>
                    {el.city},{el.state}-{el.pincode}
                  </p>
                </div>
              </div>
            );
          })}
        <div>
          <Link to="/Address">+ ADD NEW ADDRESS</Link>
        </div>
        <br />
        <button type="submit" onClick={handleSubmit}>
          CONTINUE
        </button>
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

export default AddAddress;
