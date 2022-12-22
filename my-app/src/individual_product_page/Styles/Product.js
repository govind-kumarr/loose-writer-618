import styled from "styled-components";

export const Product = styled.div``;

export const Upper_div = styled.div`
  margin: 40px 0 20px;
  padding: 12px 100px 10px;
  min-height: 450px;
  display: flex;
  gap: 10px;
  font-family: "Clear Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;

  > div {
    width: 33.33333333%;
    // border: red solid;
  }

  > div:first-child {
    display: flex;
    justify-content: space-evenly;

    .Swiper_image {
      display: flex;
      justify-content: center;
      height: 58px;
      width: 53px;
      border: 1px solid #ff6f61;

      > img {
        max-height: 100%;
        max-width: 100%;
        width: auto;
        height: auto;
        position: relative;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        opacity: 1;
        transform: scale(1);
        animation: Cards_apear__SREkU 0.3s ease-in-out;
      }
    }
  }

  .Image_div {
    width: auto;
    height: auto;
    font-size: 0px;
    position: relative;

    > img {
      max-width: max-content;
      max-height: 350px;
      display: block;
      margin: auto;
      width: 100%;
      height: auto;
      pointer-events: none;
      vertical-align: middle;
      border: 0;
      opacity: 1;
      transform: scale(1);
      animation: Cards_apear__SREkU 0.3s ease-in-out;
    }
  }

  .title {
    > h1 {
      font-size: 22px;
      font-weight: 700;
      color: #212121;
    }
    > p {
      color: #ff6f61;
    }
  }

  .highlights {
    div:nth-of-type(1) > {
      margin-bottom: 8px;
      font-size: 16px;
    }

    div > ul {
      word-break: break-word;
      font-size: 14px;
      font-weight: 400;
      padding: 0;
      list-style-type: disc;

      > li {
        margin: 4px 0;
        word-break: break-word;
        font-size: 14px;
        line-height: 25px;
      }
    }
  }

  .price_info {
    padding: 0;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0 1px 2px 1px rgb(0 0 0 / 30%);

    > div:nth-of-type(1) {
      display: grid;
      grid-template-columns: 10% 90%;
      justify-content: center;
      align-items: center;
      background-color: #edf9ee;
      padding: 6px 5px;
      border-radius: 10px 10px 0 0;

      > img {
        width: 14px;
        margin: 0 8px 0 10px;
      }

      > p {
        color: #212121;
        font-size: 12px;
        margin: 5px;
      }
    }

    > div:nth-of-type(2) {
      padding: 1em;
      display: grid;
      grid-row-gap: 0.8em;

      .price_form {
        display: grid;
        grid-row-gap: 1em;

        > div:nth-of-type(2) {
          display: flex;
        }
      }

      input[type="radio"] {
        /* remove standard background appearance */
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        /* create custom radiobutton appearance */
        display: inline-block;
        width: 20px;
        height: 20px;
        padding: 3px;
        /* background-color only for content */
        background-clip: content-box;
        border: 2px solid #666;
        border-radius: 50%;
        margin-right: 15px;
      }

      input[type="radio"]:checked {
        background-color: #ff6f61;
        border: 2px solid #ff6f61;
      }

      .real_price {
        font-size: 23px;
        font-weight: 500;
        color: #3b3b3b;
        margin-right: 4px;
      }

      .cut_price {
        color: #666666;
        font-size: 16px;
        margin-right: 4px;
        text-decoration: line-through;
      }

      .discount {
        background-color: #edf9ee;
        color: #1aab2a;
        padding-left: 4px;
        padding-right: 4px;
        font-size: 16px;
      }

      .cashback {
        color: #3b3b3b;
      }

      .care_plan_png {
        margin-left: 4px;
        width: fit-content;
      }
    }
  }

  .choice_of {
    > select {
      width: 123px;
      font-size: 14px;
      border-radius: 4px;
      position: relative;
      border: 1px solid #e2e2e2;
      padding: 0 12px 8px;
      display: inline-block;
      text-align: left;
      outline: none;
      margin-right: 10px;
    }
  }

  .add_to_cart {
    border-radius: 4px;
    background-color: #ff6f61;
    color: #fff;
    font-weight: 700;
    padding: 11px 0px;
    cursor: pointer;
    text-transform: uppercase;
    text-align: center;
    width: 100%;

    > a {
      text-decoration: none;
      color: #fff;
    }
  }

  .offer_container {
    margin-top: 25px;
    border: 1px dashed #979797;
    border-radius: 10px;
    padding-top: 24px;
    position: relative;

    > h2 {
      font-size: 12px;
      text-align: center;
      color: #fff;
      background-color: #1aab2a;
      position: absolute;
      padding: 5px 10px 3px 8px;
      top: 3px;
      left: -3px;
      margin: 0;
      font-weight: 400;

      ::after {
        content: "";
        position: absolute;
        left: 100%;
        width: 0;
        height: 0;
        top: 0;
        border-top: 11px solid transparent;
        border-left: 9px solid #1aab2a;
        border-bottom: 11px solid transparent;
      }
    }

    > div > div {
      display: flex;

      > div:nth-of-type(1) {
        width: 18px;
        margin: 0 0 0 16px;
        display: flex;
        align-content: center;

        > img {
          max-width: 100%;
          vertical-align: middle;
          border: 0;
          margin: auto;
        }
      }

      > div:nth-of-type(2) {
        padding: 8px 14px;
        font-size: 12px;
        color: #212121;
        width: 100%;
      }
    }
  }

  .AdditionalOffers__show_button {
    text-align: right;
    padding: 0 14px 8px 0;
    font-size: 14px;
    font-weight: 700;
    color: #ff6f61;
    cursor: pointer;

    > span > img {
      max-width: 12px;
      vertical-align: middle;
      border: 0;
    }
  }
`;

