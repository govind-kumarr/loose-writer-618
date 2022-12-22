import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";

import { Navbar_dropdown } from "../../Navbar/Components/Navbar_dropdown";
import { Navbar_search } from "../../Navbar/Components/Navbar_search";
import { Product } from "../Styles/Product";
import { Product_div } from "./Product_div";
import { Product_info_component } from "./Product_info";

export const Individual_Product_Page = () => {
  const [product, setProduct] = React.useState({});
  const { type, id } = useParams();

  React.useEffect(() => {
    axios
      .get(`https://mock-test-8th-json-server.herokuapp.com/api/${type}/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.log("error:", error);
      });
  }, []);

  return (
    <>
      <Navbar_search />
      <Navbar_dropdown />
      <Product>
        <Product_div {...product} />
        <Product_info_component {...product} />
      </Product>
    </>
  );
};
