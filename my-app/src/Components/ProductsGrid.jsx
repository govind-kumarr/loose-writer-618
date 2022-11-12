import { Box, SimpleGrid, Flex, Text, Spacer, Select } from '@chakra-ui/react'
import ProductCard from './ProductCard'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import Sorting from './Sorting'

export default function ProductsGrid({setSortOrder, sortOrder}) {

  const productsRecord  = useSelector((store)=>store.AppReducer.productsRecord)



  return (
    <>

      <Box w="full" p='4'>
        <Box display={{ md: 'flex' }} mb="5">
          <Text fontSize={"2xl"} textAlign={"center"}> Tejasya Ayurveda </Text>
          <Spacer />
          <Sorting setSortOrder={setSortOrder} sortOrder={sortOrder} />
        </Box>

        <SimpleGrid columns = {[1, 1, 2, 3, 4]} spacing='20px'>
          {productsRecord.data?.map((el) => (
            <ProductCard key={el.id} item={el} />
          ))}
        </SimpleGrid>
      
      </Box>
    </>
  )
}