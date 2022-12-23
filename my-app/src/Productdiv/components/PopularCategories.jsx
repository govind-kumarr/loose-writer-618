import React from "react";
import popularBrand from "../../database/popular";
import Avatar from "./Avatar";

import "./style.css";

const PopularCategories = () => {
  return (
    <>
      <div className="product_container">
        <div className="cat-title">
          <span className="style__heading___pc8n7">Popular Categories</span>
          <span>
            <button>SEE ALL</button>
          </span>
        </div>
        <div className="bigcontainer">
          {popularBrand.map((elem) => {
            return (
              <div key={elem.id} className="smallcontainer">
                <Avatar fecture={elem} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PopularCategories;
