import styled from "styled-components";

export const Signup_container = styled.div`
  display: flex;
  flex-direction: column;

  > div:nth-of-type(1) {
    font-size: 18px;
    height: 100%;
    width: 100%;

    .style__cross-wrapper {
      font-size: 18px;
      padding-top: 6px;
      padding-right: 16px;
      text-align: right;
      color: #333;

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
        }
      }

      > div:nth-of-type(3) {
        margin-bottom: 16px;
        display: flex;
        flex-direction: column;
      }

      > div:nth-of-type(4) {
        > div:nth-of-type(1) {
          display: flex;
          align-items: center;
          gap: 5px;
          margin-top: 20px;

          > input {
            accent-color: #db5b4e;
          }

          > span {
            color: #616161;
            font-size: 12px;
            font-weight: 400;
          }
        }

        > div:nth-of-type(2) {
          margin-top: 50px;
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
          margin-bottom: 10px;
        }

        > div:nth-of-type(3),
        > div:nth-of-type(4) {
          text-align: center;

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

        > div:nth-of-type(5) {
          margin-top: 10px;
          text-align: center;
          font-size: 12px;
          font-weight: 400;
          color: #9e9e9e;
        }

        > div:nth-of-type(6) {
          text-align: center;
          display: flex;
          justify-content: center;
          color: #9e9e9e;
          font-size: 12px;
          font-weight: 400;
          display: flex;
          gap: 4px;
          > span {
            text-decoration: underline;
          }
        }
      }
    }
  }
`;
