import React from 'react';
import styled from 'styled-components';
import "./recent.css";
import { Text,Button } from '@chakra-ui/react';
import {useDispatch} from "react-redux";
import { deleteproduct, getProducts } from '../Redux/AdminPanel/action';
const Recent = ({ id,title, image, price, category, type, subTitle, rate, count, off, quantity, max_unit }) => {
  const dispatch=useDispatch()


  const deleteHandle=(id)=>{
    console.log(id,"id")
     dispatch(deleteproduct(id))
     .then(r=>{
       dispatch(getProducts)
     })
  }
  const handlePlus=()=>{

  }
  const handleMinus=()=>{

  }

  return (
    <div style={{border:"0px solid pink",height:"auto",boxShadow:"rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset"}}>
      <Text>{title}</Text>
      <div style={{display:"flex",justifyContent:"center"}}>
         <img src={image} width="180px" height="180px" alt="product" />
      </div>
      <div>
        <Text>Rs:-{price}</Text>
        <Text>off:-{off}%</Text>
      </div>
      <div>
        <Text>Category:{category}</Text>
        <Text>type:{type}</Text>
      </div>
      <div style={{display:"flex",justifyContent:"space-between",direction:"ltr"}}>
        <div>
        
          <Button _hover={{backgroundColor:"teal.400"}} data-cy="delete-button" className="danger" onClick={() => deleteHandle(id)}>
            <img src='./delete.png' alt='delete' width='20px' />
          </Button>
        </div>
        <div>
          <button  data-cy='add-to-cart' className="add-to-cart" onClick={() => handlePlus(id)}>
            +
          </button>
          <span data-cy='product-quantity'>{quantity}</span>
          <button data-cy='remove-from-cart' className="remove-from-cart" onClick={() => handleMinus(id)}>
            -
          </button>
        </div>
      </div>

    </div>
  )
}




export default Recent