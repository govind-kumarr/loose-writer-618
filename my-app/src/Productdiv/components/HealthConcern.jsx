import React from "react";
import shopByHealthConcerns from "../../database/healthconcern";
import Avatar from "./Avatar";

import "./style.css";

const Healthconcern = () => {
  return (
    <>
      <div className="product_container">
        <div className="cat-title">
          <span className="style__heading___pc8n7">
            Shop by Health Concerns
          </span>
          <span>
            <button>SEE ALL</button>
          </span>
        </div>
        <div className="bigcontainer">
          {shopByHealthConcerns.map((elem) => {
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

export default Healthconcern;
