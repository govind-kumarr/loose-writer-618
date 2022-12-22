import React from "react";
import { Product_info } from "../Styles/Product";
import Small_product from "./Small_product";
import { Link } from "react-router-dom";
import { Product_slider } from "./Product_slider";
import { Products_data } from "../Slider_products/Slider_product";

export const Product_info_component = ({
  image_url,
  name,
  desc,
  mrp,
  price,
  discount,
}) => {
  const random = Math.floor(Math.random() * (9 - 0)) + 0;

  return (
    <Product_info>
      <div>
        <div>
          <div className="Product_Description">
            <div className="Description_heading">
              <h2>
                Information about Zingavita Vitamin C Amla Extract 1000mg Tablet
              </h2>
            </div>
            <div className="Description_content">
              <b>Zingavita Vitamin C Amla Extract 1000mg Tablet</b>
              <br />
              When you glow on the outside you feel it on the inside. That’s
              just what our vitamin C supplements do for you - make you feel
              good inside out. Their perfect blend of vitamin c sourced
              carefully from amla, along with all the goodness of zinc keep your
              immune system fighting fit and keep your skin gorgeous and
              glowing.
              <br />
              <br />
              <b>Key Ingredients:</b>
              <ul>
                <li>Amla</li>
              </ul>
              <ul>
                <li>Vitamin C</li>
              </ul>
              <ul>
                <li>Zinc</li>
              </ul>
              <br />
              <b>Key Benefits:</b>
              <ul>
                <li>Helps boost the immune function of the body</li>
              </ul>
              <ul>
                <li>Supplies the body with plenty vitamin C</li>
              </ul>
              <ul>
                <li>Full of antioxidant action</li>
              </ul>
              <ul>
                <li>Promotes glowing skin</li>
              </ul>
              <br />
              <b>Directions For Use:</b>
              <br />
              Consume 1 tablet daily or as prescribed by your healthcare
              professional to avail its multiple benefits.
              <br />
              <br />
              <b>Safety Information:</b>
              <ul>
                <li>Do not exceed stated recommended daily dosage</li>
              </ul>
              <ul>
                <li>Store this product out of reach of children</li>
              </ul>
              <ul>
                <li>
                  It is not for medicinal use, it does not treat, cure or
                  diagnose any ailments or diseases
                </li>
              </ul>
              <ul>
                <li>
                  This product is not to be consumed by pregnant, lactating, and
                  nursing women or by a person having medical condition
                </li>
              </ul>
            </div>
          </div>
          <div className="Similar_Products">
            <h2>Customers who bought this item also bought</h2>
            <div>
              <Product_slider />
            </div>
          </div>
          <div className="SocialShare">
            <h2 className="SocialShare__shareHeader___2_naD">
              Want to share the information?
            </h2>
            <div>
              <div>
                <img
                  src="https://onemg.gumlet.io/image/upload/a_ignore,w_24,h_24,c_fit,q_auto,f_auto/v1594095538/wzmehfprlv7nok1vphbq.png"
                  alt="Share on Facebook"
                />
              </div>
              <div>
                <img
                  src="https://onemg.gumlet.io/image/upload/a_ignore,w_24,h_24,c_fit,q_auto,f_auto/v1594095547/ik3qbop3ftjmwm5knywz.png"
                  alt="Share on LinkedIn"
                />
              </div>
              <div>
                <img
                  src="https://onemg.gumlet.io/image/upload/a_ignore,w_24,h_24,c_fit,q_auto,f_auto/v1594095541/lxob0wod0ovabskj8zgz.png"
                  alt="Share on Twitter"
                />
              </div>
            </div>
          </div>
          <div className="other_info">
            <div className="OtcPage_title">Other Information</div>
            <ul>
              <li style={{ padding: "2px 0", fontSize: "12px" }}>
                <span style={{ color: "#9e9e9e" }}>
                  Cash on delivery available
                </span>
              </li>
            </ul>
            <div className="Manufacturer">
              <h3>Manufacturer/Marketer address</h3>
              <div>
                Adthera Consumer Brands Pvt Ltd, Plot No 63, Rai Industrial
                Area, HSIIDC, Sonipat, Haryana-131029
              </div>
            </div>
          </div>
          <div className="license">
            Country of origin: India
            <br />
            <br />
            <b>Expires on or after: </b>
            February, 2023
            <br />
            <br />A<a href="">licensed vendor partner</a>
            from your nearest location will deliver Zingavita Vitamin C Amla
            Extract 1000mg Tablet. Once the pharmacy accepts your order, the
            details of the pharmacy will be shared with you.
          </div>
        </div>
        <div>
          <div className="Frequently_bought_together">
            <div>Frequently bought together</div>
            <Small_product
              data={{ image_url, name, desc, mrp, price, discount }}
            />
            <div className="style__plus">
              <img src="https://www.1mg.com/images/add.png" alt="" />
            </div>
            <Small_product
              data={Products_data[random]}
            />
            <hr />
            <div className="total_div">
              <div>
                <span className="style__total-price_title">TOTAL PRICE</span>
                <br />
                <span className="style__total-price_price">₹{price + Products_data[random].price}</span>
              </div>
              <div className="add_both_to_cart">
                <a
                  className="add_both_to_cart_anc"
                  data-auto-upload-prescription="true"
                  href=""
                >
                  <span>ADD BOTH TO CART</span>
                </a>
              </div>
            </div>
          </div>
          <div className="Health_packages">
            <div>
              <div className="text_div">
                <span>Stressful life?</span>
                <br />
                <span>Stay on top of your Health with our</span>
              </div>
              <div>
                <img
                  src="https://onemg.gumlet.io/Preventive_Health_Package_yaejrz.png?format=auto"
                  alt=""
                />
              </div>
            </div>
            <span>
              <b>Preventive Health Packages</b>
            </span>
            <div className="LabTests__content-ab___3C_cA">
              <div>
                <a
                  href=""
                  className="button-text btn btn-primary LabTests__link-ab___2rhi0"
                >
                  BOOK A LAB TEST ONLINE
                </a>
              </div>
            </div>
          </div>
          <div className="consult_a_doc">
            <div>
              <Link to="/AskDoctor" className="button-text">
                <div>
                  <img
                    src="https://onemg.gumlet.io/image/upload/v1573133938/Doctor_xqon4h.png"
                    alt="consult doctor"
                    className="ConsultDoctor__consult-image___2KmRj"
                  />
                </div>
              </Link>
            </div>
            <div className="ConsultDoctor__content___fLG-z">
              <a
                href="/AskDoctor"
                className="button-text btn btn-secondary ConsultDoctor__link___1K0v7"
              >
                CONSULT A DOCTOR ONLINE
              </a>
            </div>
          </div>
          <div className="icon_container">
            <ul className="OtcIcons__icon-list">
              <li className="OtcIcons__icon-list-item">
                <div>
                  <img
                    src="https://1mgstaticfiles.s3.amazonaws.com/skuicons/star.png"
                    alt="icon"
                  />
                  <div>Authentic Products</div>
                </div>
              </li>
              <li className="OtcIcons__icon-list-item">
                <div>
                  <img
                    src="https://1mgstaticfiles.s3.amazonaws.com/skuicons/group.png"
                    alt="icon"
                  />
                  <div>Great Savings</div>
                </div>
              </li>
              <li className="OtcIcons__icon-list-item">
                <div>
                  <img
                    src="https://1mgstaticfiles.s3.amazonaws.com/skuicons/delivery.png"
                    alt="icon"
                  />
                  <div>Home Delivery</div>
                </div>
              </li>
            </ul>
          </div>
          <div className="Content_Details">
            <div>Content Details</div>
            <div>
              <div>Last updated:</div>
              <div>02 May 2022 | 02:56 PM (IST)</div>
            </div>
            <div>
              <div>
                <div>
                  <img
                    src="https://onemg.gumlet.io/image/upload/editorial_seal_en_f3fj4w.png"
                    alt=""
                  />
                </div>
                <div>
                  <h3>Want to know more?</h3>
                  <a href="">Read Our Editorial Policy</a>
                </div>
              </div>
            </div>
            <div>
              <div>
                <img
                  src="https://res.cloudinary.com/du8msdgbj/image/upload/v1571315343/cross_with_tag_1_vsxphe.svg"
                  alt=""
                />
              </div>
              <div>
                <h3>Have issue with the content?</h3>
                <a href="">Report Problem</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Product_info>
  );
};
