import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Navigation } from "swiper";
import { Slider2 } from "./OurHappyCustomersstyles";

const OurHappyCustomers = () => {
  return (
    <>
      <Slider2>
        <h2 className="sliding_info_heading">Our Happy Customers</h2>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="mySlides fade">
              <div className="text">
                "I got my wife's pregnancy tests done from 1mg. A trained
                technical visited to collect samples and all reports were
                delivered on time before her doctor's appointment. Will surely
                choose 1mg for the upcoming tests."
              </div>
              <div className="text names">Vijay</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mySlides fade">
              <div className="text">
                My first booking experience with 1mg was simple and hassle-free.
                Selected sample collection slot on their app and the technician
                arrived right on time in the morning. Very impressive
              </div>
              <div className="text names">Nikita</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mySlides fade">
              <div className="text">
                Best app for consultation and the most effective way to connect
                with the doctor from anywhere. The doctor replies with great
                detail and is extremely polite. One can also come back to
                consult the same doctor anytime.
              </div>
              <div className="text names">Ronak</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mySlides fade">
              <div className="text">
                I regularly get tests done for my father, who is a diabetic
                patient. I like the convenience of home sample collection and
                quick delivery of test reports on my email.
              </div>
              <div className="text names">Smriti</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mySlides fade">
              <div className="text">
                I was surprised to see the wide selection of labs and tests on
                1mg. Now I can compare tests and packages based on prices and
                lab ratings and choose the best one for me and my family.
              </div>
              <div className="text names">Chirag</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mySlides fade">
              <div className="text">
                I had to get an MRI done for my mother and a relative
                recommended 1mg. Booked the test online with a reputed lab near
                my home. Received a call from 1mg's radiology expert who helped
                us with test preparation instructions and appointment details.
                The experience inside lab was very good.
              </div>
              <div className="text names">Annesha</div>
            </div>
          </SwiperSlide>
        </Swiper>
      </Slider2>
    </>
  );
};

export { OurHappyCustomers };
