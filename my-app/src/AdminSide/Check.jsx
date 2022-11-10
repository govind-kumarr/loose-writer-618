import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ProductsData } from '../data/ProductsData';
import { products } from '../data/ProductsData';
import { addProd } from '../Redux/AdminPanel/action';
const Check = (props) => {
    const {prod}=props;
    console.log(prod,"prod in check")
    const prodo=useSelector((store)=>store.AdminReducer.prodo)
    const dispatch=useDispatch();

    console.log(prodo,"prodo")
    useEffect(()=>{
     //dispatch(addProd([{id:8,title:"xxxxx"}]))
    },[])
  return (
    <div>
        <h1>Check</h1>
        {!prod && products.map(item=><h1>products h{item.title}</h1>)}
        {prod && prod.map((item)=>{
        return (<h1>Hi{item.title}</h1>)
    })}
    </div>
    
  )
}

export default Check