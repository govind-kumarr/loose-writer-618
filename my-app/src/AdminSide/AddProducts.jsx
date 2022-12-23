import React, { useEffect, useState } from "react";
import "./AddProducts.css";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { addProduct, getProducts } from "../Redux/AdminPanel/action";
import { getLocalData, saveData } from "../Utils/localStorageData";
import { Link } from "react-router-dom";
import {
  Button,
  Heading,
} from "@chakra-ui/react";
import axios from "axios";
import { BasicUsage } from "./Basic";
import { BasicAdded } from "./BasicAdded";
import RecentlyAdded from "./RecentlyAdded";
import AddProductMenu from "./AddProductMenu";
import RightAddIcon from "./Admin-Components/RightAddIcon";

const startData = {
  title: "x",
  subTitle: "y",
  price: "5",
  category: "",
  type: "5",
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEfESPkZA4oTifLTyp_UuxhgFiAKD9m2UKwQ&usqp=CAU",
  rate: "5",
  count: "5",
  off: "5",
  quantity: "5",
  max_unit: "5",
};
const AddProducts = () => {
  const [data, setData] = useState(startData);
  const {
    title,
    subTitle,
    price,
    category,
    type,
    image,
    rate,
    count,
    off,
    quantity,
    max_unit,
  } = data;
  const dispatch = useDispatch();
  const produ =
    useSelector((store) => {
      console.log(store, "store");
      return store.AdminReducer.products;
    }) || [];
  const isLoading = useSelector((store) => store.AdminReducer.isLoading);
  const isError = useSelector((store) => store.AdminReducer.isError);

  const [allert, setallert] = useState(false);
  const [alert0, setAlert0] = useState(false);

  const [formFalse,setFormFalse]=useState(true);

  //console.log("cheked")
  // console.log(produ, "products in add product")

  useEffect(() => {
    console.log("1st");
    dispatch(getProducts()).then((r) => {
      console.log(r, "in useEffect get");
    });
    console.log("2st");
    //axios.delete(`https://onemgfree-api-server.onrender.com/products/109`)
  }, []);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const val = type === "number" ? Number(value) : value;
    setData({
      ...data,
      [name]: val,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      title &&
      subTitle &&
      price &&
      category &&
      type &&
      image &&
      rate &&
      count &&
      off &&
      quantity &&
      max_unit
    ) {
      dispatch(addProduct(data)).then((r) => {
        console.log(r.data, "r after add");
        dispatch(getProducts).then((r) => {
          console.log(r.data, "after add get");
        });
      });
      setData(startData);

      setallert(true);
    } else {
      setAlert0(true);
    }
  };
  const handleClose = () => {
    setAlert0(false);
    setallert(false);
  };
  const handleForm=()=>{
      setFormFalse(!formFalse)
  }

  if (isLoading) {
    return <Heading>...Loading....</Heading>;
  }
  if (isError) {
    return <Heading>OOps API is not working now!</Heading>;
  }

  return (
    <div className="entire">
      <Heading>Admin Panel</Heading>
      <Top>
        <TopDiv style={{ display: "flex", position: "relative" }}>
          <NoOfProducts>Total No of Products :-</NoOfProducts>
          <div data-cy="navbar-cart-count" className="navbar-cart-count">
            {produ.length}
          </div>
          <Link to="/cart">
            <img
              data-cy="cart-image-link"
              src="./shopping-cart.png"
              alt="cart"
              width="30px"
            />
          </Link>
        </TopDiv>
      </Top>
      <br />
      <div className="right-add-icon">
          <RightAddIcon handleForm={handleForm}/>
      </div>
      <div>
        <div className={formFalse?"hide-form":"add-product-wrapper"}>
          <form onSubmit={handleSubmit}>
             <AddProductMenu handleChange={handleChange} handleForm={handleForm}  title={title} subTitle={subTitle} price={price} category={category} type={type} image={image} rate={rate} count={count} off={off} quantity={quantity} max_unit={max_unit}/> 
          </form>
          {alert0 ? (
            <BasicUsage
              handleClose={handleClose}
              children={"Please fill all the input fields proprely"}
            />
          ) : (
            ""
          )}
          {allert ? <BasicAdded handleClose={handleClose} /> : ""}
        </div>
        <br />
        <RecentlyAdded />
      </div>
    </div>
  );
};




// const Button = styled.button`
//     border:1px solid blue;
//     text-align:center;
//     width:30%;
//     color:blue;
//     font-size:22px;  f
// `

const NoOfProducts = styled.div`
  border: 0px solid green;
  text-align: left;
  color: green;
  margin-right: 6px;
  font-size: 20px;
  @media all and (min-width: 0px) and (max-width: 481px) {
    text-align: center;
    align-self: center;
  }
  @media all and (min-width: 481px) and (max-width: 768px) {
    text-align: center;
  }
`;

const TopDiv = styled.div`
border:0px solid pink;
width:max-content;
img{
    margin-left:12px;
}
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}
`;
const Top = styled.div`
  border: 0px solid blue;
  margin-left: 20px;

  @media all and (min-width: 0px) and (max-width: 481px) {
    display: flex;
    justify-content: center;
  }
  @media all and (min-width: 481px) and (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

export default AddProducts;
