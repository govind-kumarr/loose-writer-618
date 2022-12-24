import React from "react";
import NavbarAdsection from "../Components/header/navbar/NavbarAdsection.js";
import LastsecFooter from "../Components/LastsecFooter.jsx";
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
    <NavbarAdsection />
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
