import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../Redux/AdminPanel/action";
import { Heading } from "@chakra-ui/react";
import Recent from "./Recent";
import InputSearch from "./InputSearch";
import "./Check.css";
import FilterMenu from "./FilterMenu";

const Check = () => {
  const checkProducts = useSelector((store) => store.AdminReducer.products);
  const checkIsLoading = useSelector((store) => store.AdminReducer.isLoading);
  const checkIsError = useSelector((store) => store.AdminReducer.isError);
  const dispatch = useDispatch();
  const ref = useRef(null);

  useEffect(() => {
    dispatch(getProducts);
    ref.current.scrollIntoView();
  }, []);

  if (checkIsLoading) {
    return <Heading>...Loading...</Heading>;
  }
  if (checkIsError) {
    return <Heading>.. OOps something went wrong with API ..</Heading>;
  }
  return (
    <div>
      <br />
      <Heading ref={ref}>All the Products</Heading>
      <br />
      <InputSearch />
      {/* <div className="sorting">Sorting By</div> */}
      <div className="main-container">
        <div>
          <FilterMenu />
        </div>
        <div className="container">
          {checkProducts.length > 0 &&
            checkProducts.map((item) => {
              return (
                <div key={item.id}>
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
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Check;
