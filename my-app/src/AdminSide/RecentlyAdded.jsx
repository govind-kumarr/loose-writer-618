import { Heading } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import Recent from "./Recent";
import "./RecentlyAdded.css";

const RecentlyAdded = () => {
  const noofproducts =
    useSelector((store) => store.AdminReducer.products) || [];
  //console.log(noofproducts, "no of products");
  // noofproducts.reverse();
 
  let x = noofproducts.length;
  console.log(x, "length");

  

  return (
    <div >
      <div >
        <Heading>Recently Added</Heading>
        <br />
      </div>
      <br />
      <div className="style1">
      
        {noofproducts.length > 0 &&
          noofproducts.map((item, index) => {
            return (
              item.id > x - 4 && (
                <div className="style2" key={item.id}>
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
              )
            );
          })}
     
      </div>
      
      <br />
      <br />
    </div>
  );
};

export default RecentlyAdded;
