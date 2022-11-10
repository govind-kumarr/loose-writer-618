import React,{useState,useEffect} from 'react';
import "./AddProducts.css";
import styled from "styled-components";
import { products } from '../data/ProductsData';
import { useDispatch } from 'react-redux';
import { addProd } from '../Redux/AdminPanel/action';

const startData={
      title: "",
      subTitle: "",
      price: "",
      category: "",
      type: "",
      image: "",
      rate: "",
      count: "",
      off: "",
      quantity:"",
      max_unit: "",
}
const AddProducts = () => {
  const [data,setData]=useState(startData);
  const {title, subTitle,price, category,type, image,rate, count,off,quantity,max_unit}=data;
  const dispatch=useDispatch();
  
 
  const handleChange=(e)=>{
        const {name,value,type}=e.target;
        const val=type==="number"? Number(value):value;
        setData({
            ...data,
            [name]:val
        })
  }
 //console.log(data,"data")
 //console.log(products)
 useEffect(()=>{
    // if(products.length===1001){
    //     return products;
    //  }
    dispatch(addProd([{id:5,title:"Mnnnnn"}]))
 },[])
 

 
 

  const handleSubmit=(e)=>{
    e.preventDefault();
      
      if(title && subTitle && price && category && type && image && rate && count && off && quantity && max_unit){
        console.log(data,"data sumbit")
      }else{
          alert("Please fill all the boxes");
        setData(startData)
      }
  }

  return (
    <div>
        <h1>AddProducts</h1>
        <div>
            <div className='add-product-wrapper'>
                <form onSubmit={handleSubmit}>
                    <FormDiv className='form-element-div'>
                        <Label className='form-label'>Product Title</Label>
                        <Input className="form-input" type="text" name="title" value={title} onChange={(e)=>handleChange(e)} placeholder='title'/>
                    </FormDiv>
                    <FormDiv>
                        <label>Product Sub-Title</label>
                        <input type="text" value={subTitle} name="subTitle" onChange={(e)=>handleChange(e)} placeholder='subTitle'/>
                    </FormDiv>
                    <div>
                        <label>Price</label>
                        <input type="Number" value={price} name="price" onChange={(e)=>handleChange(e)} placeholder='price'/>
                    </div>
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
    
    
`

const Input=styled.input`
    border:1px solid blue;
    flex:1;
    text-align:center;
   
`
const Label=styled.label`
    border:1px solid gray;
    margin-right:20px;
`

export default AddProducts;