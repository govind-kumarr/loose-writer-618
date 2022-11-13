import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProducts } from '../Redux/AdminPanel/action';
import { Heading } from '@chakra-ui/react';
import Recent from "./Recent";
import InputSearch from './InputSearch';

const Check = () => {

  const checkProducts = useSelector((store) => store.AdminReducer.products);
  const checkIsLoading = useSelector((store) => store.AdminReducer.isLoading);
  const checkIsError = useSelector((store) => store.AdminReducer.isError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts)
  }, [])

  if (checkIsLoading) {
    return (
      <Heading>...Loading...</Heading>
    )
  }
  if (checkIsError) {
    return (
      <Heading>.. OOps something went wrong with API ..</Heading>
    )
  }
  return (
    <div>
      <br/>
      <Heading>All the Products</Heading>
      <br/>
      <InputSearch/>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,max-content))", justifyContent: "space-evenly", gridRowGap: "40px"}}>
        {checkProducts.length > 0 && checkProducts.map((item) => {
          return (<div style={{ width: "280px"}} key={item.id}><Recent id={item.id} title={item.title} image={item.image} price={item.price} category={item.category} type={item.type} subTitle={item.subTitle} rate={item.rate} count={item.count} off={item.off} quantity={item.quantity} max_unit={item.max_unit} /></div>)
        })}
      </div>
    </div>
  )
}

export default Check;