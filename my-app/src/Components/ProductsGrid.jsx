import { Box, SimpleGrid, Flex, Text, Spacer, Select } from '@chakra-ui/react'
import ProductCard from './ProductCard'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useSearchParams } from 'react-router-dom'
import { getProducts } from '../Redux/AppReducer/action'
import { Link } from "react-router-dom"
import Sorting from './Sorting'

export default function ProductsGrid() {

  const dispatch = useDispatch()
  const productsRecord  = useSelector((store)=>store.AppReducer.productsRecord)


  useEffect(()=>{
  const queryParams={
    params:{
      // genre: genre,
      
    }
  }
  dispatch(getProducts(queryParams));

  },[])

console.log(" music records = ",productsRecord)


  return (
    <>

      <Box w="full" p='4'>
        <Box display={{ md: 'flex' }} mb="5">
          <Text fontSize={"2xl"} textAlign={"center"}> Tejasya Ayurveda </Text>
          <Spacer />
          <Sorting />
        </Box>

        <SimpleGrid columns = {[1, 1, 2, 3, 4]} spacing='20px'>
          {productsRecord?.map((el) => (
            <ProductCard key={el.id} item={el} />
          ))}
        </SimpleGrid>
      
      </Box>
    </>
  )
}