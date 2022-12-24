import { Heading } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import Recent from "./Recent";
import styled from "styled-components";

const RecentlyAdded = () => {
  const noofproducts =
    useSelector((store) => store.AdminReducer.products) || [];
  //console.log(noofproducts, "no of products");
  // noofproducts.reverse();
 
  let x = noofproducts.length;
  console.log(x, "length");

  const style={border:"1px solid blue",width:"100%",display:"flex",justifyContent:"space-around",gap:"10px"}
  const style1={border:"1px solid lightblue",width:"100%"}
  const style3={border:"1px solid red",width:"220px"}

  return (
    <div style={style1}>
      <div >
        
        <Heading>Recently Added</Heading>
        <br />
      </div>
      <br />
      <div style={style}>
      
        {noofproducts.length > 0 &&
          noofproducts.map((item, index) => {
            return (
              item.id > x - 4 && (
                <div style={style3} key={item.id}>
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
// const Product = styled.div`
//   display: grid;
//   border: 0px solid green;
//   grid-template-columns: repeat(4, 280px);
//   justify-content: space-evenly;
//   //direction:rtl;
//   @media all and (min-width: 0px) and (max-width: 481px) {
//     grid-template-columns: repeat(1, minmax(280px, max-content));
//     grid-row-gap: 10px;
//   }
//   @media all and (min-width: 482px) and (max-width: 768px) {
//     grid-template-columns: repeat(2, minmax(280px, max-content));
//     grid-row-gap: 10px;
//   }
// `;
export default RecentlyAdded;
