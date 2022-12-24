import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

const SearchBar = () => {
  return (
    <Wrapper>
      <div className="navbar1">
        <div className="navbar_inner_div OnlyForLaptopView">
          <div className="location_bar_innerdiv ">
            <div>
              <i
                className="material-icons location_icon"
                style={{ fontSize: "16px" }}
              >
                &#xe0c8;
              </i>
              <input
                className="searchbarinfo styles__search-input___3I6VS"
                type="text"
                autoComplete="off"
                name="name"
                data-auto-search-bar="true"
                placeholder="Enter Your City"
                style={{ fontWeight: "700" }}
              />
              <i
                className="material-icons location_icon"
                style={{ fontSize: "16px" }}
              >
                my_location
              </i>
            </div>
          </div>
          <div className="search_bar">
            <div className="search_bar_innerdiv styles__search-input___3I6VS">
              <input
                className="searchbarinfo"
                type="text"
                autoComplete="off"
                name="name"
                data-auto-search-bar="true"
                placeholder="Search for Medicines and Health Products"
              />

              <div className="search_icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar_2nd_part">
          <div className="spark_img">
            <img
              src="https://res.cloudinary.com/du8msdgbj/image/upload/v1570695364/quick_buy_rebrand_lqpnce.svg"
              alt=""
            />
          </div>
          <div className="navbar_discount ">
            QUICK BUY! Flat 25% off on medicines*
          </div>
          <div className="upload_btn">
            <Link
              className="upload_anc"
              to="/Upload"
              data-auto-upload-prescription="true"
            >
              <span>Upload</span>
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .navbar1 {
    margin: auto;
    height: fit-content;
    display: flex;
    box-sizing: border-box;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid #f1f4f6;
    background: #ffffff;
  }

  
  .navbar_inner_div {
    display: flex;
    justify-content: center;
    background-color: #fff;
    gap: 2px;
    /* border: red solid; */
  }

  .navbar_2nd_part {
    display: flex;
    align-items: center;
    /* border: red solid; */
  }

  .spark_img {
    height: 20px;
    width: 20px;
    display: flex;
    align-items: center;
  }

  .upload_btn {
    /* border: red solid; */
    padding: 5px 10px;
    border-radius: 4px;
    background-color: #ff6f61;
    padding: 10px;
    margin-left: 5px;
    text-decoration: none;
    width: 140px;
    text-align: center;
  }

  .upload_anc {
    text-decoration: none;
    color: #ffffff;
  }

  .navbar_discount {
    /* border: rebeccapurple solid; */
    font-size: 14px;
  }

  .location_bar_innerdiv {
    display: flex;
    align-items: center;
  }

  .location_bar_innerdiv > div {
    display: flex;
    box-sizing: border-box;
    align-items: center;
    background-color: #f1f4f6;
    padding: 0 10px;
    /* border: red solid; */
  }

  .location_icon {
    color: #666666;
  }

  .search_bar {
    padding: 6px 13px 6px 1px;
    width: 55%;
  }



  .search_bar_innerdiv {
    width: 500px;
    position: relative;
    background-color: #f1f4f6;
    /* border: #3e3e3e solid; */
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .search_icon {
    width: 27px;
    height: 33px;
    cursor: pointer;
    display: flex;
    align-items: center;
    /* border: red solid; */
  }

  .searchbarinfo {
    width: 100%;
    font-size: 14px;
    line-height: 21px;
    padding: 6px 30px 7px 0;
    border: none;
    outline: 0;
    bottom: 19px;
    color: #3e3e3e;
    text-indent: 12px;
    height: auto;
    border-radius: 0 3px 3px 0;
    background-color: #f1f4f6;
    display: inline;
  }

  @media screen and (max-width: 800px) {
    .OnlyForLaptopView {
      display: none;
    }
    // .navbar_discount{
    //   font-size:10px;
    // }
  }



`;
export default SearchBar;
