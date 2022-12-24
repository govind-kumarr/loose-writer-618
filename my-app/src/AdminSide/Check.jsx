import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../Redux/AdminPanel/action";
import { Heading,Button } from "@chakra-ui/react";
import Recent from "./Recent";
import InputSearch from "./InputSearch";
import "./Check.css";
import FilterMenu from "./FilterMenu";
import SortRightIcon from "./Admin-Components/SortRightIcon";
import { useSearchParams, useLocation } from "react-router-dom";
import {Link} from "react-router-dom";
import axios from "axios";

const Check = () => {
  const checkProducts = useSelector((store) => store.AdminReducer.products);
  const checkIsLoading = useSelector((store) => store.AdminReducer.isLoading);
  const checkIsError = useSelector((store) => store.AdminReducer.isError);
  const dispatch = useDispatch();
  const ref = useRef(null);
  const [searchParams] = useSearchParams();
  const location = useLocation();

  const [checkedProducts, setCheckedProducts] = useState(checkProducts);

  const CategoryNames = ["Devices", "COVID", "Diabetes", "Supplement"];
  const TypeNames = ["Box", "Packet", "Bottle", "Strip", "Jar", "Tin"];

  const searchURL = searchParams.getAll("cate");

  useEffect(() => {
    
    if (location) {
      const searchURL = searchParams.getAll("cate");
      var cate;
      if (
        (searchURL.includes("COVID") ||
          searchURL.includes("Devices") ||
          searchURL.includes("Diabetes") ||
          searchURL.includes("Supplement")) &&
        (searchURL.includes("Box") ||
          searchURL.includes("Packet") ||
          searchURL.includes("Bottle") ||
          searchURL.includes("Jar") ||
          searchURL.includes("Tin") ||
          searchURL.includes("Strip"))
      ) {
        const queryParams = {
          params: {
            category: searchURL,
            type: searchURL,
            _sort: "desc" && "price",
            _order: "desc",
          },
        };
        console.log(searchURL, "searchUrl in check");

        dispatch(getProducts(queryParams));
      } else {
        const searchURL = searchParams.getAll("cate");
      var cate;
        if (
          searchURL.includes("COVID") ||
          searchURL.includes("Devices") ||
          searchURL.includes("Diabetes") ||
          searchURL.includes("Supplement")
        ) {
          cate = "category";
        } else if (
          searchURL.includes("Box") ||
          searchURL.includes("Packet") ||
          searchURL.includes("Bottle") ||
          searchURL.includes("Jar") ||
          searchURL.includes("Tin") ||
          searchURL.includes("Strip")
        ) {
          cate = "type";
        } else {
          cate = "category";
        }
        var queryParams = {
          params: {
            [cate]: searchURL,
            _sort: "desc" && "price",
            _order: "desc",
          },
        };
        
        dispatch(getProducts(queryParams));
      }
    }

    ref.current.scrollIntoView();
  }, [location.search]);

  if (checkIsLoading) {
    return <Heading>...Loading...</Heading>;
  }
  if (checkIsError) {
    return <Heading>.. OOps something went wrong with API ..</Heading>;
  }

  // <----Sorting --->
  const handleAscending = () => {
    checkProducts.sort((a, b) =>
      a.price > b.price ? 1 : b.price > a.price ? -1 : 0
    );
    const ascProducts=[...checkProducts];
    setCheckedProducts(ascProducts);
    
  };

  const handleDescending = () => {
    checkProducts.sort((a, b) =>
      a.price > b.price ? -1 : b.price > a.price ? 1 : 0
    );
    const descProducts=[...checkProducts]
    
    setCheckedProducts(descProducts);
  };
  const handleRelevance = () => {
    setCheckedProducts([]);
  };
  const handleFilter=(ind,type)=>{
    setCheckedProducts([]);
  }
  const handleSearch=()=>{
    setCheckedProducts([]);
  }
  const handleHot=()=>{
    setCheckedProducts([]);
  }
  console.log(checkedProducts,"checked Products")
  let products2 = checkedProducts.length > 0 ? checkedProducts : checkProducts;

  return (
    <div>
      <br />
      <Heading ref={ref}>All the Products</Heading>
      <br />
      <InputSearch handleSearch={handleSearch}/>
      <div  className="sorting">
        <Link to="/admin-panel">
          <Button style={{marginRight:"40px",width:"100%"}} backgroundColor={"aqua"}>Back To Admin-Panel</Button>
        </Link>
    
        <div style={{marginRight:"10px",marginLeft:"20px"}}>Sorting By </div>
        <SortRightIcon 
          handleAscending={handleAscending}
          handleDescending={handleDescending}
          handleRelevance={handleRelevance}
        />
        
      </div>
      <div className="main-container">
        <div className="filter">
          <div>Filter By</div>
          <div>
            <FilterMenu type={"category"} names={CategoryNames} handleFilter={handleFilter}/>
          </div>
          <div>
            <FilterMenu type={"type"} names={TypeNames} handleFilter={handleFilter} />
          </div>
        </div>
        <div className="container" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)"}}>
           {products2.length > 0 &&
            products2.map((item) => {
              return (
                <div className="check-card" key={item.id}>
                  <Recent
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    category={item.category}
                    type={item.type}
                    subTitle={item.subTitle}
                    rate={item.rate}
                    count={item.count}
                    off={item.off}
                    quantity={item.quantity}
                    max_unit={item.max_unit}
                    handleHot={handleHot}
                  />
                </div>
              );
            })}
        </div>
      </div>
      <div>
        <Button backgroundColor={"aqua"} onClick={()=>ref.current.scrollIntoView()}>Go To Top </Button>
      </div>
      <div className="button-topUP">
      <Button backgroundColor={"teal"} onClick={()=>ref.current.scrollIntoView()}>Go To Top </Button>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Check;