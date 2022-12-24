import { Flex, Spacer, Box, Show, ChakraProvider, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Filters from '../Components/Filters'
import Pagination from '../Components/Pagination'
import ProductsGrid from '../Components/ProductsGrid'
import { useDispatch, useSelector } from "react-redux"
import { getProducts } from '../Redux/AppReducer/action'
import Sorting from '../Components/Sorting'
import DataLoading from '../Components/DataLoading'


export default function Products() {

  // use dispatch
  const dispatch = useDispatch()

  // creating state for sorting
  const [sortOrder, setSortOrder] = useState("")
  const [sort, setSort] = useState("discount");

  // create states for pages
  const [page, setPage] = useState(1);

  // creating states for filters
  const [type, setType] = useState([])
  const [category, setCategory] = useState([]);


  useEffect(() => {

    // call getPruducts() function from appReducer
    dispatch(getProducts({

      //  filters parameters
      category: category,
      type: type,
      page: page,
      limit: 10,
      sort: sort,
      order: sortOrder
    }));

    setSort("price")

  }, [page, sortOrder, type, category])


  return (
    <>

      {/* wrap Products page components with chakraProvider */}
      <ChakraProvider>

        {/* box */}
        <Box bg='#f6f6f6' pt="5">

          {/* flex which contain filters and productsGrid component */}
          <Flex w="full" pl={{ sm: "0px", md: "4", xl: "10" }} pr={{ sm: "0px", md: "5", xl: "10" }}>

            {/* filter component, This component only show on large or above large screen */}
            <Show above='lg'>
              <Filters setType={setType} type={type} setCategory={setCategory} category={category} />
            </Show>

            {/* This box contain Sort productGrid component */}
            <Box>
              
              {/* this box contain sorting component */}
              <Box display={{ md: 'flex' }} pb="5" >

                {/* sorting conponent */}
                <Sorting setSortOrder={setSortOrder} sortOrder={sortOrder} setType={setType} type={type} setCategory={setCategory} category={category} />
              </Box>

              {/* This component display all the products  */}
              {/* After Data successfully loaded */}
              <ProductsGrid />
           
            </Box>
          </Flex>


{/* show only when data is loading */}
<DataLoading />


          {/* pagination conponent */}
          <Pagination setPage={setPage} page={page} />
        
        </Box>
      </ChakraProvider>
    </>
  )
}
