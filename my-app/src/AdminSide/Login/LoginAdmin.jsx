import React,{useState,useEffect} from 'react'
import { Navigate, useNavigate } from 'react-router';
import { getLocalData, saveData } from '../../Utils/localStorageData';
import {Input,Heading,Text} from "@chakra-ui/react";

const LoginAdmin = () => {

    const [email,setEmail]=useState("mohan@123")
    const [password,setPassword]=useState("1234");
    const navigate=useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        
        if(email==="mohan@123" && password==="1234" ){
            navigate("/admin-panel");
        }else{
            alert("wrong credentials")
        }

    }
    
    
  return (
    <div>
        <Heading>Login Admin</Heading>
        <br/>
        <form onSubmit={handleSubmit}>
            
            <Text size="2xl">Email</Text>
            <br/>
            <Input width="50%" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='enter your email'></Input>
            <br/>
            <label>Password</label>
            <br/>
            <br/>
            <Input width="50%" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='enter your password'/>
            <br/>
            <br/>
            <Input width="50%" type="submit" backgroundColor={"teal"} placeholder='submit credentials'/>
            <br/>
        </form>
    </div>
  )
}

export default LoginAdmin