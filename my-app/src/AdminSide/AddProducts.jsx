import React, { useEffect, useState } from "react";
import "./AddProducts.css";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { addProduct, getProducts } from "../Redux/AdminPanel/action";
import { getLocalData, saveData } from "../Utils/localStorageData";
import { Link } from "react-router-dom";
import { Button, Heading,Spinner,Box } from "@chakra-ui/react";
import axios from "axios";
import { BasicUsage } from "./Basic";
import { BasicAdded } from "./BasicAdded";
import RecentlyAdded from "./RecentlyAdded";
import AddProductMenu from "./AddProductMenu";
import RightAddIcon from "./Admin-Components/RightAddIcon";
import Admin_Table from "./Admin-Components/Admin_Table";
import Statistcs from "./Admin-Components/Statistcs";


// This is Data kept in Add Product form 
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

// This is AddProducts Component Starts here

const AddProducts = () => {

  const [data, setData] = useState(startData);

// Destructuring the data from 'data' useState
  const { title, subTitle, price, category, type, image, rate, count, off, quantity, max_unit} = data;

// Dispatch is to send the get Products request function to store using the middleware thunk;
  const dispatch = useDispatch();

// This useSelector takes the products from redux store ;
  const produ =useSelector((store) => {
      //console.log(store, "store");
      return store.AdminReducer.products;
    }) || [];
// Products gets stored in produ variable

  const isLoading = useSelector((store) => store.AdminReducer.isLoading);
  const isError = useSelector((store) => store.AdminReducer.isError);

// This alert related to submiting the 'Add Product' form 
  const [allert, setallert] = useState(false);
  const [alert0, setAlert0] = useState(false);

  const [formFalse, setFormFalse] = useState(true);
  const [stats, setStats] = useState(true);

  

  useEffect(() => {
    dispatch(getProducts()).then((r) => {
      
    });
    window.scrollTo(0,0)
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
    // This is for form Validation
    if ( title && subTitle && price && category && type && image && rate && count && off && quantity && max_unit ) {
      dispatch(addProduct(data)).then((r) => {
        
        dispatch(getProducts()).then((r) => {
         
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
  const handleForm = () => {
    setFormFalse(!formFalse);
  };

  const handleStatistics = () => {
    setStats(!stats);
  };

  if (isLoading) {
    return (<Box>
  <Spinner
      thickness='4px'
      speed='0.65s'
      emptyColor='gray.200'
      color='#ff6347'
      size='xl'
  />
  <Heading>..Loading..</Heading>
</Box>);
  }
  if (isError) {
    return <Heading>OOps API is not working now!</Heading>;
  }

  return (
    <div className="entire">
      <Heading>Admin Panel</Heading>
      <br/>
      <div className="whole-container">
        <div className="left-side-table">
          <Admin_Table
            handleForm={handleForm}
            handleStatistics={handleStatistics}
          />
        </div>
        <div className="show-right-side">
          <div className={stats?"hide-stats":"show-stats"}>
            <Statistcs produ_length={produ.length} />
          </div>
          <br />

          <div>
            <div className={formFalse ? "hide-form" : "add-product-wrapper"}>
              <form onSubmit={handleSubmit}>
                <AddProductMenu
                  handleChange={handleChange}
                  handleForm={handleForm}
                  title={title}
                  subTitle={subTitle}
                  price={price}
                  category={category}
                  type={type}
                  image={image}
                  rate={rate}
                  count={count}
                  off={off}
                  quantity={quantity}
                  max_unit={max_unit}
                />
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
          </div>
          <div>
             <RecentlyAdded /> 
          </div>
        </div>
      </div>
    </div>
  );
};



export default AddProducts;