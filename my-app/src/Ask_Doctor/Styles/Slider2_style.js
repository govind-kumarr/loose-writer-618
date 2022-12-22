import styled from "styled-components";

export const Slider2 = styled.div`
  width: 70%;
  height: 300px;
  margin: auto;

  .text {
    color: #757575;
    font-size: 18px;
    padding: 8px 40px;
    font-family: "Clear Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    width: 100%;
    text-align: center;
  }

  .fade {
    animation-name: fade;
    animation-duration: 1.5s;
  }

  @keyframes fade {
    from {
      opacity: 0.4;
    }
    to {
      opacity: 1;
    }
  }

  .names {
    margin-top: 30px;
    color: #212121;
    font-size: 14px;
  }

  .swiper {
    width: 100%;
    height: 80%;
    background: #f8f8f8;

    > * {
      background: #f8f8f8;
    }
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    width: 100% !important;

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
    margin: 0 10px;
    width: 5px;
    height: 5px;
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

  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 30px;
    font-weight: 600;
    color: #ff6f61;
  }
`;
