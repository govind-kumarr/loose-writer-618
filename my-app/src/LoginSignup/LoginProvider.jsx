import React from 'react';
import {createContext,useState} from 'react';


export const LoginContext = createContext();

export const LoginProvider = ({children}) =>{
    const[Clicked,setClicked] = useState(false);
    const toggle = ()=>{
        console.log({Clicked});
        setClicked(Clicked=== true ? false : true);
    }
    return (
       <LoginContext.Provider value={{Clicked,setClicked,toggle}} >{children}</LoginContext.Provider>
    )
}
