import styled from "styled-components";

export const Otp_container = styled.div`
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
      padding: 0 100px;

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

          > span {
            margin-left: 4px;
            color: #ff6f61;
            cursor: pointer;
            font-weight: 700;
          }
        }
      }

      > div:nth-of-type(3) {
        margin-bottom: 16px;
        display: flex;
        flex-direction: column;
      }

      > div:nth-of-type(4) {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 25px;
        gap: 20px;

        > span {
          font-size: 14px;
          color: #ff6f61;
          cursor: pointer;
          font-weight: 700;
        }
      }

      > div:nth-of-type(5) {
        > div:nth-of-type(1) {
          margin-top: 130px;
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
