import {Box, SimpleGrid, Flex, Text, Spacer, Select   } from '@chakra-ui/react'
import ProductCard from './ProductCard'
import React,{useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import { useLocation, useSearchParams } from 'react-router-dom'
import { getProducts } from '../Redux/AppReducer/action'
import {Link} from "react-router-dom"

export default function ProductsGrid() {

  const dispatch = useDispatch()
  const productsRecord = useSelector((store)=>store.AppReducer.productsRecord)
  const [searchParams] = useSearchParams();
  const location = useLocation();


  useEffect(()=>{

if(location || productsRecord.length==0){
  const genre = searchParams.getAll("genre");
  const queryParams={
    params:{
      genre: genre,
      _sort: searchParams.get("sortBy") && "price",
      _order:searchParams.get("sortBy")

    }
  }
  console.log(genre)
  dispatch(getProducts(queryParams));
}

  },[location])

console.log(" music records = ",productsRecord)

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
      {productsRecord?.map((el)=>(
    <ProductCard key={el.id} item={el} />
        ))}



        {/* <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard /> */}
</SimpleGrid>
  </Box>
    </>
  )
}
