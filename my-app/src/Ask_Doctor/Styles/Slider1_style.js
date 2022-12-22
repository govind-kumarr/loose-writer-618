import styled from "styled-components";

export const Slider1 = styled.div`
  background-color: #f8f8f8;
  margin-top: 2%;
  // padding: 0 5%;
  // padding-bottom: 2%;

  > * {
    max-width: 1920px;
  }

  .slider_heading {
    height: 64.86px;
    color: #939393;
    font-size: 24px;
    padding-left: 6%;
    padding-top: 2%;
    margin: auto;
  }

  /* img {vertical-align: middle;} */

  /* Slideshow container */
  .slideshow-container1 {
    height: 200px;
    position: relative;
    margin: auto;
    border: transparent solid;
    margin-top: 2%;
    padding: 0 5%;
    padding-bottom: 2%;
  }

  /* Caption text */
  .text1 {
    color: #757575;
    font-size: 18px;
    font-family: "Clear Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    margin-top: 10px;
    width: 100%;
    text-align: center;
    display: flex;
    /* grid-template-columns: repeat(3,1fr);
  grid-template-rows: auto; */
    /* border: red solid; */
  }

  .fade1 {
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

  /* On smaller screens, decrease text size */
  @media only screen and (max-width: 300px) {
    .prev1,
    .next1,
    .text1 {
      font-size: 11px;
    }
  }

  .names1 {
    font-size: 14px;
    color: #212121;
    padding-top: 22px;
    display: block;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    // width: 100% !important;

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

  .swiper-slide > div > img {
    display: block;
    width: 176px;
    height: 125px;
    box-shadow: 0 2px 7px 0 hsl(0deg 0% 42% / 50%);
    border-radius: 10px;
  }

  .swiper-button-next {
    // display: block;
    right: 0px;
    width: 38px;
    height: 43px;
    z-index: 2;
  }

  .swiper-button-prev {
    // display: block;
    left: 0px;
    width: 38px;
    height: 43px;
    z-index: 2;
  }

  .swiper-button-next::after {
    content: "" !important;
    background-image: url("https://www.1mg.com/images/labs/next.png");
    width: 38px;
    height: 43px;
  }

  .swiper-button-prev::after {
    content: "" !important;
    background-image: url("https://www.1mg.com/images/labs/previous.png");
    width: 38px;
    height: 43px;
  }

  .swiper-slide {
    width: fit-content !important;
  }
`;