export const Product_info = styled.div`
  display: flex;
  background-color: #f8f8f8;

  > div {
    display: flex;
    margin: 0 100px;
  }

  > div > div:nth-of-type(1) {
    width: 66.66666667%;
    padding-left: 15px;
    padding-right: 15px;

    > div {
      background-color: #ffffff;
    }

    .Product_Description {
      color: #212121;
      padding: 20px 25px;
      margin-top: 40px;
      word-wrap: break-word;
      box-shadow: 0 1px 2px 0 rgb(0 0 0 / 30%);

      .Description_heading {
        font-size: 18px;

        > h2 {
          color: #1a1a1a;
          font-size: 1.15rem;
          font-weight: 400;
        }
      }

      .Description_content {
        font-size: 14px;
        margin-top: 16px;
        text-align: justify;

        > ul {
          padding: 0px;
          > li::marker {
            font-size: 16px !important;
          }
        }
      }
    }

    .Similar_Products {
      background-color: #fff;
      box-shadow: 0 1px 2px 0 rgb(0 0 0 / 30%);
      margin: 20px 0;
      padding: 10px 24px;

      > h2 {
        color: #1a1a1a;
        font-size: 1.15rem;
        font-weight: 400;
      }
    }

    .SocialShare {
      box-shadow: 0 1px 2px 0 rgb(0 0 0 / 30%);
      display: flex;
      justify-content: space-between;
      padding: 1rem;

      > h2 {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1rem;
        color: #616161;
        font-weight: 700;
        padding: 0;
        margin: 0;
      }

      > div {
        display: flex;
        gap: 17px;
      }
    }

    .other_info {
      font-size: 12px;
      color: #212121;
      margin-top: 4px;
      padding: 20px 20px 15px;
      background-color: #f8f8f8;

      .OtcPage_title {
        font-size: 16px;
        color: #212121;
      }

      > ul {
        padding-left: 15px;
        > li {
          color: #1aab2a;
        }
      }

      .Manufacturer {
        > h3 {
          margin: 0;
          color: #1a1a1a;
          font-size: 16px;
          font-weight: 400;
        }

        > div {
          margin-top: 5px;
        }
      }
    }

    .license {
      margin-bottom: 12px;
      padding: 0;
      color: #212121;
      font-size: 12px;
      word-wrap: break-word;
      text-align: justify;
      background-color: #f8f8f8;

      > a {
        text-decoration: none;
        color: #ff6f61;
        margin: 0 5px;
      }
    }
  }

  > div > div:nth-of-type(2) {
    width: 33.33333333%;
    min-height: 1px;
    padding-left: 15px;
    padding-right: 15px;

    .Frequently_bought_together {
      background-color: #fff;
      box-shadow: 0 1px 2px 0 rgb(0 0 0 / 30%);
      padding: 20px;
      margin-top: 40px;

      > div:nth-of-type(1) {
        font-size: 16px;
        color: #212121;
        margin-bottom: 32px;
        display: block;
      }
    }
  }

  hr {
    margin-top: 20px;
    margin-bottom: 20px;
    border: 0;
    border-top: 1px solid #eee;
  }

  .style__plus {
    display: block;
    margin: 10px 0 10px 20px;
  }

  .style__plus::after {
    background-color: #e0e0e0;
    content: "";
    display: inline-block;
    height: 1px;
    position: relative;
    vertical-align: middle;
    width: calc(100% - 75px);
    margin-left: 55px;
  }

  .total_div {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;

    > div:nth-of-type(1) {
      font-size: 12px;
      color: #757575;
      width: 50%;

      .style__total-price_title {
        font-size: 12px;
        color: #757575;
      }

      .style__total-price_price {
        font-weight: 700;
        color: #212121;
        font-size: 16px;
      }
    }

    .add_both_to_cart {
      border-radius: 4px;
      background-color: #ff6f61;
      padding: 11px 6px;
      cursor: pointer;
      text-transform: uppercase;
      text-align: center;
      float: right;
      width: 135px;

      > a {
        text-decoration: none;
        color: #fff;
        font-size: 12px;
        font-weight: 700;
      }
    }
  }

  .Health_packages {
    background-color: #fdfdfd;
    padding: 26px 16px;
    margin: 20px 0 10px;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 30%);
    border-top: 2px solid #fff;

    > div:nth-of-type(1) {
      display: flex;

      > div:nth-of-type(1) {
        width: 80%;
        font-size: 16px;

        > span:nth-of-type(1) {
          font-size: 18px;
          color: rgba(0, 0, 0, 0.6);
        }

        > span:nth-of-type(2) {
          font-size: 20px;
          color: rgba(0, 0, 0, 0.87);
          display: inline-block;
          margin-top: 6px;
        }
      }

      > div:nth-of-type(2) {
        width: 100px;
        margin-top: -24px;

        > img {
          max-width: 100%;
          vertical-align: middle;
          border: 0;
        }
      }
    }

    > span {
      font-size: 20px;
      color: rgba(0, 0, 0, 0.87);
      display: inline-block;
      margin-top: 6px;
    }

    > div:nth-of-type(2) {
      margin-top: 24px;
      display: flex;
      justify-content: flex-end;

      > div {
        border-radius: 4px;
        background-color: #ff6f61;
        padding: 11px 6px;
        cursor: pointer;
        text-transform: uppercase;
        text-align: center;
        width: 185px;

        > a {
          text-decoration: none;
          color: #fff;
          font-size: 12px;
          font-weight: 700;
        }
      }
    }
  }

  .consult_a_doc {
    background-color: #fff;
    padding: 30px 20px;
    margin: 20px 0;

    > div > a > div {
      display: flex;
      justify-content: center;

      > img {
        width: 103px;
        height: 103px;
        max-width: 100%;
        vertical-align: middle;
        border: 0;
        margin: auto;
      }
    }

    > div > a {
      text-decoration: none;
      color: #ff6f61;
    }

    > div:nth-of-type(2) {
      margin-top: 20px;
      text-align: center;

      > a {
        color: #ff6f61;
        background-color: #fff;
        border: 1px solid #ff6f61;
        line-height: 1rem;
        padding: 10px !important;
        border-radius: 4px;
        font-size: 14px;
        height: auto;
      }
    }
  }

  .icon_container {
    background-color: #fff;
    padding: 30px 20px;
    margin: 20px 0;

    > ul {
      margin: 0;
      padding: 0;
      list-style-type: none;
      font-weight: 400;
      display: flex;
      justify-content: center;

      > li {
        display: inline-block;
        max-width: 56px;
        font-size: 12px;
        margin: 0 5px;

        > div {
          > img {
            display: flex;
            justify-self: center;
            margin: auto;
          }

          > div {
            font-size: 12px;
            text-align: center;
            line-height: 18px;
          }
        }
      }
    }
  }

  .Content_Details {
    background-color: #fff;
    box-shadow: 0 4px 8px 0 rgb(0 0 0 / 10%);
    margin: 20px 0px;

    > div:nth-of-type(1) {
      font-size: 16px;
      color: #2d2d31;
      padding: 1rem 1rem 0;
    }

    > div:nth-of-type(2) {
      padding: 1rem;
      font-size: 12px;
      color: rgba(0, 0, 0, 0.8);
      border-bottom: 1px solid #ececec;
    }

    > div:nth-of-type(3) {
      padding: 0.4rem;
      border-bottom: 1px solid #ececec;

      > div {
        display: flex;

        > div:nth-of-type(1) {
          width: 30%;
          justify-content: center;
          align-items: center;
          max-width: 75px;

          > img {
            max-width: 100%;
            vertical-align: middle;
            border: 0;
            opacity: 1;
            transform: scale(1);
            animation: apear 0.3s ease-in-out;
          }

          @keyframes apear {
            0% {
              opacity: 0;
              transform: scale(1.1);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }
        }

        > div:nth-of-type(2) {
          display: inline-block;
          vertical-align: middle;
          font-size: 12px;
          padding: 0.6rem;
          color: #212121;

          > h3 {
            font-size: 12px;
            margin: 0;
          }

          > a {
            font-weight: 700;
            color: #ff6f61;
            text-decoration: none;
          }
        }
      }
    }
    > div:nth-of-type(4) {
      display: flex;
      padding: 1.5rem 1rem;
      font-size: 12px;

      > div:nth-of-type(1) {
        display: flex;
        align-items: center;

        > img {
          width: 24px;
          opacity: 1;
          transform: scale(1);
          animation: apear 0.3s ease-in-out;
        }
      }

      > div:nth-of-type(2) {
        display: flex;
        flex-wrap: wrap;
        padding-left: 0.75rem;
        white-space: pre;
        align-items: center;

        > h3 {
          margin: 0;
          font-size: 12px;
          color: #1a1a1a;
          font-weight: 400;
        }

        > a {
          font-weight: 700;
          cursor: pointer;
          color: #ff6f61;
          text-decoration: none;
          margin-left: 4px;
        }
      }
    }
  }

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-wrapper {
    width: 677px;
    text-align: center;
    font-size: 18px;
    background: #fff;
  }

  .swiper-wrapper > div > div {
    text-overflow: ellipsis;
    width: unset;
  }

  .swiper-wrapper > div > div > div:nth-of-type(1) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-wrapper > div > div > div:nth-of-type(2) {
    width: unset;
  }

  .swiper-slide {
    width: fit-content;
    margin-right: 0px;
  }

  .swiper-button-next,
  .swiper-button-prev {
    width: 55px;
    top: 172px;
  }

  .swiper-button-next::after {
    width: 58px;
    height: 58px;
    content: "" !important;
    background-image: url("https://www.1mg.com/images/next-round.svg");
  }

  .swiper-button-prev::after {
    width: 58px;
    height: 58px;
    content: "" !important;
    background-image: url("https://www.1mg.com/images/prev-round.svg");
  }

  .swiper-button-disabled::after {
    background-image: none;
  }
`;

