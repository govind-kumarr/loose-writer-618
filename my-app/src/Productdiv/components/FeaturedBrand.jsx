import React from "react";
import featureBrand from "../../database/feauturedBrand";
import Avatar from "./Avatar";

import "./style.css";

// console.log(featureBrand);

const FeaturedBrand = () => {
  return (
    <>
      <div className="product_container">
        <div className="cat-title">
          <div className="style__heading___pc8n7">Featured brands</div>
          <div>
            <button>SEE ALL</button>
          </div>
        </div>
        <div className="bigcontainer">
          {featureBrand.map((elem) => {
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

export default FeaturedBrand;
