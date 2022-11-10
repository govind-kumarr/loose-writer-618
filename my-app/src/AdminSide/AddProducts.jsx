import React,{useState} from 'react';
import "./AddProducts.css";
import styled from "styled-components";
import { products } from '../data/ProductsData';
import { useDispatch, useSelector } from 'react-redux';
import { addProd } from '../Redux/AdminPanel/action';
import { getLocalData, saveData } from '../Utils/localStorageData';

const startData={
      title: "x",
      subTitle: "y",
      price: "5",
      category: "5",
      type: "5",
      image: "5",
      rate: "5",
      count: "5",
      off: "5",
      quantity:"5",
      max_unit: "5",
}
const AddProducts = () => {
  const [data,setData]=useState(startData);
  const {title, subTitle,price, category,type, image,rate, count,off,quantity,max_unit}=data;
  const dispatch=useDispatch();
   const produ=useSelector((store)=>{return store.AdminReducer.prodo});
  console.log(produ,"produ in add product")
 
  const handleChange=(e)=>{
        const {name,value,type}=e.target;
        const val=type==="number"? Number(value):value;
        setData({
            ...data,
            [name]:val
        })
  }
 
  const handleSubmit=(e)=>{
    e.preventDefault();
      
      if(title && subTitle && price && category && type && image && rate && count && off && quantity && max_unit){
        
        const dumm=getLocalData("addedProd")||[];
        console.log(dumm,"dumm")
       
        const id=dumm.length+1;
        let pdata=data;
        pdata={...pdata,id:id+1}
        //console.log(pdata,"data sumbit");
        const payload=[pdata];
        dispatch(addProd(payload));
        setData(startData)
      }else{
          alert("Please fill all the boxes");
      }
  }
 
  
  
  return (
    <div className='entire'>
        <h1>AddProducts</h1>
        <NoOfProducts>Total No of Products:{produ.length}</NoOfProducts>
        <div>
            <div className='add-product-wrapper'>
                <form onSubmit={handleSubmit}>
                    <FormDiv className='form-element-div'>
                        <Label className='form-label'>Product Title :- </Label>
                        <Input className="form-input" type="text" name="title" value={title} onChange={(e)=>handleChange(e)} placeholder='title'/>
                    </FormDiv>
                    <FormDiv>
                        <Label>Product Sub-Title :- </Label>
                        <Input type="text" value={subTitle} name="subTitle" onChange={(e)=>handleChange(e)} placeholder='subTitle'/>
                    </FormDiv>
                    <FormDiv>
                        <Label>Price</Label>
                        <Input type="Number" value={price} name="price" onChange={(e)=>handleChange(e)} placeholder='price'/>
                    </FormDiv>
                    <div>
                        <label>Category</label>
                        <select value={category} name="category" onChange={(e)=>handleChange(e)}placeholder='category'>
                            <option value="">Select Category</option>
                            <option value="Supplement">Supplement</option>
                            <option value="Diabetes">Diabetes</option>
                            <option value="COVID">COVID</option>
                            <option value="Devices">Devices</option>
                        </select>
                    </div>
                    <div>
                        <label>Type</label>
                        <input type="text" value={type} name="type" onChange={(e)=>handleChange(e)} placeholder='type'/>
                    </div>
                    <div>
                        <label>Image</label>
                        <input type="text" value={image} name="image" onChange={(e)=>handleChange(e)} placeholder='image'/>
                    </div>
                    <div>
                        <label>Rate</label>
                        <input type="Number" value={rate} name="rate" onChange={(e)=>handleChange(e)} placeholder='rate'/>
                    </div>
                    <div>
                        <label>Count</label>
                        <input type="text" value={count} name="count" onChange={(e)=>handleChange(e)} placeholder='count'/>
                    </div>
                    <div>
                        <label>off</label>
                        <input type="Number" value={off} name="off" onChange={(e)=>handleChange(e)} placeholder='off'/>
                    </div>
                    <div>
                        <label>Quantity</label>
                        <input type="Number" value={quantity} name="quantity" onChange={(e)=>handleChange(e)} placeholder='quantity'/>
                    </div>
                    <div>
                        <label>Max Unit</label>
                        <input type="Number" value={max_unit} name="max_unit" onChange={(e)=>handleChange(e)} placeholder='max_unit'/>
                    </div>
                    <div>
                        <button style={{textAlign:"center"}} type="submit">ADD</button>
                    </div>
                </form>
            </div>
        </div>

    </div>
  )
}

const FormDiv=styled.div`
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

const Input=styled.input`
    border:1px solid blue;
    flex:1;
    text-align:center;
    font-size:22px;
   
`
const Label=styled.label`
    border:1px solid gray;
    margin-right:22px;
    text-align:center;
    font-size:20px;
    color:green;
    width:50%;
    @media all and (min-width:481px) and (max-width:768px){
        align-self:center;
    }
`
const NoOfProducts=styled.div`
    border:1px solid green;
    text-align:left;
    @media all and (min-width:0px) and (max-width:481px){
        text-align:center;
        align-self:center;
    }
    @media all and (min-width:481px) and (max-width:768px){
        text-align:center;
    }
`

export default AddProducts;