export const Listed_product = styled.div`
  display: flex;
  gap: 10px;

  > div > img {
    width: 100%;
    width: 80px;
    max-height: 110px;
  }

  .style__title {
    font-size: 14px;
    font-weight: 500;
    color: #212121;
    display: block;
    line-height: 1.2em;
    max-height: 2.4em;
    overflow: hidden;
  }

  .style__mrp {
    font-size: 12px;
    color: #757575;

    .style__slashed {
      font-size: 12px;
      color: #757575;
      text-decoration: line-through;
    }
  }

  .style__discount {
    font-size: 12px;
    color: #1aab2a;
  }
`;

export const Single_product = styled.div`
  width: 143px;
  padding: 0px 10px 15px;
  margin: 0;
  text-align: left;

  > div:nth-of-type(1) {
    height: 165px;
    margin: 10px 0 27px 0;
    text-align: center;

    > img {
      opacity: 1;
      transform: scale(1);
      animation: apear 0.3s ease-in-out;
      max-height: 100%;
      max-width: 100%;
    }
  }

  > div:nth-of-type(2) {
    width: 160px;
    font-size: 12px;
    color: #212121;
    margin-bottom: 3px;
    height: 25px;
    word-wrap: break-word;
    overflow: hidden;
    white-space: normal;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    cursor: pointer;
  }

  > div:nth-of-type(3) {
    width: 160px;
    font-size: 12px;
    color: #757575;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 100%;
    overflow: hidden;
    margin: 15px 0;
  }

  > div:nth-of-type(4) {
    > div:nth-of-type(1) {
      > span:nth-of-type(1) {
        display: inline-block;
        font-size: 12px;
        color: #757575;
        margin-right: 2px;
      }

      > span:nth-of-type(2) {
        margin-right: 5px;
        text-decoration: line-through;
        display: inline-block;
        font-size: 12px;
        color: #757575;
      }

      > span:nth-of-type(3) {
        font-size: 11px;
        color: #1aab2a;
      }
    }

    > div:nth-of-type(2) {
      display: flex;
      justify-content: space-between;

      > span:nth-of-type(1) {
        font-size: 16px;
        color: #212121;
      }

      > span:nth-of-type(2) {
        font-size: 14px;
        color: #ff6f61;
        font-weight: 700;
        cursor: pointer;
      }
    }
  }
`;
