import styled from "styled-components";

export const Nav_dropdown = styled.div`
  .dropdown_div {
    display: flex;
    justify-content: center;
    font-size: 10px;
    box-sizing: border-box;
    border-bottom: 1px solid #dedede;
    background: #ffffff;
  }

  .dropdown_icon {
    margin-left: 5px;
    font-size: 10px;
  }

  ul {
    box-sizing: border-box;
    justify-content: center;
    font-weight: 400;
    font-size: 14px;
    text-align: center;
    list-style: none;
    background: #ffffff;
    padding: 0px;
    line-height: 1.42857143;
    margin: 0;
    font-family: "Clear Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
  ul li {
    display: inline-block;
    position: relative;
    text-align: left;
  }
  ul li a {
    display: block;
    padding: 5px 15px;
    color: #333;
    text-decoration: none;
  }

  ul li a:hover {
    color: #ff6f61 !important;
  }

  ul li ul.dropdown {
    min-width: 100%; /* Set width of the dropdown */
    background: #ffffff;
    display: none;
    position: absolute;
    z-index: 999;
    left: 0;
    padding: 0;
    /* border: red solid; */
  }
  ul li:hover ul.dropdown {
    display: block; /* Display the dropdown */
  }
  ul li ul.dropdown li {
    display: block;
  }

  .container1 {
    background-color: #ffffff;
    box-sizing: border-box;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: auto;
    padding: 10px 0;
    border-radius: 2px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
      rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    /* border: green solid; */
  }

  .container2 {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: auto;
    position: absolute;
    right: 0;
    background-color: #ffffff;
    padding: 10px 0;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
      rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  }

  .container1 > div {
    width: 213px;
    font-size: 12px;
    text-align: center;
    color: #666;
    height: fit-content;
    border-left: 1px #dedede solid;
    line-height: 16px;
    /* border: red solid; */
  }
  .container2 > div {
    width: 213px;
    font-size: 12px;
    height: fit-content;
    border-left: 1px #dedede solid;
    line-height: 16px;
    /* border: green solid; */
  }

  .container1 a {
    font-size: 11.4px;
    color: #333;
    font-weight: 550;
  }

  .container2 a {
    font-size: 12px;
    color: #333;
    font-weight: 550;
  }

  .notborder {
    border: 0px solid !important;
  }

  .innerli > a {
    /* border: red solid; */
    font-size: 11px !important;
    font-weight: 400 !important;
    color: #757575 !important;
  }
`;
