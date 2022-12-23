import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper";

import styled from "styled-components";
const NavbarAdsection = () => {
  return (
    <>
      <Wrapper_top>
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
      </Wrapper_top>
      <TopSection>
        <h1>Tata 1mg: India’s Leading Online Pharmacy & Healthcare Platform</h1>
      </TopSection>
      <BottomSection>
        <img src="https://res.cloudinary.com/du8msdgbj/image/upload/v1647251796/ueyxzzku83yuvpqxyrwe.png" />
      </BottomSection>
    </>
  );
};
const TopSection = styled.div`
  width: 100%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #e0e0e0;
  border-width: 2px 0;
  font-family: "Clear Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  line-height: 1.42857143;
  color: #333;

  > h1 {
    margin: 26px 0;
    font-size: 22px;
    text-align: center;
    font-weight: 400;
    color: #666;
  }
`;

const BottomSection = styled.div`
  display: flex;
  width: 94%;
  margin: 30px auto;
  max-width: 1280px;

  > img {
    width: 100%;
  }
`;

const Wrapper_top = styled.div`
  max-width: 1920px;
  margin: auto;
  display: flex;
  justify-content: center;

  > div:nth-of-type(1) {
    min-width: 768px;
    width: 66.66666667%;
  }

  > div:nth-of-type(2) {
    width: 33.33333333%;

    > img {
      height: 100%;
      width: 100%;
    }
  }

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    // width: 100% !important;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet,
  .swiper-pagination-horizontal.swiper-pagination-bullets
    .swiper-pagination-bullet {
    margin: 0 var(--swiper-pagination-bullet-horizontal-gap, 4px);
    width: 7px;
    height: 7px;
  }

  .swiper-pagination-bullet-active {
    background-color: #000 !important;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: 100%;
  }
`;
export default NavbarAdsection;
