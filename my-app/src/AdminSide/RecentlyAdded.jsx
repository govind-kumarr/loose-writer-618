import { Heading } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Recent from './Recent';
import styled from 'styled-components';
const RecentlyAdded = () => {
  const noofproducts = useSelector(store => store.AdminReducer.products);
  //console.log(noofproducts, "no of products");
 // noofproducts.reverse();
  console.log(noofproducts,"no of products after reverse")
 let x=noofproducts.length;
 console.log(x,"length")
  return (
    <div>
      <Heading>Recently Added</Heading>
      <Product >
        {
          noofproducts.map((item,index) => {
            return ((item.id > (x-4)) && <div key={item.id} >
              <Recent id={item.id} title={item.title} image={item.image} price={item.price} category={item.category} type={item.type} subTitle={item.subTitle} rate={item.rate} count={item.count} off={item.off} quantity={item.quantity} max_unit={item.max_unit} /></div>)
          })
        }
      </Product>
    </div>

  )
}
const Product=styled.div`
display: grid;
border: 1px solid green;
grid-template-columns:repeat(4,280px);
justify-content:space-evenly;
direction:rtl;
@media all and (min-width:0px) and (max-width:481px){
  grid-template-columns:repeat(1,minmax(280px,max-content));
  grid-row-gap:10px;
}
@media all and (min-width:482px) and (max-width:768px){
  grid-template-columns:repeat(2,minmax(280px,max-content));
  grid-row-gap:10px;
}

`
export default RecentlyAdded