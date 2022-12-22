import React, { useState, useEffect, useContext } from "react";
import { AddressContext } from "./AddressApi";
import styles from "./Delivery.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Delivery = () => {
  const [address, setAddress] = useState();
  const { id } = useContext(AddressContext);
  const navigate = useNavigate();
  const getAddress = async () => {
    // let res = await fetch(`https://mock-test-8th-json-server.herokuapp.com/api/address?id=${id}`);
    // let address1 = await res.json();
    //  console.log(address1)
    axios
      .get(`https://mock-test-8th-json-server.herokuapp.com/api/address/${id}`)
      .then((res) => {
        //  console.log(res.data)
        setAddress(res.data);
      });
  };
  //  console.log(address)
  useEffect(() => {
    getAddress();
  }, [id]);

  const handleSubmit = () => {
    navigate("/ProductsDelivery");
  };

  return (
    <div className={styles.container}>
      <div>
        <h2>Choose Delivery Option(s)</h2>
        <div className={styles.box}>
          <p>Choose a delivery speed</p>
          <div className={styles.inputflex}>
            <input type="radio" name="date" value="date" />
            <label htmlFor="date">Between 14-15 May</label>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.box2}>
          <div className={styles.header}>
            <h2>Select Address</h2>
            <button>CHANGE</button>
          </div>
          <div className={styles.address}>
            {address && (
              <div key={address.id}>
                <h6>{address.address_place}</h6>
                <p>{address.name}</p>
                <p>
                  {address.mobile},{address.buliding},{address.locality}
                </p>
                <p>
                  {address.city},{address.state}-{address.pincode}
                </p>
              </div>
            )}
          </div>
          <button onClick={handleSubmit}>CONTINUE</button>
        </div>
        {/* <div className={styles.address}></div>
        <button>CONTINUE</button> */}
      </div>
    </div>
  );
};

export default Delivery;
