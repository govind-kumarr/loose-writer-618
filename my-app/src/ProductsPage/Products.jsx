// import productsFeatured from "../database/ProductsFeat"
import React, { useState, useEffect } from "react";
import Sidebar from "./SideBar/Sidebar";
import Cards from "./Cards";
import styles from "./Products.module.css";
import { useDispatch, useSelector } from "react-redux";
import { filter_data, get_data, Products_data_func } from "../Redux/actions";

const Products = () => {
  const { Product_data, isLoading, isError, Fitered_data } = useSelector(
    (state) => state
  );
  console.log("Fitered_data:", Fitered_data);
  const dispatch = useDispatch();
  useEffect(() => {
    Products_data_func(dispatch);
  }, []);

  const handleChange = (e) => {
    filter_data(dispatch, e.target.value);
  };

  return (
    <>
      <div
        style={{ display: isLoading ? "flex" : "none" }}
        className={styles.loading_div}
      >
        <div className={styles.Loader__loader___1IOHb}></div>
      </div>

      <div className={styles.Main_container}>
        <Sidebar />
        <div>
          <div>
            <h2>Featured</h2>
            <div>
              <span>Sort by </span>
              <select onChange={handleChange}>
                <option value="relevance">Relevance</option>
                <option value="lth">By low to high price</option>
                <option value="htl">By High to low price</option>
                <option value="rating">by rating</option>
                <option value="review">by review</option>
              </select>
            </div>
          </div>
          <div className={styles.container}>
            {Fitered_data.map((el) => {
              return (
                <div key={el.id} className="cards">
                  <Cards value={el} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
