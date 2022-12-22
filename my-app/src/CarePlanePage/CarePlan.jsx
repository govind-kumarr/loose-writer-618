import React from "react";
import { Navbar_search } from "../Navbar/Components/Navbar_search";
// import LastFooter from "../Components/LastFooter";

export default function CarePlan() {
  return (
    <>
      <Navbar_search />
      <div>
        {/* upper img start */}
        <div
          style={{
            width: "100%",
            backgroundColor: "#f8f8f8",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          {/* All work inside in that */}
          <div
            style={{
              position: "relative",
              justifyContent: "space-between",
              display: "flex",
              padding: "30px",
              alignItems: "center",
              backgroundColor: "#fdf2e3",
              justifyContent: "center",
            }}
          >
            <div style={{ paddingLeft: "16px" }}>
              <div>
                <img src="https://onemg.gumlet.io/image/upload/v1625657833/ekjkxafxcqqg0oinr3fu.png" />
              </div>
              <div
                style={{
                  fontSize: "30px",
                  fontWeight: "700",
                  padding: "10px 0",
                  lineHeight: "37px",
                }}
              >
                Reduce your medical <br />
                expenses by HALF
              </div>
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  marginBottom: "40px",
                }}
              >
                Save for things that make you happy
              </div>
              <a style={{ display: "flex", alignSelf: "flex-start" }}>
                <div
                  style={{
                    background: "#ff6f61",
                    borderRadius: "45px",
                    padding: "10px 45px",
                    fontSize: "16px",
                    fontWeight: "700",
                    color: "#fff",
                    display: "flex",
                    alignSelf: "flex-start",
                  }}
                >
                  Explore plans
                </div>
              </a>
              <div
                style={{
                  fontSize: "16px",
                  lineHeight: "1.75em",
                  fontWeight: "400",
                  margin: "5px 0 0",
                }}
              >
                Plans starting Rs 46/month
              </div>
            </div>
            <div style={{ position: "relative", width: "35%" }}>
              <img
                style={{
                  maxWidth: "100%",
                  verticalAlign: "middle",
                  border: "0",
                  marginLeft: "50px",
                }}
                src="https://onemg.gumlet.io/image/upload/q_auto,f_auto/v1579675864/marketing/gek7gtlcjca85q0l3ees.jpg"
              />
            </div>
          </div>
        </div>
        {/* upper img ends */}
        {/* Benifit Part start */}
        <div
          style={{
            background: "#fff",
            borderBottom: "8px solid #f0f0f0",
            fontFamily: "Poppins, sans-serif",
            flexDirection: "column",
            display: "flex",
          }}
        >
          <div>
            <div style={{ borderBottam: "8px solid #f0f0f0" }}>
              <div
                style={{
                  fontSize: "40px",
                  color: "#2b2b2b",
                  fontWeight: "700",
                  textAlign: "center",
                  paddingBottom: "40px",
                  marginTop: "40px",
                }}
              >
                Benefits
              </div>
              <div style={{ flexDirection: "column" }}>
                <div style={{ flexDirection: "row", display: "flex" }}>
                  <div
                    style={{
                      width: "50%",
                      display: "flex",
                      marginLeft: "200px",
                    }}
                  >
                    <div>
                      <img
                        style={{ width: "80px", marginTop: "10px" }}
                        src="http://res.cloudinary.com/dusqx2w0c/image/upload/v1617168621/marketing/zby23g1o4u5pdp4imzan.png"
                      />
                    </div>
                    <div style={{ marginLeft: "20px", width: "340px" }}>
                      <h3>Save extra 7% on every order</h3>
                      <p>
                        Guaranteed savings over & above promotional offers.
                        Extra 2% off on all prescription medicines. Earn
                        additional 5% 1mgCash on all orders
                      </p>
                    </div>
                  </div>
                  <div style={{ width: "50%", display: "flex" }}>
                    <div>
                      <img
                        style={{ width: "80px", marginTop: "10px" }}
                        src="http://res.cloudinary.com/dusqx2w0c/image/upload/v1617168743/marketing/dmkbmj7zdcumqhvloswv.png"
                      />
                    </div>
                    <div style={{ marginLeft: "20px", width: "340px" }}>
                      <h3>Free Lab Test</h3>
                      <p>
                        Get a free CBC or HbA1C test or upgrade to any one of
                        our premium tests
                      </p>
                    </div>
                  </div>
                </div>
                <div style={{ flexDirection: "row", display: "flex" }}>
                  <div style={{ flexDirection: "row", display: "flex" }}>
                    <div
                      style={{
                        width: "50%",
                        display: "flex",
                        marginLeft: "200px",
                      }}
                    >
                      <div>
                        <img
                          style={{ width: "80px", marginTop: "10px" }}
                          src="http://res.cloudinary.com/dusqx2w0c/image/upload/v1617086307/marketing/jee7thstqouh0m4xflgp.png"
                        />
                      </div>
                      <div style={{ marginLeft: "20px", width: "340px" }}>
                        <h3>Introducing Rapid Delivery</h3>
                        <p>
                          Now get all your products delivered to you quicker
                          than before. Same day and next day delivery in
                          selected cities and expanding soon to all cities
                        </p>
                      </div>
                    </div>
                    <div
                      style={{
                        width: "50%",
                        display: "flex",
                        marginLeft: "180px",
                      }}
                    >
                      <div>
                        <img
                          style={{ width: "80px", marginTop: "10px" }}
                          src="http://res.cloudinary.com/dusqx2w0c/image/upload/v1617168913/marketing/viz4ybkh6wfq9sjbu4ze.png"
                        />
                      </div>
                      <div style={{ marginLeft: "20px", width: "340px" }}>
                        <h3>Early Sale Access</h3>
                        <p>
                          Be among the first ones to shop during our sale days.
                          Get even higher discounts and exclusive deals across
                          all categories
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ flexDirection: "row", display: "flex" }}>
                  <div style={{ flexDirection: "row", display: "flex" }}>
                    <div
                      style={{
                        width: "50%",
                        display: "flex",
                        marginLeft: "200px",
                      }}
                    >
                      <div>
                        <img
                          style={{ width: "80px", marginTop: "10px" }}
                          src="http://res.cloudinary.com/dusqx2w0c/image/upload/v1617168794/marketing/xrrbnozjyplezqml6crx.png"
                        />
                      </div>
                      <div style={{ marginLeft: "20px", width: "340px" }}>
                        <h3>No Shipping Charges</h3>
                        <p>
                          No shipping charges on orders above Rs.50. Unlimited
                          Free shipping on orders above Rs.500. Free shipping on
                          20 orders below Rs.500
                        </p>
                      </div>
                    </div>
                    <div
                      style={{
                        width: "50%",
                        display: "flex",
                        marginLeft: "180px",
                      }}
                    >
                      <div>
                        <img
                          style={{ width: "80px", marginTop: "10px" }}
                          src="http://res.cloudinary.com/dusqx2w0c/image/upload/v1617168863/marketing/ll8w1jwk0yjkbcx1dpcw.png"
                        />
                      </div>
                      <div style={{ marginLeft: "20px", width: "340px" }}>
                        <h3>Free E-Consultation</h3>
                        <p>
                          Get a free E-consultation from experts around 26
                          different specialities including dieticians and
                          nutritionist
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
        {/* Benifit Part end */}

        {/* Additional benifits start */}
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              background: "#fff",
              letterSpacing: "0.5px",
              position: "relative",
            }}
          >
            <div
              style={{
                fontSize: "30px",
                color: "#2b2b2b",
                fontWeight: "700",
                textAlign: "center",
                paddingBottom: "40px",
              }}
            >
              Additional Benefits
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "0 15%",
              }}
            >
              <div
                style={{
                  textAlign: "center",
                  width: "33.333%",
                  padding: "0 2%",
                }}
              >
                <div
                  style={{
                    paddingBottom: "15px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <img
                    style={{ width: "60px", height: "60px" }}
                    src="http://res.cloudinary.com/dusqx2w0c/image/upload/v1617169012/marketing/mqwi4hji0xmevi0leqxt.png"
                  />
                </div>
                <div>
                  <h3>FREE Health Monitoring</h3>
                  <p>
                    Digitally record & analyze your weight and blood sugar
                    readings over a period of time
                  </p>
                </div>
              </div>
              <div
                style={{
                  textAlign: "center",
                  width: "33.333%",
                  padding: "0 2%",
                }}
              >
                <div
                  style={{
                    paddingBottom: "15px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <img
                    style={{ width: "60px", height: "60px" }}
                    src="http://res.cloudinary.com/dusqx2w0c/image/upload/v1617169094/marketing/rciejxt8uupxvkdoztx1.png"
                  />
                </div>
                <div>
                  <h3>Priority Processing</h3>
                  <p>
                    Care Plan members enjoy priority processing of their orders.
                    As our premium members, your orders are prioritise by
                    pushing your prescriptions to the front of the line for
                    validation.
                  </p>
                </div>
              </div>
              <div
                style={{
                  textAlign: "center",
                  width: "33.333%",
                  padding: "0 2%",
                }}
              >
                <div
                  style={{
                    paddingBottom: "15px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <img
                    style={{ width: "60px", height: "60px" }}
                    src="http://res.cloudinary.com/dusqx2w0c/image/upload/v1617169138/marketing/q2xl4gwlyw55awctv1lk.png"
                  />
                </div>
                <div>
                  <h3>Premium Customer Support</h3>
                  <p>
                    Members would be entitled to our dedicated customer support
                    experts. We are committed to providing you with responsive
                    assistance and resolution. Your queries are our priority.
                    Fastest support to our premium members.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional benifits end */}

        {/* care plan payment page  start */}

        <div style={{ background: "#fefaf1", padding: "43px 24px 48px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: " 20px 15%",
            }}
          >
            <div
              style={{
                background: "#fff3e3",
                padding: "24px",
                justifyContent: "space-between",
                width: "40%",
              }}
            >
              <div>
                <img src="https://onemg.gumlet.io/image/upload/v1625657833/ekjkxafxcqqg0oinr3fu.png" />
                <div
                  style={{
                    fontSize: "30px",
                    fontWeight: "700",
                    lineHeight: "45px",
                    letterSpacing: "0",
                    padding: "8px 0",
                    color: "#131e5e",
                  }}
                >
                  More discounts, faster delivery and extra care
                </div>
                <div
                  style={{
                    fontSize: "18px",
                    fontWeight: "500",
                    color: "#131e5e",
                  }}
                >
                  Join now and enjoy all the benefits
                </div>
              </div>
              <div
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  color: "#131e5e",
                  paddingTop: "24px",
                  marginTop: "100px",
                }}
              >
                <div>Membership includes</div>
                <div>
                  <div
                    style={{
                      marginTop: "10px",
                      flexDirection: "row",
                      display: "flex",
                    }}
                  >
                    <img src="https://i.postimg.cc/T1cYdz3t/Fill-3-1.png" />
                    <div
                      style={{
                        marginLeft: "10px",
                        fontSize: "18px",
                        fontWeight: "500",
                        color: "#131e5e",
                      }}
                    >
                      1 Free lab test
                    </div>
                  </div>
                  <div
                    style={{
                      marginTop: "10px",
                      flexDirection: "row",
                      display: "flex",
                    }}
                  >
                    <img src="https://i.postimg.cc/T1cYdz3t/Fill-3-1.png" />
                    <div
                      style={{
                        marginLeft: "10px",
                        fontSize: "18px",
                        fontWeight: "500",
                        color: "#131e5e",
                      }}
                    >
                      1 Free E-consultation
                    </div>
                  </div>
                  <div
                    style={{
                      marginTop: "10px",
                      flexDirection: "row",
                      display: "flex",
                    }}
                  >
                    <img src="https://i.postimg.cc/T1cYdz3t/Fill-3-1.png" />
                    <div
                      style={{
                        marginLeft: "10px",
                        fontSize: "18px",
                        fontWeight: "500",
                        color: "#131e5e",
                      }}
                    >
                      All other benefits mentioned above
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ margin: "0 40px" }}>
              <div
                style={{
                  fontSize: "30px",
                  fontWeight: "600",
                  color: "#3b3b3b",
                }}
              >
                Choose a plan that’s right for you
              </div>
              <div style={{ weight: "400px" }}>
                <div
                  style={{
                    padding: "16px 0",
                    margin: "16px 0",
                    background: "#fff",
                    border: "2px solid #ff6f61",
                    boxShadow:
                      " 0 0 4px rgb(0 0 0 / 8%), 0 4px 4px rgb(0 0 0 / 8%)",
                    borderRadius: "8px",
                    padding: "10px",
                  }}
                >
                  <div style={{ flexGrow: "1" }}>
                    <div
                      style={{
                        marginTop: "10px",
                        flexDirection: "row",
                        display: "flex",
                      }}
                    >
                      <span style={{ fontweight: "600", display: "flex" }}>
                        <h2>3 months plan</h2>
                        <span
                          style={{
                            backgroundColor: "#ff6f61",
                            color: "#fff",
                            fontSize: "12px",
                            fontWeight: "900",
                            padding: "2px 6px",
                            marginLeft: "4px",
                            borderRadius: "4px",
                            height: "20px",
                            marginTop: "25px",
                          }}
                        >
                          New
                        </span>
                      </span>
                    </div>
                    <div style={{ fontSize: "48px" }}>₹ 165</div>
                  </div>
                  <div
                    style={{
                      alignItems: "center",
                      color: "#767676",
                      marginTop: "20px",
                    }}
                  >
                    <span>₹55/month</span>
                  </div>
                </div>
                <div
                  style={{
                    padding: "16px 0",
                    margin: "16px 0",
                    background: "#fff",
                    border: "2px solid #ff6f61",
                    boxShadow:
                      " 0 0 4px rgb(0 0 0 / 8%), 0 4px 4px rgb(0 0 0 / 8%)",
                    borderRadius: "8px",
                    padding: "10px",
                  }}
                >
                  <div style={{ flexGrow: "1" }}>
                    <div
                      style={{
                        marginTop: "10px",
                        flexDirection: "row",
                        display: "flex",
                      }}
                    >
                      <span style={{ fontweight: "600", display: "flex" }}>
                        <h2>6 months plan</h2>
                      </span>
                    </div>
                    <div style={{ fontSize: "48px" }}>₹ 275</div>
                  </div>
                  <div
                    style={{
                      alignItems: "center",
                      color: "#767676",
                      marginTop: "20px",
                    }}
                  >
                    <span>₹46/month</span>
                  </div>
                </div>
                <div
                  style={{
                    margin: "auto",
                    width: "100%",
                    padding: "10px 0",
                    alignSelf: "flex-end",
                  }}
                >
                  <div
                    style={{
                      borderRadius: "45px",
                      justifyContent: "center",
                      backgroundColor: "#ff6f61",
                      padding: "10px",
                      textAlign: "center",
                    }}
                  >
                    <span
                      style={{
                        fontWeight: "bold",
                        fontSize: "20px",
                        color: "white",
                      }}
                    >
                      Join now
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* care plan payment page end */}
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
          style={{ minHeight: "400px", marginTop: "20px" }}
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "30px",
                    fontWeight: "700",
                    paddingBottom: "20px",
                  }}
                >
                  See what our member are saying
                </div>
                <div
                  style={{
                    fontSize: "16px",
                    paddingBottom: "15px",
                    width: "400px",
                    alignSelf: "center",
                  }}
                >
                  Mujhe es plan mein dawaiyon pe discounts ke saath saath HbA1c
                  test bhi milta hai, matlab mai bahar karata hu HbA1c toh mera
                  250 rupaye lag jate hai aur ye poora diabetes care plan mujhe
                  200 rupaye ka padta hai. Sasta toh hai hi, dusra agar ek hi
                  test kara lenge toh bhi humara poora paisa vasool ho gaya.
                  Esmein minimum purchase ka bhi koi limit nahi hai, shipping
                  charge nahi lagega, aur aapko discount jo hai wo milega hi
                  milega.
                </div>
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "100%",
                    fontSize: "20px",
                    fontWeight: "700",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    marginBottom: "10px",
                    background: "#000",
                    alignSelf: "center",
                  }}
                >
                  s
                </div>
                <div style={{ fontSize: "14px", fontWeight: "700" }}>
                  Sonu Shukla
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "30px",
                    fontWeight: "700",
                    paddingBottom: "20px",
                  }}
                >
                  See what our member are saying
                </div>
                <div
                  style={{
                    fontSize: "16px",
                    paddingBottom: "15px",
                    width: "400px",
                    alignSelf: "center",
                  }}
                >
                  Har purchase pe itna discount kahi nahi milta, pharmacy wale
                  bhi 10% discount hi dete hai, aur baki jangah bas first
                  purchase mein 40% discount dete hai. With this plan I get free
                  delivery on every item, HbA1c tests, and e-consultation. HbA1c
                  test ghar baithe baithe ho jata hai aur reports pe free
                  consultation mil jati hain. Waise tests karaoge toh bhi itne
                  paise toh lag hee jaayenge! Otherwise 1200 rs lagao doctor ke
                  paas jaane mein aur woh wahi dawaiyyan repeat kar deta tha.
                </div>
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "100%",
                    fontSize: "20px",
                    fontWeight: "700",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    marginBottom: "10px",
                    background: "#000",
                    alignSelf: "center",
                  }}
                >
                  R
                </div>
                <div style={{ fontSize: "14px", fontWeight: "700" }}>
                  Rakesh Kumar Gupta
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "30px",
                    fontWeight: "700",
                    paddingBottom: "20px",
                  }}
                >
                  See what our member are saying
                </div>
                <div
                  style={{
                    fontSize: "16px",
                    paddingBottom: "15px",
                    width: "400px",
                    alignSelf: "center",
                  }}
                >
                  I use DCP for tests and purchase of other items. There is free
                  delivery on every product with amazing discounts. Also, if I
                  go for the test outside, it would definitely cost me more. Ye
                  bhi hai ki check ho jaata hai aapka.
                </div>
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "100%",
                    fontSize: "20px",
                    fontWeight: "700",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    marginBottom: "10px",
                    background: "#000",
                    alignSelf: "center",
                  }}
                >
                  A
                </div>
                <div style={{ fontSize: "14px", fontWeight: "700" }}>
                  Ajay yadav
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "30px",
                    fontWeight: "700",
                    paddingBottom: "20px",
                  }}
                >
                  See what our member are saying
                </div>
                <div
                  style={{
                    fontSize: "16px",
                    paddingBottom: "15px",
                    width: "400px",
                    alignSelf: "center",
                  }}
                >
                  The Diabetes Care Plan from 1 Mg makes Diabetes care much more
                  affordable for Diabetics. It is well thought out comprehensive
                  plan and is the best in className Diabetic plan in the
                  marketplace today. I have saved some 12-15 thousand using
                  diabetes plan in the first 3 months.
                </div>
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "100%",
                    fontSize: "20px",
                    fontWeight: "700",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    marginBottom: "10px",
                    background: "#000",
                    alignSelf: "center",
                  }}
                >
                  S
                </div>
                <div style={{ fontSize: "14px", fontWeight: "700" }}>
                  Shakti Yadav
                </div>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span
              style={{ fontSize: "66px", color: "black" }}
              aria-hidden="true"
            >
              «
            </span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span
              style={{ fontSize: "66px", color: "black" }}
              aria-hidden="true"
            >
              »
            </span>
          </a>
        </div>
        {/* <LastFooter /> */}
      </div>
    </>
  );
}
