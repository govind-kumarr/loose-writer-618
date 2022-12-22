import React, { useContext } from "react";
import { Nav } from "../Styleing/Navbar_Styled";
import Advertisement from "./Advertisement";
import { Navbar_search } from "./Navbar_search";
import { Navbar_dropdown } from "./Navbar_dropdown";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { get_data, Logout } from "../../Redux/actions";
import Login from "../../LoginSignup/Login";
import { AuthContext } from "../../Redux/Login_Auth";

export const Navbar = () => {
  const { isvisible, setvisible, setShow } = useContext(AuthContext);
  const nevigate = useNavigate();
  const { cartData, token, toggleAuth } = useSelector((state) => {
    return state;
  });
  const dispatch = useDispatch();

  React.useEffect(() => {
    get_data(dispatch);
  }, []);

  return (
    <>
      <Nav>
        <div className="navbar">
          <div className="navbarlogo_tabs">
            <div id="logo">
              <Link to="/">
                <img
                  src="https://www.1mg.com/images/tata_1mg_logo.svg"
                  alt="TATA 1mg"
                  className="logo_img"
                />
              </Link>
            </div>
            <div id="tabs">
              <div>
                <Link to="/">MEDICINES</Link>
              </div>
              <div>
                <Link to="/LabTests">LAB TESTS</Link>
                <div className="reddiv Safe_div">
                  <div>SAFE</div>
                </div>
              </div>
              <div>
                <Link to="/AskDoctor">ASK DOCTOR</Link>
              </div>
              <div>
                <Link to="/Covid">COVID-19</Link>
              </div>
              <div>
                <Link to="/Ayurveda">AYURVEDA</Link>
              </div>
              <div>
                <Link to="/CarePlan">CARE PLAN</Link>
                <div className="reddiv">SAVE MORE</div>
              </div>
            </div>
          </div>
          <div id="loginSignup">
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              {token ? (
                <div className="userProfile">
                  <div className="styles__profile-menu___1m4r-">
                    <ul className="styles__profile-links___3za_6">
                      <li className="styles__link___xWDD5">Hi Welcome User</li>
                      <li className="styles__link___xWDD5">
                        <a
                          href=""
                          rel="nofollow"
                          data-auto-profile-view-profile="true"
                        >
                          <span>View Profile</span>
                        </a>
                      </li>
                      <li className="styles__link___xWDD5">
                        <a
                          href=""
                          rel="nofollow"
                          data-auto-profile-order-history="true"
                        >
                          <span>My Orders</span>
                        </a>
                      </li>
                      <li className="styles__link___xWDD5">
                        <a
                          href=""
                          rel="nofollow"
                          data-auto-profile-reorder="true"
                        >
                          <span>Previously Ordered Items</span>
                          <span className="styles__tag-new___10AJC">NEW</span>
                        </a>
                      </li>
                      <li className="styles__link___xWDD5">
                        <a href="" data-auto-profile-labs="true">
                          <span>My Lab Tests</span>
                        </a>
                      </li>
                      <li className="styles__link___xWDD5">
                        <a
                          href=""
                          rel="nofollow"
                          data-auto-profile-consultation="true"
                        >
                          <span>My Consultations</span>
                        </a>
                      </li>
                      <li className="styles__link___xWDD5">
                        <a
                          href=""
                          rel="nofollow"
                          data-auto-profile-order-history="true"
                        >
                          <span>My Health Records</span>
                          <span className="styles__tag-new___10AJC">NEW</span>
                        </a>
                      </li>
                      <li className="styles__link___xWDD5">
                        <a href="">
                          <span>Manage Payments</span>
                        </a>
                      </li>
                      <li className="styles__link___xWDD5">
                        <a href="">
                          <span className="styles__text-tagged___t9Qbh">
                            Care Plan
                          </span>
                        </a>
                      </li>
                      <li className="styles__link___xWDD5">
                        <a href="" rel="nofollow" data-auto-profile-cash="true">
                          <div className="styles__cash___2FAkp">
                            <div>
                              <div>NeuCoins</div>
                            </div>
                            <div className="styles__cash-number___3abO2">0</div>
                          </div>
                        </a>
                      </li>
                      <li className="styles__link___xWDD5">
                        <a
                          onClick={() => {
                            dispatch(Logout());
                          }}
                          href=""
                          data-auto-profile-logout="true"
                        >
                          <span>Logout</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                <>
                  <a
                    onClick={() => {
                      setShow(true);
                      setvisible(true);
                    }}
                    className="logandsign"
                  >
                    {/* <Login show={true} /> */}
                    Login
                  </a>
                  |
                  <a
                    onClick={() => {
                      setShow(false);
                      setvisible(true);
                    }}
                    className="logandsign"
                  >
                    {/* <Login show={false} /> */}
                    Sign Up
                  </a>
                </>
              )}
            </div>
            <div>Offers</div>
            <div className="cart_icon">
              <div
                className="cart_svg"
                onClick={() => {
                  nevigate("/Cart");
                }}
              >
                <ul className="Cart_Counter_PopUp">
                  <li>
                    <span className="CartCounterPopUp__summary___1Ff-x">
                      Order Summary
                    </span>
                    <span className="CartCounterPopUp__count___3cYl6">
                      {cartData.length} Item
                    </span>
                  </li>
                  <li>
                    <Link
                      to="/Cart"
                      data-auto-proceed-cart="true"
                      data-attribute="cart-counter-popup"
                    >
                      <span className="CartCounterPopUp__proceed___vJFRh">
                        PROCEED TO CART
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="count">{cartData.length}</div>
            </div>
            <div style={{ fontSize: "14px" }}>Need Help ?</div>
          </div>
        </div>
        {/* <Navbar_search /> */}
        {/* <Navbar_dropdown /> */}
        {/* <Advertisement /> */}
      </Nav>
    </>
  );
};
{
}
