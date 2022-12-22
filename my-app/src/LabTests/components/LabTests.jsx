import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper";
import "swiper/css/bundle";

import "./LabTests.modules.css";
import { OurHappyCustomers } from "./OurHappyCustomers";
import FeaturedLabs from "./FeaturedLabs";
import data from "./FeatLabsdata";
import dataa from "./SatisfiedLabPartnersCardsdata";
import SatisfiedLabPartnersCards from "./SatisfiedLabPartnersCards";
import { Navbar_search } from "../../Navbar/Components/Navbar_search";

function LabTests() {
  return (
    <>
      <Navbar_search />
      <div className="labtests">
        {/* slide lab tests */}
        <div className="slidelabtestswrap">
          <div className="slidelabtests">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img
                  alt=""
                  src="https://onemg.gumlet.io/assets/fb083710-cd0d-11ec-aade-023cc772570e.png?format=auto"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  alt=""
                  src="https://onemg.gumlet.io/assets/ba333c52-cd0e-11ec-ae90-0a22309797fc.png?format=auto"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  alt=""
                  src="https://onemg.gumlet.io/assets/330960d6-cd0d-11ec-aade-023cc772570e.png?format=auto"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  alt=""
                  src="https://onemg.gumlet.io/assets/5f8f390e-cd0e-11ec-aade-023cc772570e.png?format=auto"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  alt=""
                  src="https://onemg.gumlet.io/assets/d0dffe6a-bb0a-11ec-b377-0259392176f8.jpg?format=auto"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  alt=""
                  src="https://onemg.gumlet.io/assets/7dd30f5a-c56e-11ec-9f0f-0a22309797fc.png?format=auto"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  alt=""
                  src="https://onemg.gumlet.io/assets/13eaee4a-b980-11ec-b68b-0a22309797fc.png?format=auto"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  alt=""
                  src="https://onemg.gumlet.io/assets/ba333c52-cd0e-11ec-ae90-0a22309797fc.png?format=auto"
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="labtestswrap">
            <h2>Lab Test From The Comfort Of Your Home</h2>
            <span>
              50,00,000+ lab tests booked | 20,00,000+ satisfied customers
            </span>
            <div className="labteststopics">
              <div className="labtop">
                <div>
                  <img
                    alt=""
                    src="https://onemg.gumlet.io/Safe_38x38_labs_oe5ieq.png?format=auto"
                  />
                </div>
                <div>100% Safe &amp; Hygienic</div>
              </div>
              <div className="labtop">
                <div>
                  <img
                    alt=""
                    src="https://onemg.gumlet.io/new_color_images/Lab_delivery_2x.png?format=auto"
                  />
                </div>
                <div>Home Sample Pick Up</div>
              </div>
              <div className="labtop">
                <div>
                  <img
                    alt=""
                    src="https://onemg.gumlet.io/new_color_images/Lab_online_report_2x.png?format=auto"
                  />
                </div>
                <div>View Reports Online</div>
              </div>
              <div className="labtop">
                <div>
                  <img
                    alt=""
                    src="https://onemg.gumlet.io/new_color_images/Lab_doctor_2x.png?format=auto"
                  />
                </div>
                <div>Free Doctor Consultation</div>
              </div>
              <div className="labtop">
                <div>
                  <img
                    alt=""
                    src="https://onemg.gumlet.io/new_color_images/Lab_offer_2x.png?format=auto"
                  />
                </div>
                <div>Best Prices Guaranteed</div>
              </div>
            </div>
            <button className="btnpop">VIEW POPULAR PACKAGES</button>
          </div>
        </div>

        {/* Popular tests / Book a Lab Test */}
        <div className="popwrap">
          <h2>Popular Tests</h2>
          <div className="healthvisitwrap">
            <div className="health">
              {/* health symbol and heading */}
              <div className="healthsymbheading">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="38"
                    height="38"
                    viewBox="0 0 38 38"
                  >
                    <g
                      fill="none"
                      fillRule="evenodd"
                      transform="translate(1 1)"
                    >
                      <circle
                        cx="18"
                        cy="18"
                        r="18"
                        fill="#FFFCF8"
                        stroke="#FFFFFF"
                      ></circle>
                      <g
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path
                          fill="#FFF"
                          d="M10.945 17.814v7.067c0 .721.574 1.309 1.284 1.309h4.11v-5.23h3.258v5.23h4.124c.71 0 1.286-.588 1.286-1.309v-7.067m1.943 0L17.975 9.05 9 17.814"
                        ></path>
                        <path d="M25.146 13.268v-1.655c0-.722-.574-1.309-1.285-1.309H22.35"></path>
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="healthhead">HEALTH TEST AT YOUR HOME</div>
              </div>
              {/* health topics */}
              <div className="healthtopics">
                <div className="twoflex">
                  <div className="svgghead">
                    <div className="svgg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                      >
                        <g fill="#212121" fillRule="evenodd">
                          <path d="M17.5 9.017h.01-.01zM8.999 1C4.595 1 1.008 4.579 1 8.985.991 13.396 4.573 16.993 8.984 17H9c4.403 0 7.991-3.578 8-7.984.008-4.411-3.574-8.007-7.985-8.016h-.016zM9 18h-.018C4.02 17.991-.01 13.946 0 8.983.009 4.026 4.045 0 8.999 0h.018C13.979.01 18.01 4.056 18 9.018 17.989 13.974 13.954 18 9 18z"></path>
                          <path d="M9.527 8.639V4.946a.446.446 0 0 0-.892 0v3.692l-3.688-.004a.446.446 0 0 0 0 .892l3.688.003v3.686a.446.446 0 0 0 .892 0V9.53l3.752.004a.446.446 0 0 0 0-.892L9.527 8.64z"></path>
                        </g>
                      </svg>
                    </div>
                    <div className="svghead">COVID-RTPCR</div>
                  </div>
                  <div className="svgghead">
                    <div className="svgg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                      >
                        <g fill="#212121" fillRule="evenodd">
                          <path d="M17.5 9.017h.01-.01zM8.999 1C4.595 1 1.008 4.579 1 8.985.991 13.396 4.573 16.993 8.984 17H9c4.403 0 7.991-3.578 8-7.984.008-4.411-3.574-8.007-7.985-8.016h-.016zM9 18h-.018C4.02 17.991-.01 13.946 0 8.983.009 4.026 4.045 0 8.999 0h.018C13.979.01 18.01 4.056 18 9.018 17.989 13.974 13.954 18 9 18z"></path>
                          <path d="M9.527 8.639V4.946a.446.446 0 0 0-.892 0v3.692l-3.688-.004a.446.446 0 0 0 0 .892l3.688.003v3.686a.446.446 0 0 0 .892 0V9.53l3.752.004a.446.446 0 0 0 0-.892L9.527 8.64z"></path>
                        </g>
                      </svg>
                    </div>
                    <div className="svghead">CBC</div>
                  </div>
                </div>
                <div className="twoflex">
                  <div className="svgghead">
                    <div className="svgg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                      >
                        <g fill="#212121" fillRule="evenodd">
                          <path d="M17.5 9.017h.01-.01zM8.999 1C4.595 1 1.008 4.579 1 8.985.991 13.396 4.573 16.993 8.984 17H9c4.403 0 7.991-3.578 8-7.984.008-4.411-3.574-8.007-7.985-8.016h-.016zM9 18h-.018C4.02 17.991-.01 13.946 0 8.983.009 4.026 4.045 0 8.999 0h.018C13.979.01 18.01 4.056 18 9.018 17.989 13.974 13.954 18 9 18z"></path>
                          <path d="M9.527 8.639V4.946a.446.446 0 0 0-.892 0v3.692l-3.688-.004a.446.446 0 0 0 0 .892l3.688.003v3.686a.446.446 0 0 0 .892 0V9.53l3.752.004a.446.446 0 0 0 0-.892L9.527 8.64z"></path>
                        </g>
                      </svg>
                    </div>
                    <div className="svghead">Vitamin D (25-OH)</div>
                  </div>
                  <div className="svgghead">
                    <div className="svgg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                      >
                        <g fill="#212121" fillRule="evenodd">
                          <path d="M17.5 9.017h.01-.01zM8.999 1C4.595 1 1.008 4.579 1 8.985.991 13.396 4.573 16.993 8.984 17H9c4.403 0 7.991-3.578 8-7.984.008-4.411-3.574-8.007-7.985-8.016h-.016zM9 18h-.018C4.02 17.991-.01 13.946 0 8.983.009 4.026 4.045 0 8.999 0h.018C13.979.01 18.01 4.056 18 9.018 17.989 13.974 13.954 18 9 18z"></path>
                          <path d="M9.527 8.639V4.946a.446.446 0 0 0-.892 0v3.692l-3.688-.004a.446.446 0 0 0 0 .892l3.688.003v3.686a.446.446 0 0 0 .892 0V9.53l3.752.004a.446.446 0 0 0 0-.892L9.527 8.64z"></path>
                        </g>
                      </svg>
                    </div>
                    <div className="svghead">Thyroid profile Total</div>
                  </div>
                </div>
                <div className="twoflex">
                  <div className="svgghead">
                    <div className="svgg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                      >
                        <g fill="#212121" fillRule="evenodd">
                          <path d="M17.5 9.017h.01-.01zM8.999 1C4.595 1 1.008 4.579 1 8.985.991 13.396 4.573 16.993 8.984 17H9c4.403 0 7.991-3.578 8-7.984.008-4.411-3.574-8.007-7.985-8.016h-.016zM9 18h-.018C4.02 17.991-.01 13.946 0 8.983.009 4.026 4.045 0 8.999 0h.018C13.979.01 18.01 4.056 18 9.018 17.989 13.974 13.954 18 9 18z"></path>
                          <path d="M9.527 8.639V4.946a.446.446 0 0 0-.892 0v3.692l-3.688-.004a.446.446 0 0 0 0 .892l3.688.003v3.686a.446.446 0 0 0 .892 0V9.53l3.752.004a.446.446 0 0 0 0-.892L9.527 8.64z"></path>
                        </g>
                      </svg>
                    </div>
                    <div className="svghead">HbA1c</div>
                  </div>
                  <div className="svgghead">
                    <div className="svgg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                      >
                        <g fill="#212121" fillRule="evenodd">
                          <path d="M17.5 9.017h.01-.01zM8.999 1C4.595 1 1.008 4.579 1 8.985.991 13.396 4.573 16.993 8.984 17H9c4.403 0 7.991-3.578 8-7.984.008-4.411-3.574-8.007-7.985-8.016h-.016zM9 18h-.018C4.02 17.991-.01 13.946 0 8.983.009 4.026 4.045 0 8.999 0h.018C13.979.01 18.01 4.056 18 9.018 17.989 13.974 13.954 18 9 18z"></path>
                          <path d="M9.527 8.639V4.946a.446.446 0 0 0-.892 0v3.692l-3.688-.004a.446.446 0 0 0 0 .892l3.688.003v3.686a.446.446 0 0 0 .892 0V9.53l3.752.004a.446.446 0 0 0 0-.892L9.527 8.64z"></path>
                        </g>
                      </svg>
                    </div>
                    <div className="svghead">Liver Function Test</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="visit">
              {/* visit symbol and heading */}
              <div className="visitsymbheading">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="38"
                    height="38"
                    viewBox="0 0 38 38"
                  >
                    <g
                      fill="none"
                      fillRule="evenodd"
                      transform="translate(1 1)"
                    >
                      <circle
                        cx="18"
                        cy="18"
                        r="18"
                        fill="#FFFCF8"
                        stroke="#FFFFFF"
                      ></circle>
                      <g stroke="#000">
                        <path
                          strokeLinecap="round"
                          d="M8.475 21.675h11.723"
                        ></path>
                        <path
                          fill="#FFF"
                          strokeLinejoin="round"
                          d="M8.743 18.932h5.724a2.4 2.4 0 0 1 2.4 2.4c0 .19-.154.343-.343.343H8.4v-2.4c0-.19.153-.343.343-.343z"
                        ></path>
                        <path
                          fill="#FFF"
                          strokeLinejoin="round"
                          d="M19.468 20.303a1.371 1.371 0 1 1-2.743 0 1.371 1.371 0 0 1 2.743 0z"
                        ></path>
                        <path
                          fill="#FFF"
                          strokeLinejoin="round"
                          d="M18 8.4a9.604 9.604 0 0 0-9.062 6.422h3.94a6.027 6.027 0 1 1 .347 6.858L8.4 21.677v1.83h1.74A9.586 9.586 0 0 0 18 27.6c5.302 0 9.6-4.298 9.6-9.6S23.302 8.4 18 8.4z"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="visithead">VISIT A LAB NEAR YOU</div>
              </div>
              {/* visit topics */}
              <div className="visittopics">
                <div className="twoflex">
                  <div className="svgghead">
                    <div className="svgg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                      >
                        <g fill="#212121" fillRule="evenodd">
                          <path d="M17.5 9.017h.01-.01zM8.999 1C4.595 1 1.008 4.579 1 8.985.991 13.396 4.573 16.993 8.984 17H9c4.403 0 7.991-3.578 8-7.984.008-4.411-3.574-8.007-7.985-8.016h-.016zM9 18h-.018C4.02 17.991-.01 13.946 0 8.983.009 4.026 4.045 0 8.999 0h.018C13.979.01 18.01 4.056 18 9.018 17.989 13.974 13.954 18 9 18z"></path>
                          <path d="M9.527 8.639V4.946a.446.446 0 0 0-.892 0v3.692l-3.688-.004a.446.446 0 0 0 0 .892l3.688.003v3.686a.446.446 0 0 0 .892 0V9.53l3.752.004a.446.446 0 0 0 0-.892L9.527 8.64z"></path>
                        </g>
                      </svg>
                    </div>
                    <div className="svghead">USG Whole Abdomen</div>
                  </div>
                  <div className="svgghead">
                    <div className="svgg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                      >
                        <g fill="#212121" fillRule="evenodd">
                          <path d="M17.5 9.017h.01-.01zM8.999 1C4.595 1 1.008 4.579 1 8.985.991 13.396 4.573 16.993 8.984 17H9c4.403 0 7.991-3.578 8-7.984.008-4.411-3.574-8.007-7.985-8.016h-.016zM9 18h-.018C4.02 17.991-.01 13.946 0 8.983.009 4.026 4.045 0 8.999 0h.018C13.979.01 18.01 4.056 18 9.018 17.989 13.974 13.954 18 9 18z"></path>
                          <path d="M9.527 8.639V4.946a.446.446 0 0 0-.892 0v3.692l-3.688-.004a.446.446 0 0 0 0 .892l3.688.003v3.686a.446.446 0 0 0 .892 0V9.53l3.752.004a.446.446 0 0 0 0-.892L9.527 8.64z"></path>
                        </g>
                      </svg>
                    </div>
                    <div className="svghead">X - Ray Chest PA View</div>
                  </div>
                </div>

                <div className="twoflex">
                  <div className="svgghead">
                    <div className="svgg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                      >
                        <g fill="#212121" fillRule="evenodd">
                          <path d="M17.5 9.017h.01-.01zM8.999 1C4.595 1 1.008 4.579 1 8.985.991 13.396 4.573 16.993 8.984 17H9c4.403 0 7.991-3.578 8-7.984.008-4.411-3.574-8.007-7.985-8.016h-.016zM9 18h-.018C4.02 17.991-.01 13.946 0 8.983.009 4.026 4.045 0 8.999 0h.018C13.979.01 18.01 4.056 18 9.018 17.989 13.974 13.954 18 9 18z"></path>
                          <path d="M9.527 8.639V4.946a.446.446 0 0 0-.892 0v3.692l-3.688-.004a.446.446 0 0 0 0 .892l3.688.003v3.686a.446.446 0 0 0 .892 0V9.53l3.752.004a.446.446 0 0 0 0-.892L9.527 8.64z"></path>
                        </g>
                      </svg>
                    </div>
                    <div className="svghead">ECG</div>
                  </div>
                  <div className="svgghead">
                    <div className="svgg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                      >
                        <g fill="#212121" fillRule="evenodd">
                          <path d="M17.5 9.017h.01-.01zM8.999 1C4.595 1 1.008 4.579 1 8.985.991 13.396 4.573 16.993 8.984 17H9c4.403 0 7.991-3.578 8-7.984.008-4.411-3.574-8.007-7.985-8.016h-.016zM9 18h-.018C4.02 17.991-.01 13.946 0 8.983.009 4.026 4.045 0 8.999 0h.018C13.979.01 18.01 4.056 18 9.018 17.989 13.974 13.954 18 9 18z"></path>
                          <path d="M9.527 8.639V4.946a.446.446 0 0 0-.892 0v3.692l-3.688-.004a.446.446 0 0 0 0 .892l3.688.003v3.686a.446.446 0 0 0 .892 0V9.53l3.752.004a.446.446 0 0 0 0-.892L9.527 8.64z"></path>
                        </g>
                      </svg>
                    </div>
                    <div className="svghead">MRI Brain</div>
                  </div>
                </div>

                <div className="twoflex">
                  <div className="svgghead">
                    <div className="svgg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                      >
                        <g fill="#212121" fillRule="evenodd">
                          <path d="M17.5 9.017h.01-.01zM8.999 1C4.595 1 1.008 4.579 1 8.985.991 13.396 4.573 16.993 8.984 17H9c4.403 0 7.991-3.578 8-7.984.008-4.411-3.574-8.007-7.985-8.016h-.016zM9 18h-.018C4.02 17.991-.01 13.946 0 8.983.009 4.026 4.045 0 8.999 0h.018C13.979.01 18.01 4.056 18 9.018 17.989 13.974 13.954 18 9 18z"></path>
                          <path d="M9.527 8.639V4.946a.446.446 0 0 0-.892 0v3.692l-3.688-.004a.446.446 0 0 0 0 .892l3.688.003v3.686a.446.446 0 0 0 .892 0V9.53l3.752.004a.446.446 0 0 0 0-.892L9.527 8.64z"></path>
                        </g>
                      </svg>
                    </div>
                    <div className="svghead">HRCT CHEST - Plain</div>
                  </div>

                  <div className="svgghead">
                    <div className="svgg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                      >
                        <g fill="#212121" fillRule="evenodd">
                          <path d="M17.5 9.017h.01-.01zM8.999 1C4.595 1 1.008 4.579 1 8.985.991 13.396 4.573 16.993 8.984 17H9c4.403 0 7.991-3.578 8-7.984.008-4.411-3.574-8.007-7.985-8.016h-.016zM9 18h-.018C4.02 17.991-.01 13.946 0 8.983.009 4.026 4.045 0 8.999 0h.018C13.979.01 18.01 4.056 18 9.018 17.989 13.974 13.954 18 9 18z"></path>
                          <path d="M9.527 8.639V4.946a.446.446 0 0 0-.892 0v3.692l-3.688-.004a.446.446 0 0 0 0 .892l3.688.003v3.686a.446.446 0 0 0 .892 0V9.53l3.752.004a.446.446 0 0 0 0-.892L9.527 8.64z"></path>
                        </g>
                      </svg>
                    </div>
                    <div className="svghead">CECT Whole Abdomen</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bettests">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
              >
                <path
                  fill="#FF6F61"
                  fillRule="evenodd"
                  d="M8.308 5.077c0 1.781-1.45 3.23-3.231 3.23a3.235 3.235 0 0 1-3.23-3.23c0-1.781 1.449-3.23 3.23-3.23s3.23 1.449 3.23 3.23zm3.425 5.35L9.26 7.955A5.075 5.075 0 0 0 5.077 0 5.075 5.075 0 0 0 0 5.077 5.075 5.075 0 0 0 7.954 9.26l2.474 2.466a.905.905 0 0 0 .649.274.93.93 0 0 0 .923-.923.929.929 0 0 0-.267-.65z"
                ></path>
              </svg>
            </div>
            <div>FIND YOUR TESTS</div>
          </div>
        </div>

        {/* image ad */}
        <div className="imgadwrap">
          <div className="">
            <a href="https://www.1mg.com/subscription-plan/subscriptions?utm_source=cpsales&amp;utm_medium=allcampaigns&amp;utm_campaign=homepage_bottom_scroller&amp;referer=labs_home_page">
              <div className="">
                <img
                  className="adimg"
                  alt=""
                  src="https://onemg.gumlet.io/image/upload/v1638879963/kmwihensncrafu2klh4h.png"
                />
              </div>
            </a>
          </div>
        </div>

        {/* featured labs */}
        <div className="featouter">
          <h2 className="feath2">Featured Labs</h2>
          <div className="featuredLabs">
            {data.map((el) => {
              return (
                <>
                  <FeaturedLabs key={el.id} {...el} />
                </>
              );
            })}
          </div>
        </div>

        {/* content video flex */}
        <div className="contentvideowrap">
          <div className="contentfull">
            <h3 className="contenthead">
              UNCOMPROMISED QUALITY. RELIABLE RESULTS. ALWAYS.
            </h3>
            <div className="contentpara">
              Spending hours in a queue at a diagnostic lab or a hospital is now
              a thing of the past. With Tata 1mg you can get your lab tests done
              from the comfort of your home. Our highly qualified phlebotomist
              will collect the samples at your preferred time. Watch this video
              to see steps taken by us to ensure quality and hygiene in sample
              collection. Book your next lab test with Tata 1mg at the lowest
              price guaranteed!
            </div>
          </div>
          <div className="contentvideo">
            <iframe
              title="abc"
              width="100%"
              height="100%"
              id="video-iframe"
              src="https://www.youtube.com/embed/jo5gQxB0DlE?autoplay=0&amp;rel=0"
              frameBorder="0"
              allowFullScreen=""
            ></iframe>
          </div>
        </div>

        {/* Our Happy Customers */}
        <div className="happycustomersouter">
          <div className="ourHappyCustomerswrap">
            <OurHappyCustomers />
          </div>
        </div>

        {/* Our Satisfied Lab Partners */}
        <div className="ourSatisfiedLabPartnersouter">
          <h2>Our Satisfied Lab Partners</h2>
          <div className="ourSatisfiedLabPartners">
            <Swiper
              slidesPerView={3}
              spaceBetween={20}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {dataa.map((el) => {
                return (
                  <>
                    <SwiperSlide className="swiperslidee">
                      <div>
                        <SatisfiedLabPartnersCards key={el.id} {...el} />
                      </div>
                    </SwiperSlide>
                  </>
                );
              })}
            </Swiper>
          </div>
        </div>

        {/* contact us */}
        <div className="contactuswrap">
          <div>
            <h3>Want to book lab tests in bulk?</h3>
          </div>
          <div>
            <span>Get customized health packages at best prices</span>
          </div>
          <br></br>
          <div className="contact">
            <a target="_blank" href="/contactUs">
              <button className="contactbtn">CONTACT US</button>
            </a>
          </div>
        </div>

        {/* mobile picture */}
        <div className="mobilewrap">
          <div className="mobimgdownloadimgflex">
            <div className="mobileimg">
              <img
                alt=""
                src="https://res.cloudinary.com/du8msdgbj/image/upload/v1572602488/store_creatives_mccvjq.png"
              />
            </div>
            <div className="downloadimg">
              <h2>Download the TATA 1mg APP</h2>
              <span className="bookdiag">
                Book diagnostics tests online with certified labs at best prices
              </span>
              <br />
              <div className="playstoreflex">
                <div className="googleplay">
                  <a
                    target="true ? '_blank' : '_self'"
                    href="https://play.google.com/store/apps/details?id=com.aranoah.healthkart.plus"
                  >
                    <div className="">
                      <img
                        className="googleplayimg"
                        alt=""
                        src="https://onemg.gumlet.io/search_widget/google-badge_3x.png?format=auto"
                      />
                    </div>
                  </a>
                </div>
                <div className="applestore">
                  <a
                    target="true ? '_blank' : '_self'"
                    href="https://itunes.apple.com/in/app/1mg/id554578419?mt=8"
                  >
                    <div className="">
                      <img
                        className="applestoreimg"
                        alt=""
                        src="https://onemg.gumlet.io/search_widget/appstore-badge_3x.png?format=auto"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* content */}
        <div className="contentwrap">
          <section className="">
            <h3>
              Keep your health in check with Tata 1mg: Lab tests just a click
              away
            </h3>

            <h3>Tata 1mg brings care to health</h3>
            <p>
              Tata 1mg is India's leading digital healthcare platform. From
              ordering medicines online to consulting doctors online, Tata 1mg
              is that one place that aims to fulfill all your health needs
              within the comfort of your home. In fact, you don't even need to
              visit the diagnostic labs to get tests done. Tata 1mg has got that
              covered too.
            </p>

            <h3>Tata 1mg: Lab tests now at your doorstep</h3>
            <p>
              Spending hours in a queue at a diagnostic lab or a hospital is now
              a thing of the past. With more than 45,00,000 lab tests booked,
              Tata 1mg labs is on a mission to give you a flawless healthcare
              experience by bringing "care" to "health".
            </p>
            <p>
              With Tata 1mg labs, you can choose the diagnostic lab of your
              preference and get the hassle-free experience of a diagnostic
              center at the comfort of your home.
            </p>
            <p>
              You can choose the diagnostic lab of your choice and get your lab
              tests done at discounted prices with the quality of service kept
              intact.
            </p>
            <p>
              Wondering how to book a lab test? It's simple. You just need to
              search and add your tests, select the lab of your choice and
              schedule your test as per your suitable time slot. Once your test
              gets confirmed, a phlebotomist will be assigned to collect a
              sample from your home.
            </p>
            <h3>Need more help?</h3>
            <p>
              Just give us a call (18002122323) and we will help you complete
              your order.
            </p>
            <h3>Certified labs: For accessible and affordable experience</h3>
            <p>
              We partner with various recognized diagnostic labs to make sure
              that you have a safe and smooth experience. To ensure quality and
              hygiene in sample collection and high accuracy in results, we
              partner with labs that are certified by international bodies like
              ISO (International Organization for Standardization), NABL
              (National Accreditation Board for testing and calibration
              laboratories) and CAP (College of American Pathologists).
            </p>
            <h3>The services we offer</h3>
            <p>
              As India's leading digital healthcare platforms, your health is
              our utmost priority. Apart from facilitating pathological tests,
              Tata 1mg is your one-stop place for booking radiology tests such
              as MRIs and CT scans. Not just this, we also offer a free package
              of diabetes tests for members of the Diabetes Care Plan.
            </p>
            <p>
              With a presence in cities like Delhi, Gurgaon, Noida, Mumbai,
              Pune, Hyderabad, Bangalore, Chennai, etc., through Tata 1mg, you
              can avail over 2,000 tests and get tested by 120+ top, verified
              labs at the best prices. You even have the option to compare tests
              and packages based on prices and lab ratings and choose
              accordingly.
            </p>
            <p>
              Need help with lab test results? Talk to more than 20 kinds of
              specialists on Tata 1mg and get your results verified by them.
            </p>
            <p>
              We have been making healthcare affordable and accessible since the
              day we started. We aim to bring care to health and continue doing
              so until everyone is well.
            </p>
            <p>
              Customer centricity is the core of our values. Our team of highly
              trained and experienced doctors, phlebotomists and pharmacists
              look into each order to give you a fulfilling experience.
            </p>
            <p>
              Explore our labs now and book your tests today.
              <br></br>
              Stay Healthy!
            </p>
          </section>
        </div>
      </div>
    </>
  );
}

export default LabTests;
