import React from "react";
import { Link } from "react-router-dom";
import { Nav_Search } from "../Styleing/Navbar_search";

export const Navbar_search = () => {
  return (
    <Nav_Search>
      <div className="navbar1">
        <div className="navbar_inner_div">
          <div className="location_bar_innerdiv">
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
          <div className="navbar_discount">
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
    </Nav_Search>
  );
};
