import React from "react";
import LastsecFooter from "../Components/LastsecFooter";
import Advertisement from "../Navbar/Components/Advertisement";
import { Navbar_dropdown } from "../Navbar/Components/Navbar_dropdown";
import { Navbar_search } from "../Navbar/Components/Navbar_search";
import Ayurved from "../Productdiv/components/Ayurveda";
import FeaturedBrand from "../Productdiv/components/FeaturedBrand";
import Healthconcern from "../Productdiv/components/HealthConcern";
import PopularCategories from "../Productdiv/components/PopularCategories";
import ShopByConcern from "../Productdiv/components/ShopByConcern";
import ComboDeals from "./Home_products/ComboDeals.jsx";
import DealsDay from "./Home_products/DealsDay.jsx";
import Flashdeals from "./Home_products/FlashDeals.jsx";
import ProductDetails from "./Home_products/ProductDetails.jsx";
import TataMg from "./Home_products/TataMg.jsx";
import Trending from "./Home_products/Trending.jsx";

const Home = () => {
  return (
    <div style={{ backgroundColor: "#f1f4f6" }}>
      <Navbar_search />
      <Navbar_dropdown />
      <Advertisement />
      <FeaturedBrand />
      <Trending />
      <ProductDetails />
      <PopularCategories />
      <DealsDay />
      <ShopByConcern />
      <TataMg />
      <ComboDeals />

      <Healthconcern />
      <Flashdeals />
      <Ayurved />
      <LastsecFooter />
    </div>
  );
};

export default Home;
