import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "../Styles/Product_swiper.css";

// import required modules
import { Navigation } from "swiper";
import { Single_slider_product } from "./Single_slider_product";
import { Products_data } from "../Slider_products/Slider_product";

export const Product_slider = () => {
  return (
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        slidesPerGroup={4}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {Products_data.map((el) => (
          <SwiperSlide key={el.id}>
            <Single_slider_product {...el} />
          </SwiperSlide>
        ))}
      </Swiper>
  );
};
