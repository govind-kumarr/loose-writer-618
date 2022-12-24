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

  const style={border:"1px solid blue",width:"100%",display:"flex",justifyContent:"space-around",gap:"10px"}
  const style1={border:"0px solid lightblue",width:"100%"}
  const style3={border:"1px solid red",width:"240px"}

  return (
    <div  style={style1}>
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
