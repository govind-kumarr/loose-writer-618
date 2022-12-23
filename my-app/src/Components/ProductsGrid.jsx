import { Box, SimpleGrid, Flex, Text, Spacer, Select } from '@chakra-ui/react'
import ProductCard from './ProductCard'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import Sorting from './Sorting'

export default function ProductsGrid({setSortOrder, sortOrder}) {

  // get priductsRecord from appReducer
  const productsRecord  = useSelector((store)=>store.AppReducer.productsRecord)

  return (
    <>

{/* box */}
      <Box w="full" p='4'>

        {/* this box contain sorting component */}
        <Box display={{ md: 'flex' }} mb="5">
                {/* cateegory */}
          <Text fontSize={"2xl"} textAlign={"center"}> Tejasya Ayurveda </Text>
          <Spacer />

          {/* sorting conponent */}
          <Sorting setSortOrder={setSortOrder} sortOrder={sortOrder} />
        </Box>

{/* This simpleGrid contain all products */}
        <SimpleGrid columns = {[1, 1, 2, 3, 4]} spacing='20px'>

          {/* map products record */}
          {productsRecord.data?.map((el) => (

            // ProductCard contain all the information about product
            <ProductCard key={el.id} item={el} />
          ))}
          
        </SimpleGrid>
      </Box>
    </>
  )
}