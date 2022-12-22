import styled from "styled-components";

export const Box = styled.div`
  display: ${(props) => (props.block ? "block" : "none")};
  z-index: 10001;
  position: relative;
  text-transform: none;
`;

export const Blok = styled.div`
  font-size: 14px;
  font-family: Clear Sans, Helvetica Neue, Helvetica, Arial, sans-serif;
  background-color: rgba(0, 0, 0, 0.65);
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 10000;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    display: flex;
    justify-content: center;
    max-height: 640px;
    width: fit-content;
    overflow: scroll;
    overflow: hidden;
    border-radius: 8px;

    > div:nth-of-type(1) {
      display: flex;
      align-items: center;
      justify-content: center;
      border-right: 1px solid #f5f5f5;
    }

    > div:nth-of-type(2) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-right: 1px solid #f5f5f5;
    }

    > div {
      background-color: #fff;
      display: block;
      width: 500px;
      height: 500px;
    }
  }

  .swiper-wrapper {
    width: 100%;
  }

  .swiper-slide {
    height: 308px;
    margin: auto;

    > div:nth-of-type(1) {
      font-size: 20px;
      font-weight: 700;
      color: #4a4a4a;
      margin: 50px 0 20px;
    }

    > div:nth-of-type(2) {
      font-size: 14px;
      padding: 0 50px;
      color: #686363;
      font-weight: 100;
    }
  }

  .swiper-pagination-bullet {
    background-color: hsla(0, 0%, 46%, 0.87);
  }

  .swiper-pagination-bullet-active {
    background-color: #a5a5a5;
  }

  .swiper-pagination {
    bottom: 110px !important;
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
`;

export const Form_container = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: none;

  > div:nth-of-type(1) {
    font-size: 18px;
    height: 100%;
    width: 100%;
    color: #666;

    .style__cross-wrapper {
      font-size: 18px;
      padding-top: 6px;
      padding-right: 16px;
      text-align: right;

      .style__pointer {
        cursor: pointer;
      }
    }

    > div:nth-of-type(2) {
      margin-top: 16px;
      padding: 0 50px;

      .LS_heading {
        font-size: 28px;
        font-weight: 700;
        display: flex;
        justify-content: left;
        color: #000000;
      }

      .otp_text {
        margin: 10px 0 60px;
        display: flex;
        justify-content: left;

        .otp_text_span {
          color: #616161;
          font-size: 12px;
          font-weight: 400;
          text-align: left;
        }
      }

      > div:nth-of-type(3) {
        margin-bottom: 16px;
        display: flex;
        flex-direction: column;
      }

      > div:nth-of-type(4) {
        > div:nth-of-type(1) {
          margin-top: 100px;
          background-color: rgb(255, 111, 97);
          color: rgb(255, 255, 255);
          height: 40px;
          padding: 0px 16px;
          text-decoration: none;
          display: flex;
          font-weight: 700;
          font-size: 16px;
          border-radius: 4px;
          z-index: 100;
          cursor: pointer;
          align-items: center;
          justify-content: center;
          border: 1px solid rgb(255, 111, 97);
        }

        > div:nth-of-type(2) {
          height: 40px;
          margin-top: 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;

          > div:nth-of-type(1),
          div:nth-of-type(2) {
            > span:first-child {
              font-size: 14px;
              color: #616161;
              font-weight: 400;
            }
            > span:last-child {
              color: #ff6f61;
              cursor: pointer;
              font-weight: 700;
              font-size: 14px;
            }
          }

          > div:nth-of-type(3) {
            margin-top: 10px;
            font-size: 12px;
            font-weight: 400;
            color: #9e9e9e;
          }

          > div:nth-of-type(4) {
            color: #9e9e9e;
            font-size: 12px;
            font-weight: 400;
            display: flex;
            gap: 4px;

            > span {
              text-decoration: underline;
            }
          }

          > div:nth-of-type(5) {
            margin-top: 3px;
            margin-bottom: 30px;
            color: #ff6f61;
            cursor: pointer;
            font-weight: 700;
            font-size: 12px;
          }
        }
      }
    }
  }
`;
