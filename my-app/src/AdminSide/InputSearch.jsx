import React, { useEffect, useState } from 'react'
import { Input,Text } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, postProduct, simpleGet } from '../Redux/AdminPanel/action';
import { getLocalData, saveData } from '../Utils/localStorageData';

const InputSearch = () => {
    const inputProducts = useSelector(store => store.AdminReducer.products);
    const dispatch = useDispatch();
    const [text, setText] = useState("");

    useEffect(()=>{
        const geti=getLocalData("productdata")||[];
        if(geti.length===0){
            saveData("productdata", inputProducts);
        }
        
    },[])
    
    const handleInput = (val) => {
        setText(val);
        console.log(val, "values");

        const stor=getLocalData("productdata")||inputProducts;
        console.log(stor,"stor")
        const filtered = stor.filter((item) => (item.title).includes(val));
        console.log(filtered, "filtered");
        dispatch(postProduct(filtered))
    }
    return (
        <div style={{color:"green"}}>
            <Input placeholder="search" size="lg" width="50%" value={text} borderColor={"green"} onChange={(e) => handleInput(e.target.value)}></Input>
            <br />
            <br />
        </div>
    )
}

export default InputSearch