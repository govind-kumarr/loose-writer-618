import React from "react";
import { Navbar_dropdown } from "../Navbar/Components/Navbar_dropdown";
import { Navbar_search } from "../Navbar/Components/Navbar_search";
import Products from "./Products";
import Sidebar from "./SideBar/Sidebar";

export const Main_product_page = () => {
  return (
    <div>
      <Navbar_search />
      <Navbar_dropdown />
      <Products />
    </div>
  );
};
