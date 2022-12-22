import styled from "styled-components";

export const Otp_container = styled.div`
  display: ${(props) => (props.disabled ? "block" : "none")};

  #container {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
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
  }

  #otpform {
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    gap: 20px;
    margin: auto;
    background-color: #ffffff;
    border-radius: 30px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    /* border: rebeccapurple solid; */
  }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  #otpcontiner {
    display: grid;
    grid-template-columns: repeat(4, 50px);
    grid-template-rows: 50px;
    font-size: 50px;
    gap: 20px;
    justify-content: center;
  }

  #otpcontiner > input {
    text-align: center;
  }

  h3 {
    margin-bottom: -15px;
  }

  .num_resend {
    color: #dc3545;
    font-weight: 600;
    cursor: pointer;
  }

  .text {
    color: #989696;
  }

  input:not(#btn) {
    font-size: 30px;
    justify-content: center;
  }

  #btn {
    margin: auto;
    width: 100px;
    height: 50px;
  }
`;
