import { Link } from "@mui/material";
import React from "react";
import { Product_slider } from "../../individual_product_page/Components/Product_slider";
import { Cart_div } from "../Style/Cart_style";
import Cart_product from "./Cart_product";
import { useDispatch, useSelector } from "react-redux";
import { get_data } from "../../Redux/actions";

export const Cart_com = () => {
  const [isSelected, setIsSelected] = React.useState(false);
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

  const dispatch = useDispatch();

  React.useEffect(() => {
    get_data(dispatch);
  }, []);

  React.useEffect(() => {
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
  }, [change, cartData]);

  return (
    <Cart_div>
      <div id="container">
        <div id="header">
          <Link href="/">
            <img id="logo" src="https://www.1mg.com/images/tata_1mg_logo.svg" />
          </Link>
          <form id="search">
            <input
              type="text"
              id="inputheader"
              placeholder="Search for Medicines and Health Products"
            />
            <div className="header_search_icon"></div>
          </form>
          <p id="help">Need Help?</p>
        </div>
        {cartData.length === 0 ? (
          <div id="Empty_cart">
            <div>
              <img
                src="https://www.1mg.com/images/online_consultation/empty-cart-icon.svg"
                alt="empty cart"
                height="40%"
              />
              <div id="oops">
                <b>Oops!</b>
              </div>
              <div id="text">Looks like there is no item in your cart yet.</div>
              <Link href="/">ADD MEDICINES</Link>
            </div>
          </div>
        ) : (
          <>
            <div id="body">
              <div id="bodyLeft">
                <p>Items NOT Requiring Prescription ({cartData.length})</p>
                {cartData.map((el) => {
                  return (
                    <Cart_product
                      key={el.id}
                      {...el}
                      varChange={change}
                      funcChange={setChange}
                    />
                  );
                })}
                <div className="smallbox0">
                  <p>Last Minute Buys</p>
                  <div className="smallbox1">
                    <Product_slider />
                  </div>
                </div>
              </div>
              <div id="bodyRight">
                <div>
                  <div id="carepadding">
                    <img
                      src="https://onemg.gumlet.io/image/upload/v1625657833/ekjkxafxcqqg0oinr3fu.png"
                      alt="Coupon Image"
                    />
                    <div id="saveLine">
                      <span>
                        <b>You can save extra ₹15 on this order</b>
                      </span>
                    </div>
                    <div className="member">
                      <b>Become a Member</b>
                    </div>
                    <div className="member">
                      Care plan membership ₹165 <strike>₹549</strike> / 3 months
                    </div>
                    <div id="carePlusButton">
                      <div>Know More</div>
                      <div>Add to cart</div>
                    </div>
                  </div>
                  <div style={{ padding: "7px 0" }}>
                    <div id="applyCoupon">
                      <img
                        src="https://res.cloudinary.com/du8msdgbj/image/upload/v1607414999/marketing/cvtnx1zh5we6atn3m7i0.svg"
                        alt=""
                      />
                      <div>
                        <div>Apply Coupon</div>
                        <div id="couponSymbol">
                          <img
                            src="https://www.1mg.com/images/forward-rebrand.svg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div id="checkHealth">
                    <div>Check the health of your vital organs now</div>
                    <div>
                      <img
                        src="https://img.1mg.com/images/info_icon.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div id="checkbox">
                    <div>
                      <input
                        type="checkbox"
                        id="checkboxsize"
                        onClick={() => setIsSelected(!isSelected)}
                      />
                    </div>
                    {isSelected ? (
                      <div>
                        <div>Thank you for your interest</div>
                        <div className="healthorganfont">
                          Our team will call you to book a slot as per your
                          convenience.
                        </div>
                        <div id="paysamplegreen">
                          Pay later on home sample collection
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div>
                          Book a full body checkup starting at only Rs 429
                        </div>
                        <div className="healthorganfont">
                          Get the tests done easily from your home. This package
                          will help you in identifying potential disorders and
                          deficiencies at an early stage.
                        </div>
                        <div id="paysamplegreen">
                          Pay later on home sample collection
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div>
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
                </div>
              </div>
            </div>
            <div id="footer">
              <div id="footerLeft">
                <hr />
                <p className="footertext">
                  Tata 1mg is a technology platform to facilitate transaction of
                  business. The products and services are offered for sale by
                  the sellers. The user authorizes the delivery personel to be
                  his agent for delivery of the goods. For details read
                  <a href="" id="termnCond">
                    terms and conditions.
                  </a>
                </p>
              </div>
              <div id="footrtRight">
                <hr />
                <p className="footertext">
                  <b className="footerstar">*</b> 1mg Cash will be credited 7
                  days after your complete order is delivered in case of
                  Products and in case of Lab Services 1mg Cash will be credited
                  within 24 hours from the time of generation of test report.
                  1mg Cash will not be credited in case a return request is
                  initiated for the order.
                </p>
                <p className="footertext">
                  <b className="footerstar">**</b> Coupon Discount value may
                  change if the total order value changes.
                </p>
                <p className="footertext">
                  <b className="footerstar">***</b> Items in your cart will
                  always reflect the most recent price as compared to the prices
                  in their product detail page.
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </Cart_div>
  );
};
