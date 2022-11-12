import React, { useEffect, useState } from 'react';
import "./AddProducts.css";
import styled from "styled-components";

import { useDispatch, useSelector } from 'react-redux';
import { addProduct, getProducts } from '../Redux/AdminPanel/action';
import { getLocalData, saveData } from '../Utils/localStorageData';
import { Link } from 'react-router-dom';
import { Button, Alert, AlertIcon, AlertDescription,AlertTitle,Heading } from '@chakra-ui/react';
import axios from 'axios';
import { BasicUsage } from './Basic';
import { BasicAdded } from './BasicAdded';
import RecentlyAdded from './RecentlyAdded';




const startData = {
    title: "x",
    subTitle: "y",
    price: "5",
    category: "",
    type: "5",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEfESPkZA4oTifLTyp_UuxhgFiAKD9m2UKwQ&usqp=CAU",
    rate: "5",
    count: "5",
    off: "5",
    quantity: "5",
    max_unit: "5",
}
const AddProducts = () => {
    const [data, setData] = useState(startData);
    const { title, subTitle, price, category, type, image, rate, count, off, quantity, max_unit } = data;
    const dispatch = useDispatch();
    const produ = useSelector((store) => { console.log(store,"store");return store.AdminReducer.products});
    const isLoading=useSelector((store)=>store.AdminReducer.isLoading);
    const isError=useSelector((store)=>store.AdminReducer.isError);

    const [allert, setallert] = useState(false);
    const [alert0,setAlert0]=useState(false);

   
   // console.log(produ, "products in add product")

    useEffect(() => {
        dispatch(getProducts).then(r=>{
           // console.log(r,"in useEffect get")
        });
        //axios.delete(`https://onemgfree-api-server.onrender.com/products/109`)
    }, [])

    const handleChange = (e) => {
        const { name, value, type } = e.target;
        const val = type === "number" ? Number(value) : value;
        setData({
            ...data,
            [name]: val
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (title && subTitle && price && category && type && image && rate && count && off && quantity && max_unit) {
            
            dispatch(addProduct(data)).then(r=>{
                console.log(r.data,"r after add")
                dispatch(getProducts).then(r=>{
                    console.log(r.data,"after add get")
                });
               
            });
            setData(startData);
            
           setallert(true);
            
        } else {
            setAlert0(true);
        }
    }
   const handleClose=(()=>{
       setAlert0(false);
       setallert(false);
   })
   
    if(isLoading){
        return (
            <Heading>...Loading....</Heading>
        )
    }
    if(isError){
        return(
            <Heading>OOps API is not working now!</Heading>
        )
    }
   
    return (
        <div className='entire'>
            
            <Heading>AddProducts</Heading>
            <Top>
                <TopDiv style={{ display: "flex", position: "relative" }}>
                    <NoOfProducts>Total No of Products :-</NoOfProducts>
                    <div data-cy='navbar-cart-count' className='navbar-cart-count'>{produ.length}</div>
                    <Link to='/cart'>
                        <img data-cy='cart-image-link' src="./shopping-cart.png" alt='cart' width='30px' />
                    </Link>
                </TopDiv>
            </Top>
            <br/>
            <div>
                <div className='add-product-wrapper'>
                    <form onSubmit={handleSubmit}>
                        <FormDiv className='form-element-div'>
                            <Label className='form-label'>Product Title :- </Label>
                            <Input className="form-input" type="text" name="title" value={title} onChange={(e) => handleChange(e)} placeholder='title' />
                        </FormDiv>
                        <FormDiv>
                            <Label>Product Sub-Title :- </Label>
                            <Input type="text" value={subTitle} name="subTitle" onChange={(e) => handleChange(e)} placeholder='subTitle' />
                        </FormDiv>
                        <FormDiv>
                            <Label>Price :- </Label>
                            <Input type="Number" value={price} name="price" onChange={(e) => handleChange(e)} placeholder='price' />
                        </FormDiv>
                        <FormDiv>
                            <Label>Category :- </Label>
                            <Select value={category} name="category" onChange={(e) => handleChange(e)} placeholder='category'>
                                <option value="">Select Category</option>
                                <option value="Supplement">Supplement</option>
                                <option value="Diabetes">Diabetes</option>
                                <option value="COVID">COVID</option>
                                <option value="Devices">Devices</option>
                            </Select>
                        </FormDiv>
                        <FormDiv>
                            <Label>Type :-</Label>
                            <Input type="text" value={type} name="type" onChange={(e) => handleChange(e)} placeholder='type' />
                        </FormDiv>
                        <FormDiv>
                            <Label>Image :-</Label>
                            <Input type="url" value={image} name="image" onChange={(e) => handleChange(e)} placeholder='image' />
                        </FormDiv>
                        <FormDiv>
                            <Label>Rate :-</Label>
                            <Input type="Number" value={rate} name="rate" onChange={(e) => handleChange(e)} placeholder='rate' />
                        </FormDiv>
                        <FormDiv>
                            <Label>Count :-</Label>
                            <Input type="text" value={count} name="count" onChange={(e) => handleChange(e)} placeholder='count' />
                        </FormDiv>
                        <FormDiv>
                            <Label>off :-</Label>
                            <Input type="Number" value={off} name="off" onChange={(e) => handleChange(e)} placeholder='off' />
                        </FormDiv>
                        <FormDiv>
                            <Label>Quantity :-</Label>
                            <Input type="Number" value={quantity} name="quantity" onChange={(e) => handleChange(e)} placeholder='quantity' />
                        </FormDiv>
                        <FormDiv>
                            <Label>Max Unit :-</Label>
                            <Input type="Number" value={max_unit} name="max_unit" onChange={(e) => handleChange(e)} placeholder='max_unit' />
                        </FormDiv>
                        <div>
                            <Button className="buttone" _hover={{ backgroundColor: "cyan.400" }} style={{ textAlign: "center" }} pl={"10"} pt={"7"} pb={"7"} pr={"10"} colorScheme="teal" type="submit">ADD</Button>
                        </div>
                    </form>
                    {alert0?<BasicUsage handleClose={handleClose} children={"Please fill all the input fields proprely"}/>:""}
                    {allert?<BasicAdded handleClose={handleClose}/>:""}
                    
                </div>
                <br/>
                <RecentlyAdded/>
                
            </div>

        </div>
    )
}

const FormDiv = styled.div`
    border:0px solid yellow;
    
    display:flex;
    padding:20px;
    margin:auto;
    align-items:center;
    box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
    @media all and (min-width:0px) and (max-width:481px){
        display:flex;
        flex-direction:column;
        
    }
    @media all and (min-width:481px) and (max-width:768px){
        display:flex;
        flex-direction:column;
    }
    
    
`

const Input = styled.input`
    border:1px solid blue;
    flex:1;
    text-align:center;
    font-size:22px;
    width:40%;
    border-radius:6px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    @media all and (min-width:481px) and (max-width:768px){
        align-self:center;
        width:auto;
    }
    @media all and (min-width:0px) and (max-width:481px){
        align-self:center;
        width:auto;
    }
`
const Select = styled.select`
    border:1px solid blue;
    flex:1;
    text-align:center;
    font-size:22px;
    border-radius:6px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    option{
        color:green;
    }
`
// const Button = styled.button`
//     border:1px solid blue;
//     text-align:center;
//     width:30%;
//     color:blue;
//     font-size:22px;  f
// `
const Label = styled.label`
    border:0px solid gray;
    margin-right:22px;
    text-align:center;
    font-size:20px;
    color:green;
    width:40%;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    @media all and (min-width:481px) and (max-width:768px){
        align-self:center;
        width:auto;
        flex:1;
    }
    @media all and (min-width:0px) and (max-width:481px){
        align-self:center;
        width:auto;
        flex:1;
    }
`
const NoOfProducts = styled.div`
    border:0px solid green;
    text-align:left;
    color:green;
    margin-right:6px;
    font-size:20px;
    @media all and (min-width:0px) and (max-width:481px){
        text-align:center;
        align-self:center;
    }
    @media all and (min-width:481px) and (max-width:768px){
        text-align:center;
    }
`

const TopDiv = styled.div`
border:0px solid pink;
width:max-content;
img{
    margin-left:12px;
}
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}
`
const Top = styled.div`
border:0px solid blue;

@media all and (min-width:0px) and (max-width:481px){
    display:flex;
     justify-content:center;
}
@media all and (min-width:481px) and (max-width:768px){
    
     display:flex;
     justify-content:center;
    
}
`


export default AddProducts;