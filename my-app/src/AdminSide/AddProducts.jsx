import React, { useEffect, useState } from 'react';
import "./AddProducts.css";
import styled from "styled-components";
import { products } from '../data/ProductsData';
import { useDispatch, useSelector } from 'react-redux';
import { addProd } from '../Redux/AdminPanel/action';
import { getLocalData, saveData } from '../Utils/localStorageData';
import { Link } from 'react-router-dom';
import { Button, Alert, AlertIcon, AlertDescription,AlertTitle } from '@chakra-ui/react';
import axios from 'axios';



const startData = {
    title: "x",
    subTitle: "y",
    price: "5",
    category: "",
    type: "5",
    image: "5",
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
    const produ = useSelector((store) => { return store.AdminReducer.prodo });
    const [allert, setallert] = useState(false);
    

   
    console.log(produ, "produ in add product")

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

            const dumm = getLocalData("addedProd") || [];
            //console.log(dumm, "dumm")

            const id = dumm.length + 1;
            let pdata = data;
            pdata = { ...pdata, id: id + 1 }
            //console.log(pdata,"data sumbit");
            const payload = [pdata];
            dispatch(addProd(payload));
            setData(startData);
            setallert(true);
            setTimeout(()=>{
                setallert(false)
            },2000)
        } else {
            
            alert("Please fill all the input fields")
            
        }
    }
   

    if (allert) {
        return (<Alert
            status='success'
            variant='subtle'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            textAlign='center'
            height='200px'
          >
            <AlertIcon boxSize='40px' mr={0} />
            <AlertTitle mt={4} mb={1} fontSize='lg'>
              Product has been added successfully!
            </AlertTitle>
            <AlertDescription maxWidth='sm'>
              Thanks for adding product.
            </AlertDescription>
          </Alert>)
    }

    useEffect(()=>{
        // axios({
        //     method:'delete',
        //     url:'/products/101',
        //     baseURL:'https://onemgfree-api-server.onrender.com',
            
        // }).then(r=>{
        //     console.log(r.data,"data axios delte")
        // })
    },[])

    return (
        <div className='entire'>
            
            <h1>AddProducts</h1>
            <Top>
                <TopDiv style={{ display: "flex", position: "relative" }}>
                    <NoOfProducts>Total No of Products :-</NoOfProducts>
                    <div data-cy='navbar-cart-count' className='navbar-cart-count'>{produ.length}</div>
                    <Link to='/cart'>
                        <img data-cy='cart-image-link' src="./shopping-cart.png" alt='cart' width='30px' />
                    </Link>
                </TopDiv>
            </Top>

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
                            <Input type="text" value={image} name="image" onChange={(e) => handleChange(e)} placeholder='image' />
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
                            <Button className="buttone" _hover={{ backgroundColor: "cyan.400" }} style={{ textAlign: "center" }} pl={"10"} pt={"5"} pb={"5"} pr={"10"} colorScheme="teal" type="submit">ADD</Button>
                        </div>
                    </form>
                    
                </div>
                
            </div>

        </div>
    )
}

const FormDiv = styled.div`
    border:1px solid yellow;
    
    display:flex;
    padding:20px;
    margin:auto;
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
`
// const Button = styled.button`
//     border:1px solid blue;
//     text-align:center;
//     width:30%;
//     color:blue;
//     font-size:22px;  
// `
const Label = styled.label`
    border:1px solid gray;
    margin-right:22px;
    text-align:center;
    font-size:20px;
    color:green;
    width:40%;
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
border:1px solid pink;
width:max-content;

}
`
const Top = styled.div`
border:1px solid blue;

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