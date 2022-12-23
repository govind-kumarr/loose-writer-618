import { Box, Grid, Flex, Text, Spacer, Select } from '@chakra-ui/react'
import ProductCard from './ProductCard'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import Sorting from './Sorting'

export default function ProductsGrid({ setSortOrder, sortOrder }) {

  // get priductsRecord from appReducer
  const productsRecord = useSelector((store) => store.AppReducer.productsRecord)

  console.log("Product => ",productsRecord)

  return (
    <>

      {/* box */}
      <Box w="full" p='4' >

        {/* this box contain sorting component */}
        <Box display={{ md: 'flex' }} pb="5" >
          {/* cateegory */}
          <Text fontSize={"2xl"} textAlign={"center"}> Tejasya Ayurveda </Text>
          <Spacer />

          {/* sorting conponent */}
          <Sorting setSortOrder={setSortOrder} sortOrder={sortOrder} />
        </Box>

        {/* This simpleGrid contain all products */}
        <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={"25px"} w="full" >

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