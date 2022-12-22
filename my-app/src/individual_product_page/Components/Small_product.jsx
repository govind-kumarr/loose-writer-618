import React from "react";
import { Listed_product } from "../Styles/Product";

const Small_product = ({ data }) => {
  return (
    <Listed_product>
      <div>
        <img src={data.image_url} alt="Product" />
      </div>
      <div>
        <span className="style__title">{data.name}</span>
        <div>
          <span className="style__mrp">
            MRP <span className="style__slashed">{data.mrp}</span>
          </span>
          <span className="style__discount">{data.discount}</span>
        </div>
        <span className="style__price">{data.price}</span>
      </div>
    </Listed_product>
  );
};

export default Small_product;
