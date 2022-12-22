import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Navigation, Pagination } from "swiper";
import { Slider2 } from "../Styles/Slider2_style";

export const Ask_Doc_slider2 = () => {
  return (
    <>
      {/* <!-- slider 2nd --> */}
      <Slider2>
        <div className="sliding_info_heading">Our Happy Customers</div>
        {/* <!-- slides --> */}
        {/* <img className="prev" ="next(-1)" src="https://www.1mg.com/images/labs/slider-prev.svg" /> */}
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="mySlides fade">
              <div className="text">
                Amazingly easy and convenient. Great service for the same price
                as a clinic visit, without the hassle of having to drive to the
                doctor's clinic. Couldn't be any happier.
              </div>
              <div className="text names">Rahul</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mySlides fade">
              <div className="text">
                I installed the app and went for a free consultation with a
                dietician. The advice given by Dr. Mirza was simply great. He
                shared a detailed diet chart and exercises with me which was
                easy to incorporate into my hectic schedule.
              </div>
              <div className="text names">Aarohi</div>
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
                Initially, I was a little skeptical of consulting a doctor
                online. But the consultation turned out to be honest and cool,
                the doctor's behavior was friendly. The best part is that I
                saved so much time and money!
              </div>
              <div className="text names">Aarzoo</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mySlides fade">
              <div className="text">
                Dr. Chakraborty is so concerned about his patient. I sincerely
                wish him the best. He always takes the time to understand the
                problem and on the basis of that he takes the decision and
                explains it very well. And if you miss out on anything, you can
                come back with more questions.
              </div>
              <div className="text names">Yash</div>
            </div>
          </SwiperSlide>
        </Swiper>
        {/* <img className="next" ="next(1)" src="https://www.1mg.com/images/labs/slider-next.svg" /> */}
      </Slider2>
    </>
  );
};
