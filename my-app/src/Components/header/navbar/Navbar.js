import React from "react";
import NavbarTop from "./NavbarTop";
import Navbar_Bottom from "./Navbar_Bottom";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <>
      <NavbarTop />
      <SearchBar />
      <Navbar_Bottom />
    </>
  );
};

export default Navbar;
