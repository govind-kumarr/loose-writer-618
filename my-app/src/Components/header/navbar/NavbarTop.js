//Importing dependencies
import React from "react";
import styled from "styled-components";
import { useContext } from "react";

//importing important components/functions

//Components
import { Link } from "react-router-dom";

//Functions
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

//Reducer Functions
import { get_data, Logout } from "../../../Redux/actions";

//Contexts
import { AuthContext } from "../../../Redux/Login_Auth.jsx";

const NavbarTop = () => {
  const { setvisible, setShow } = useContext(AuthContext);
  const nevigate = useNavigate();
  const { cartData, token } = useSelector((state) => {
    return state.AppReducer;
  });
  const dispatch = useDispatch();

  React.useEffect(() => {
    get_data(dispatch);
  }, []);
  return (
    <Wrapper>
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
              <Link to="/Products">PRODUCTS</Link>
            </div>
            <div>
              <Link to="/"  className="TextOnlyForSmallView OnlyForLaptopView">MEDICINES</Link>
            </div>
            <div>
              <Link to="/LabTests" >LAB TESTS</Link>
            </div>
            <div >
              <Link to="/AskDoctor" className="OnlyForLaptopView" >ASK DOCTOR</Link>
            </div>
            <div>
              <Link to="/login-admin" >ADMIN-PANEL</Link>
            </div>
            <div>
              <Link to="/Covid" className="OnlyForLaptopView">COVID-19</Link>
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
          <div className="OnlyForLaptopView">Offers</div>
          <div className="cart_icon ">
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
                    {/* {cartData.length} Item */}
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
            {/* <div className="count">{cartData.length}</div> */}
          </div>
          <div className="OnlyForLaptopView" style={{ fontSize: "14px" }}>Need Help ?</div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  
 * {
    font-family: "Clear Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  .navbar {
    display: flex;
    width: 100%;
    height: fit-content;
    // margin-top: -8px;
    justify-content: space-between;
    border-bottom: 1px solid #f1f4f6;
    // padding: 10px;
    background: #ffffff;
  }

  .navbarlogo_tabs {
    display: flex;
    align-items: center;
    /* border: red solid; */
    height: fit-content;
  }



  #logo {
    position: relative;
    min-height: 30px;
    padding-left: 15px;
    padding-right: 15px;
    /* border: red solid; */
  }

  .logo_img {
    height: 35px;
  }

  #tabs {
    display: flex;
    gap: 15px;
    color: #212121;
    box-sizing: border-box;
    padding: 13px 14px 14px;
    box-sizing: border-box;
  }

  #tabs > div {
    display: flex;
    gap: 5px;
    align-items: center;
    font-size: 15px;
    font-weight: 700;
    cursor: pointer;
  }

  #tabs > div > a {
    text-decoration: none;
    color: #212121;
  }

  #tabs > div > a:hover {
    color: #ff6f61;
  }

  .reddiv {
    height: 16px;
    box-sizing: border-box;
    display: flex;
    background-color: #ff6f61;
    color: white;
    font-size: 11px;
    align-items: center;
    padding: 0 3px;
    border-radius: 2px;
  }

  .Safe_div {
    > div {
      position: relative;
      transform: translateX(-31px);
      width: 0px;
    }
  }

  .Safe_div::before {
    content: "";
    position: relative;
    background-color: #ff6f61;
    left: -3px;
    width: 28px;
    height: 100%;
    text-align: center;
    margin-left: 4px;
    border-radius: 2px;
    animation: styles__pulse___1AYvD 1.6s infinite;
  }

  .Safe_div::after {
    content: "";
    position: absolute;
    background-color: #ff6f61;
    left: 332px;
    width: 35px;
    height: 16px;
    text-align: center;
    margin-left: 4px;
    border-radius: 2px;
    animation: styles__pulse___1AYvD 1.6s infinite;
    animation-delay: 0.2s;
  }

  @keyframes styles__pulse___1AYvD {
    0% {
      transform: scale(1);
      opacity: 0.6;
    }
    70% {
      transform: scale(1.5);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 0;
    }
  }

  #loginSignup {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: #212121;
    font-size: 14px;
    padding-right: 5px;
    text-align: right;
    gap: 25px;
  }

  #loginSignup > * {
    cursor: pointer;
  }

  .cart_icon {
    height: 24px;
  }

  .cart_svg {
    background: url(https://res.cloudinary.com/du8msdgbj/image/upload/v1570101941/cart-icon-rebrand_vp4k0f.svg)
      no-repeat;
    width: 23px;
    height: 23px;
    background-position: 50%;

    :hover > ul {
      display: block;
    }

    > ul {
      display: none;
      padding: 0;
      position: relative;
      width: 250px;
      z-index: 22;
      text-align: left;
      top: 20px;
      background-color: #fff;
      box-shadow: 0 2px 4px 0 rgb(0 0 0 / 50%);
      right: 200px;
      cursor: pointer;
      margin: 0;
      color: rgba(0, 0, 0, 0.87);

      > li:first-child {
        border-bottom: 1px solid #dbdbdb;
        font-weight: 700;
        color: rgba(0, 0, 0, 0.87);
      }

      > li:last-child {
        display: flex;
        justify-content: center;
        margin-bottom: 12px;

        > a {
          text-decoration: none;
          color: #ff6f61;
        }
        > a > span {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          font-size: 14px;
          font-weight: 700;
          color: #ff6f61;
        }
      }

      > li {
        padding: 5px 15px;
        line-height: 27px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
  }

  .Cart_Counter_PopUp {
  }

  .count {
    position: relative;
    font-size: 14px;
    background: #ff6f61;
    color: #fff;
    width: 20px;
    height: 18px;
    line-height: 18px;
    border-radius: 5px;
    box-shadow: 0 0 1px #333;
    right: -19px;
    top: -30px;
    text-align: center;
  }

  .logandsign {
    text-decoration: none;
    color: #212121;
    font-size: 13px;
  }

  .userProfile {
    background: url(https://res.cloudinary.com/du8msdgbj/image/upload/v1571139390/profile-rebrand_aboy0q.svg)
      no-repeat;
    background-position: center center;
    width: 22px;
    height: 26px;

    :hover > div {
      display: block;
    }

    > div {
      display: none;
      position: absolute;
      top: 30px;
      right: 50px;
      z-index: 5000;
      background-color: #fff;
      width: 250px;
      box-shadow: 0 2px 4px 0 rgb(0 0 0 / 50%);

      > ul {
        padding: 0;
        font-weight: 400;
        font-size: 14px;

        > li {
          list-style-type: none;
          text-align: left;
          padding: 5px 15px;
          display: block;
          line-height: 30px;
          font-weight: 700;
          color: rgba(72, 72, 72, 0.87);

          > a {
            text-decoration: none;
            color: rgba(72, 72, 72, 0.87);

            > div {
              display: flex;
              justify-content: space-between;

              > div:nth-of-type(2) {
                color: #ff6f61;
                opacity: 0.87;
              }
            }
          }
        }

        > li:nth-of-type(1) {
          border-bottom: 1px solid #dbdbdb;
          font-size: 16px;
        }
      }
    }
  }

  @media screen and (max-width: 800px) {
    .OnlyForLaptopView {
      display: none;
    }

    #tabs > div{
      font-size:9px;
      
          }

  }


`;
export default NavbarTop;
