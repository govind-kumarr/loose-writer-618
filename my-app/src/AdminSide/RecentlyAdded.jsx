import { Button, Heading, Spacer } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Recent from './Recent';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const RecentlyAdded = () => {
  const noofproducts = useSelector(store => store.AdminReducer.products)||[];
  //console.log(noofproducts, "no of products");
 // noofproducts.reverse();
  let style={display:"flex",justifyContent:"center",width:"10%",margin:"auto",padding:"10px",marginTop:"40px",marginBottom:"40px"}
 let x=noofproducts.length;
 console.log(x,"length")
  return (
    <div>
      <div>
      <Heading>Recently Added</Heading>
      <br/>
      
      </div>
      <br/>
      <Product >
        {
          noofproducts.length>0 && noofproducts.map((item,index) => {
            return ((item.id > (x-4)) && <div key={item.id} >
              <Recent id={item.id} title={item.title} image={item.image} price={item.price} category={item.category} type={item.type} subTitle={item.subTitle} rate={item.rate} count={item.count} off={item.off} quantity={item.quantity} max_unit={item.max_unit} /></div>)
          })
        }
      </Product>
      <div>
      <Link to="/check"><Button style={style} colorScheme="teal">See All</Button></Link>
      </div>
    </div>

  )
}
const Product=styled.div`
display: grid;
border: 0px solid green;
grid-template-columns:repeat(4,280px);
justify-content:space-evenly;
//direction:rtl;
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