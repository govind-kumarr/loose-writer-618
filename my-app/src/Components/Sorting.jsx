import React, { useEffect, useState } from "react";
import {Text, Select } from '@chakra-ui/react'
export default function Sorting({setSortOrder, sortOrder}) {
    
    const handleSortBy = (e) => {
      setSortOrder(e.target.value)
    };
  return (
<>
<Text mt="auto" mb="auto" fontSize={"md"} textAlign={"center"} mr="3" > Sort By </Text>
          <Select maxW="200" minWidth={"100"} bg="white" ml="2" m="auto" onChange={handleSortBy}>
            <option value='rel'>Relevance</option>
            {/* <option value=''>Average Customer Rating</option> */}
            <option value='asc' name="sortBy">Price: Low to High</option>
            <option value='desc' name="sortBy">Price: High to Low </option>
            {/* <option value='option1'>Discount</option> */}
          </Select>
</>
  )
}
