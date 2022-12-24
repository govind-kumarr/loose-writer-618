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
  handleHot
}) => {
  const dispatch = useDispatch();

  const deleteHandle = (id) => {
    console.log(id, "id");
    dispatch(deleteproduct(id)).then((r) => {
      dispatch(getProducts());
      handleHot()
    });
  };
  const handlePlus = (id) => {
    dispatch(patchProduct(id, Number(quantity) + 1)).then((r) => {
      dispatch(getProducts());
      handleHot()
    });
  };
  const handleMinus = (id) => {
    
    dispatch(patchProduct(id, Number(quantity) - 1)).then((r) => {
      dispatch(getProducts());
      handleHot()
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
              className="add-to-cart"
              onClick={() => handlePlus(id)}
            >
             <div className="min-plus"> + </div>
            </button>
            
              <span className="product-quantity">{quantity}</span>
            
            <button
              
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
