import React,{useState}from "react";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button
  } from '@chakra-ui/react';
import {ChevronDownIcon } from "@chakra-ui/icons";

const SortRightIcon = ({handleAscending,handleDescending,handleRelevance}) => {
    const [relavance,setRelavance]=useState("Relevance")
    const handleChange1=()=>{
        setRelavance("Price: High to Low")
        
    }
    const handleChange2=()=>{
        setRelavance("Price: Low to High")
    }
  return (
    <div>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          {relavance}
        </MenuButton>
        <MenuList >
          <MenuItem onClick={handleRelevance}>Relevance</MenuItem>
          <MenuItem onClick={handleDescending}><div onClick={handleChange1} >Price: High to Low</div></MenuItem>
          <MenuItem onClick={handleAscending}><div onClick={handleChange2}  >Price: Low to High</div></MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

export default SortRightIcon;
