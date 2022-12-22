import axios from "axios";
import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Login from "../../LoginSignup/Login";
import { get_data } from "../../Redux/actions";
import { AuthContext } from "../../Redux/Login_Auth";
import { Upper_div } from "../Styles/Product";

export const Product_div = ({
  image_url,
  name,
  desc,
  mrp,
  price,
  discount,
  off,
}) => {
  const { isvisible, setvisible } = useContext(AuthContext);
  const [show, setShow] = React.useState(false);

  const { token } = useSelector((state) => {
    // console.log(state);
    return state;
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleADD = () => {
    if (!token) {
      return setvisible(true);
    }

    axios
      .post(`https://mock-test-8th-json-server.herokuapp.com/api/Cart`, {
        qty: 1,
        image_url,
        name,
        desc,
        mrp,
        price,
        discount,
      })
      .then((data) => {
        get_data(dispatch);
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <Upper_div>
        <div>
          <div className="Swiper_image">
            <img src={image_url} alt="product_img" />
          </div>
          <div className="Image_div">
            <img src={image_url} alt="product_img" />
          </div>
        </div>
        <div>
          <div className="title">
            <h1>{name}</h1>
            <p>Adthera Consumer Brands Pvt Ltd</p>
          </div>
          <div className="highlights">
            <div>Product highlights</div>
            <div>
              <ul>
                <li>
                  These tablets are GMO-free, sugar-free, soy-free and
                  gluten-free
                </li>
                <li>These are GMP certified, vegetarian tablet</li>
                <li>Helps boost the immune function of the body</li>
                <li>Promotes glowing skin</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div className="price_info">
            <div>
              <img src="https://www.1mg.com/images/social_cue.svg" alt="" />
              <p>21 people bought this recently</p>
            </div>
            <div>
              <div className="price_div">
                <div>
                  <form className="price_form" action="/action_page.php">
                    <div>
                      <input
                        defaultChecked
                        type="radio"
                        name="fav_language"
                        value
                      />
                      <label htmlFor="30% off">
                        <span className="real_price">₹{price}</span>
                        <span className="cut_price">₹{mrp}</span>
                        <span className="discount">
                          {off ? off : discount} % off
                        </span>
                      </label>
                    </div>
                    <div className="care_plan_price">
                      <div>
                        <input type="radio" name="fav_language" value />
                      </div>
                      <label htmlFor="care_plan">
                        <span className="real_price">₹349</span>
                        <span className="cashback">
                          + free shipping and 5% Extra cashback with
                          <span className="care_plan_png">
                            <img
                              src="https://res.cloudinary.com/du8msdgbj/image/upload/v1613645053/marketing/phb2bz61etrdmuurfdoq.png"
                              alt=""
                            />
                          </span>
                        </span>
                      </label>
                    </div>
                  </form>
                </div>
                <p>Inclusive of all taxes</p>
              </div>
              <div className="choice_of">
                <select name="" className="tablets">
                  <option value="1">1 Bottle</option>
                  <option value="2">2 Bottle</option>
                  <option value="3">3 Bottle</option>
                  <option value="4">4 Bottle</option>
                  <option value="5">5 Bottle</option>
                  <option value="6">6 Bottle</option>
                  <option value="7">7 Bottle</option>
                  <option value="8">8 Bottle</option>
                  <option value="9">9 Bottle</option>
                  <option value="10">10 Bottle</option>
                  <option value="11">11 Bottle</option>
                  <option value="12">12 Bottle</option>
                  <option value="13">13 Bottle</option>
                  <option value="14">14 Bottle</option>
                  <option value="15">15 Bottle</option>
                  <option value="16">16 Bottle</option>
                  <option value="17">17 Bottle</option>
                  <option value="18">18 Bottle</option>
                  <option value="19">19 Bottle</option>
                  <option value="20">20 Bottle</option>
                  <option value="21">21 Bottle</option>
                  <option value="22">22 Bottle</option>
                  <option value="23">23 Bottle</option>
                  <option value="24">24 Bottle</option>
                  <option value="25">25 Bottle</option>
                  <option value="26">26 Bottle</option>
                  <option value="27">27 Bottle</option>
                  <option value="28">28 Bottle</option>
                  <option value="29">29 Bottle</option>
                  <option value="30">30 Bottle</option>
                </select>
                of 60 tablets
              </div>
              <div className="add_to_cart" onClick={handleADD}>
                <a
                  className="add_to_cart_anc"
                  data-auto-upload-prescription="true"
                >
                  <span>ADD TO CART</span>
                </a>
              </div>
            </div>
          </div>
          <div className="offer_container">
            <h2>Additional offers</h2>
            <div>
              <div>
                <div>
                  <img
                    src="https://onemg.gumlet.io/image/upload/v1558680358/vibatg4xwiuep6bhonzs.svg"
                    alt="additional_offer_flag"
                  />
                </div>
                <div>
                  <b>Mobikwik</b>: Pay with Mobikwik and get up to ₹500 cashback
                  on allopathy medicines. Get assured cashback of ₹100. Minimum
                  cart value for the offer is ₹800. Offer ends 5th May 2022.
                </div>
              </div>
              {show ? (
                <>
                  <div>
                    <div>
                      <img
                        src="https://onemg.gumlet.io/image/upload/v1558680358/vibatg4xwiuep6bhonzs.svg"
                        alt="additional_offer_flag"
                      />
                    </div>
                    <div>
                      <b>Special Offer</b>: Pay online (Wallet, Debit/Credit
                      Card &amp; Net Banking) and get extra 5% 1mgCash (up to
                      ₹25)
                    </div>
                  </div>
                  <div>
                    <div>
                      <img
                        src="https://onemg.gumlet.io/image/upload/v1558680358/vibatg4xwiuep6bhonzs.svg"
                        alt="additional_offer_flag"
                      />
                    </div>
                    <div>
                      <b>Airtel Payments Bank</b>: Pay with Airtel Payments Bank
                      and get flat ₹150 cashback on a minimum transaction of
                      ₹1000. Valid till 5th May 2022.
                    </div>
                  </div>
                  <div>
                    <div>
                      <img
                        src="https://onemg.gumlet.io/image/upload/v1558680358/vibatg4xwiuep6bhonzs.svg"
                        alt="additional_offer_flag"
                      />
                    </div>
                    <div>
                      <b>Freecharge PayLater | Wallet</b>: Get up to ₹200
                      cashback on your transaction via Freecharge Pay Later or
                      Wallet. The cashback will be in the form of Freecharge
                      gift instrument and will be credited within 72 hours of
                      purchase. Offer ends 5th May 2022.
                    </div>
                  </div>
                  <div>
                    <div>
                      <img
                        src="https://onemg.gumlet.io/image/upload/v1558680358/vibatg4xwiuep6bhonzs.svg"
                        alt="additional_offer_flag"
                      />
                    </div>
                    <div>
                      <b>Paytm Postpaid | Wallet</b>: Pay with Paytm Postpaid or
                      Paytm wallet on Tata 1mg for ₹999 or more and get 4000
                      cashback points. Offer ends 31st May 2022.
                    </div>
                  </div>
                </>
              ) : null}
            </div>
            <div
              className="AdditionalOffers__show_button"
              onClick={() => setShow(!show)}
            >
              <span>
                Show more
                <img
                  style={{
                    transform: show ? "rotateZ(0deg)" : "rotateZ(180deg)",
                  }}
                  src="https://onemg.gumlet.io/image/upload/v1571918379/t2plj2wvywoglfwll4cm_y7momq.svg"
                  alt="show_more"
                />
              </span>
            </div>
          </div>
        </div>
      </Upper_div>
    </>
  );
};
