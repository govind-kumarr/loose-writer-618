import React from 'react'
import {Box, SimpleGrid, Flex, Text, Spacer, Select   } from '@chakra-ui/react'
import ProductCard from './ProductCard'
// import { MdArrowDropDown } from '@chakra-ui/icons'

export default function ProductsGrid() {
  return (
    <>
    
    <Box w="full" p='4'>

        <Box display={{ md: 'flex' }} mb="5"> 
            <Text fontSize={"2xl"} textAlign={"center"}> Tejasya Ayurveda </Text>
            <Spacer />
            <Text mt="auto" mb="auto" fontSize={"md"} textAlign={"center"} mr="3"> Sort By </Text>
            <Select maxW="200" minWidth={"100"}  bg="white" ml="2"  m="auto">
            <option value='option1'>Relevance</option>
            <option value='option1'>Average Customer Rating</option>
            <option value='option1'>Price: Low to High</option>
            <option value='option1'>Price: High to Low </option>
            <option value='option1'>Discount</option>
            </Select>

             </Box>

    <SimpleGrid columns={[1,1,2, 3, 4]} spacing='20px'>
    <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
  
</SimpleGrid>
  </Box>
    </>
  )
}
