import React from "react";
import { Slider1 } from "../Styles/Slider1_style";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Navigation, Pagination } from "swiper";

export const Ask_Doc_Slider1 = () => {
  return (
    <>
      {/* <!-- slider 1st --> */}
      <Slider1>
        {/* <!-- slider heading --> */}
        <div className="slider_heading">Chat with our specialist doctors</div>
        <div className="slideshow-container1">
          <div className="mySlides1 fade1">
            <div className="text1">
              <Swiper
                slidesPerView={8}
                spaceBetween={20}
                loop={true}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div>
                    <img
                      src="https://res.cloudinary.com/du8msdgbj/image/upload/v1559624294/marketing/ew6o5oyhll6fftiaf7nb.png"
                      alt="..."
                    />
                    <div className="names1">Psychologist</div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img
                      src="https://res.cloudinary.com/du8msdgbj/image/upload/v1559624208/marketing/fcqsjqyummdc0wv8eepm.png"
                      alt=""
                    />
                    <div className="names1">Skin and Hair Specialist</div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img
                      src="https://res.cloudinary.com/du8msdgbj/image/upload/v1559624455/marketing/ll4mli8zbol6ovededr6.png"
                      alt=""
                    />
                    <div className="names1">Ear Nose Throat Specialist</div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img
                      src="https://res.cloudinary.com/du8msdgbj/image/upload/v1559624331/marketing/n9x8duafqzxhbzjixjjq.png"
                      alt="..."
                    />
                    <div className="names1">Physiotherapist</div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img
                      src="https://res.cloudinary.com/du8msdgbj/image/upload/v1559624722/marketing/tesj5p15sruirjuy9jix.png"
                      alt="..."
                    />
                    <div className="names1">Bone and Joint Specialist</div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img
                      src="https://res.cloudinary.com/du8msdgbj/image/upload/v1595408574/marketing/Kaya-Clinic-Logo.png"
                      alt="..."
                    />
                    <div className="names1">Derma Care by Kaya</div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img
                      src="https://res.cloudinary.com/du8msdgbj/image/upload/v1559624427/marketing/y7x2wylau943va6dcxyr.png"
                      alt="..."
                    />
                    <div className="names1">Gynaecologist</div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img
                      src="https://res.cloudinary.com/du8msdgbj/image/upload/v1559624682/marketing/tufguxjnqbedu0uspnrp.png"
                      alt="..."
                    />
                    <div className="names1">Child Specialist</div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img
                      src="https://res.cloudinary.com/du8msdgbj/image/upload/v1560171754/marketing/zsreblulpofk1bqqi0vp.png"
                      alt="..."
                    />
                    <div className="names1">Sexologist</div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img
                      src="https://res.cloudinary.com/du8msdgbj/image/upload/v1560171649/marketing/liinlnkozof8mdtelot2.png"
                      alt="..."
                    />
                    <div className="names1">General Physician</div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img
                      src="https://res.cloudinary.com/du8msdgbj/image/upload/v1560172172/marketing/nmln0dvwqgqfyx3lpruf.png"
                      alt="..."
                    />
                    <div className="names1">Neurologist</div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img
                      src="https://res.cloudinary.com/du8msdgbj/image/upload/v1559624785/marketing/zkvxs7knmdazinxhof1h.png"
                      alt="..."
                    />
                    <div className="names1">Ayurveda</div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img
                      src="https://res.cloudinary.com/du8msdgbj/image/upload/v1559624400/marketing/h3eaimhsl7lypjkxivck.png"
                      alt="..."
                    />
                    <div className="names1">Homeopathy</div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img
                      src="https://res.cloudinary.com/du8msdgbj/image/upload/v1559624104/marketing/wh9j8lamt8bjognviwan.png"
                      alt="..."
                    />
                    <div className="names1">Urologist</div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img
                      src="https://res.cloudinary.com/du8msdgbj/image/upload/v1560171962/marketing/soqnrdcslnvvakd6yxpa.png"
                      alt="..."
                    />
                    <div className="names1">Psychiatrist</div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img
                      src="https://res.cloudinary.com/du8msdgbj/image/upload/v1560172025/marketing/ttaqvdla22lbpswd7gbg.png"
                      alt="..."
                    />
                    <div className="names1">Dentist</div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img
                      src="https://res.cloudinary.com/du8msdgbj/image/upload/v1559624653/marketing/pqepl7zcqwj1ogyh7pma.png"
                      alt="..."
                    />
                    <div className="names1">Diabetes Specialist</div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img
                      src="https://res.cloudinary.com/du8msdgbj/image/upload/v1560172081/marketing/mops8f1it8faurfk5cqo.png"
                      alt="..."
                    />
                    <div className="names1">Dietician</div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img
                      src="https://res.cloudinary.com/du8msdgbj/image/upload/v1559624362/marketing/ahdy9o2zqjq8gi4v4hes.png"
                      alt="..."
                    />
                    <div className="names1">Pathologist</div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          {/* <img className="prev1" ="plusSlides1(-1)" src="https://www.1mg.com/images/labs/previous.png" /> */}

          {/* <img className="next1" ="plusSlides1(1)" src="https://www.1mg.com/images/labs/next.png" /> */}
        </div>
      </Slider1>
    </>
  );
};
