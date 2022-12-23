import React from "react";
import grandSavings from "../../database/grandsaving";
import Avatar from "./Avatar";

const ShopByConcern = () => {
  return (
    // <div>ShopByConcern</div>
    <>
      <div className="product_container">
        <div className="cat-title">
          <span className="style__heading___pc8n7">Deals of the day</span>
          <span>
            <button>SEE ALL</button>
          </span>
        </div>
        <div className="bigcontainer">
          {grandSavings.map((elem) => {
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

export default ShopByConcern;
