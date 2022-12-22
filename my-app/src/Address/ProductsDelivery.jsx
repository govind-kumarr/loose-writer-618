import React, { useState, useEffect, useContext } from "react";
import { AddressContext } from "./AddressApi";
import axios from "axios";
import styles from "./ProductsDel.module.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProductsDelivery = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const getData = async () => {
    let res = await fetch(
      `https://mock-test-8th-json-server.herokuapp.com/api/Cart`
    );
    let data1 = await res.json();
    //  console.log(data1)
    setData(...data, data1);
  };
  const [address, setAddress] = useState([]);
  const { id } = useContext(AddressContext);
  const getAddress = async () => {
    axios
      .get(`https://mock-test-8th-json-server.herokuapp.com/api/address/${id}`)
      .then((res) => {
        console.log(res.data);
        setAddress(res.data);
      });
  };
  const [Mtotal, setMtotal] = React.useState(0);
  const [Dtotal, setDtotal] = React.useState(0);
  const [Ptotal, setPtotal] = React.useState(0);
  const [change, setChange] = React.useState(false);
  let m = 0;
  let p = 0;
  let d = 0;
  const handleSubmit = () => {
    navigate("/Payment");
  };

  const { cartData } = useSelector((state) => {
    return state;
  });

  React.useEffect(() => {
    getData();
    getAddress();
    m = 0;
    p = 0;
    d = 0;
    cartData.map((el) => {
      console.log(el.qty);
      m += el.qty * el.mrp;
      p += el.qty * el.price;
      d += el.qty * Math.abs(el.mrp - el.price);
      setMtotal(m);
      setPtotal(p);
      setDtotal(d);
    });
  }, [change, cartData, id]);

  return (
    <div>
      <div className={styles.container}>
        <div>
          <h2>Choose Delivery Option(s)</h2>
          <div>
            shipment 1 out of 1
            <div className={styles.detail}>
              {data.map((el) => {
                return (
                  <div className={styles.card} key={el.id}>
                    <div>
                      <img src={el.image} alt="" />
                    </div>
                    <div>
                      <h6>{el.name}</h6>
                      <p>{el.bottle}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={styles.box}>
            <p>Choose a delivery speed</p>
            <div className={styles.inputflex}>
              <input type="radio" name="date" value="date" />
              <label for="date">Between 14-15 May</label>
            </div>
          </div>
          <p>
            *1mg Cash will be credited 7 days after your complete order is
            delivered in case of Products and in case of Lab Services 1mg Cash
            will be credited within 24 hours from the time of generation of test
            report. 1mg Cash will not be credited in case a return request is
            initiated for the order.
          </p>
          <p>
            **Coupon Discount value may change if the total order value changes.
          </p>
          <p>
            ***Items in your cart will always reflect the most recent price as
            compared to the prices in their product detail page.
          </p>
        </div>
        <div className={styles.box2}>
          <div className={styles.header}>
            <h2>Select Address</h2>
            <button>CHANGE</button>
          </div>
          <div className={styles.address}>
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
          </div>

          <div>
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
              <span className={styles.fontbold}>To be paid</span>
              <span className={styles.fontbold} id="cartSummaryToBePaid">
                ₹{Ptotal.toFixed(2)}
              </span>
            </div>
            <div className={styles.cartTotalSavings}>
              <span className={styles.totalSavingFont}>Total Savings</span>
              <span className={styles.totalSavingGreen}>
                ₹{Dtotal.toFixed(2)}
              </span>
            </div>
          </div>
          <button onClick={handleSubmit}>PROCEED TO PAYMENT</button>
        </div>
      </div>
      )
    </div>
  );
};

export default ProductsDelivery;
{
  /* <div>
<div className="cartSummary">
  <span>Item Total(MRP)</span>
  <span id="cartSummarymrp">₹{Mtotal}</span>
</div>
<div className="cartSummary">
  <span>Price Discount</span>
  <span id="cartSummaryDiscount">-₹{Dtotal.toFixed(2)}</span>
</div>
<hr />
<div className="cartSummary">
  <span>Shipping Fee</span>
  <span id="cartSummaryShippingFee">
    As per delivery address
  </span>
</div>
<hr />
<div className="cartSummary" id="fontbold">
  <span>To be paid</span>
  <span id="cartSummaryToBePaid">₹{Ptotal.toFixed(2)}</span>
</div>
<div id="cartTotalSavings">
  <span id="totalSavingFont">Total Savings</span>
  <span id="totalSavingGreen">₹{Dtotal.toFixed(2)}</span>
</div>
</div>


<div id="checkoutBox">
<div id="deliveryLocation">
  <div>Your delivery location</div>
  <div>
    <i
      className="material-icons location_icon"
      style={{ fontSize: "12px" }}
    >
      &#xe0c8;
    </i>
    <span>New Delhi</span>
  </div>
</div>
<div id="checkoutButton">
  <Link href="/AddAddress" id="a">
    CHECKOUT
  </Link>
</div>
</div> */
}
