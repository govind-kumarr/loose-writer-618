import styled from "styled-components";

export const Add_div = styled.div`
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

export const Heading_div = styled.div`
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

export const CarePlan_div = styled.div`
  display: flex;
  width: 94%;
  margin: 30px auto;
  max-width: 1280px;

  > img {
    width: 100%;
  }
`;
