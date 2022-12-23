import React from "react";
import styled from "styled-components";
import "./recent.css";
import { Text, Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import {
  deleteproduct,
  getProducts,
  patchProduct,
} from "../Redux/AdminPanel/action";
import { DeleteChakra } from "./DeleteChakra";

const Recent = ({
  id,
  title,
  image,
  price,
  category,
  type,
  subTitle,
  rate,
  count,
  off,
  quantity,
  max_unit,
}) => {
  const dispatch = useDispatch();

  const deleteHandle = (id) => {
    console.log(id, "id");
    dispatch(deleteproduct(id)).then((r) => {
      dispatch(getProducts);
    });
  };
  const handlePlus = (id) => {
    dispatch(patchProduct(id, quantity + 1)).then((r) => {
      dispatch(getProducts);
    });
  };
  const handleMinus = (id) => {
    dispatch(patchProduct(id, quantity - 1)).then((r) => {
      dispatch(getProducts);
    });
  };

  return (
    <div className="card-container">
      <div className="title" >
      <Text fontSize="md" as="b">
        {title}
      </Text>
      </div>
      
      <br />
      <br />
      <div className="grand-img-bottom">
        <div className="img-div">
          <img src={image} alt="product" />
        </div>
        <br />
        <div className="price-off">
          <div><span className="bold">Cost:- </span>₹{price}</div>
          <div><span className="bold">Off:- </span>{off}%</div>
        </div>
        <div className="category-type">
          <Text><span className="bold">Category:</span> {category}</Text>
          <Text><span className="bold">Type: </span>{type}</Text>
        </div>
        <div className="delete-edit">
          <div >
            <DeleteChakra id={id} deleteHandle={deleteHandle}/>
          </div>
          <div>
            <button
              data-cy="add-to-cart"
              className="add-to-cart"
              onClick={() => handlePlus(id)}
            >
             <div className="min-plus"> + </div>
            </button>
            
              <span className="product-quantity">{quantity}</span>
            
            <button
              data-cy="remove-from-cart"
              className="remove-from-cart"
              onClick={() => handleMinus(id)}
            >
             <div className="min-plus">-</div> 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recent;
