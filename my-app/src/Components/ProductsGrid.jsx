import { Box, Grid, Flex, Text, Spacer, Select } from '@chakra-ui/react'
import ProductCard from './ProductCard'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import Sorting from './Sorting'

export default function ProductsGrid() {

  // get priductsRecord from appReducer
  const productsRecord = useSelector((store) => store.AppReducer.productsRecord)

  console.log("Product => ",productsRecord)

  return (
    <>

      {/* box */}
      <Box w="full" p='4' >

        {/* This simpleGrid contain all products */}
        <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' }} gap={"25px"} w="full" >

          {/* map products record */}
          {productsRecord.data?.map((el) => (
            // ProductCard contain all the information about product
            <ProductCard key={el.id} item={el} />
          ))}

        </Grid>
      </Box>
    </>
  )
}