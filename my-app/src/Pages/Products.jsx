import { Flex, Spacer, Box } from '@chakra-ui/react'
import React from 'react'
import Filters from '../Components/Filters'
import Pagination from '../Components/Pagination'
import ProductsGrid from '../Components/ProductsGrid'


export default function Products() {
  return (
    <>

<Box bg='#f6f6f6'>
    <Flex w="full"  pl="10" pr={{sm:"0px", md:"10", xl:"10"}}>
  <Filters />
  <ProductsGrid />
</Flex>
<Pagination />
</Box>


    </>
  )
}
