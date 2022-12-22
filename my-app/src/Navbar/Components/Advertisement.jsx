import React from "react";
import {
  Add_div,
  CarePlan_div,
  Heading_div,
} from "../Styleing/Advertisement_style";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination, Autoplay } from "swiper";

const Advertisement = () => {
  return (
    <>
      <Add_div>
        <div>
          <Swiper
            pagination={true}
            modules={[Pagination, Autoplay]}
            autoplay={{ delay: 5000 }}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                src="https://onemg.gumlet.io/image/upload/w_899,h_200,,a_ignore,q_auto,f_auto/v1651427483/hxgf3veswgz1scecefwc.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://onemg.gumlet.io/image/upload/w_899,h_200,,a_ignore,q_auto,f_auto/v1651340360/gzh52scl7kv7ghj8opbf.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://onemg.gumlet.io/image/upload/w_899,h_200,,a_ignore,q_auto,f_auto/v1651469437/zkm0v49j2nsuuo3vnlyw.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://onemg.gumlet.io/image/upload/w_899,h_200,,a_ignore,q_auto,f_auto/v1651561452/x7zr33pjnj4gcpqktn3q.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://onemg.gumlet.io/image/upload/w_899,h_200,,a_ignore,q_auto,f_auto/v1651343112/f9wjmsnva75ajnlveqxi.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://onemg.gumlet.io/image/upload/w_899,h_200,,a_ignore,q_auto,f_auto/v1651478982/txwuakgo0hozrepgde4b.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://onemg.gumlet.io/image/upload/w_899,h_200,,a_ignore,q_auto,f_auto/v1641283756/kcdcsb5yrkpxok5bpm8y.png"
                alt=""
              />
            </SwiperSlide>
            {/* <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide> */}
          </Swiper>
        </div>
        <div>
          <img
            src="https://onemg.gumlet.io/image/upload/w_480,h_200,,a_ignore,q_auto,f_auto/v1651558002/v6hr3rqq82elrplswcmb.png"
            alt="Rx"
          />
        </div>
      </Add_div>
      <Heading_div>
        <h1>Tata 1mg: India’s Leading Online Pharmacy & Healthcare Platform</h1>
      </Heading_div>
      <CarePlan_div>
        <img src="https://res.cloudinary.com/du8msdgbj/image/upload/v1647251796/ueyxzzku83yuvpqxyrwe.png" />
      </CarePlan_div>
    </>
  );
};

export default Advertisement;
