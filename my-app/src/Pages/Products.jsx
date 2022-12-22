import { Flex, Spacer, Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Filters from '../Components/Filters'
import Pagination from '../Components/Pagination'
import ProductsGrid from '../Components/ProductsGrid'
import { useDispatch} from "react-redux"
import { getProducts } from '../Redux/AppReducer/action'


export default function Products() {
  // use dispatch
  const dispatch = useDispatch()

  // creating state for sorting
  const [sortOrder, setSortOrder] = useState("")
  const [sort, setSort]= useState("discount");

  // create states for pages
  const [page, setPage] = useState(1);

  // creating states for filters
  const [type, setType] = useState([])
  const[category, setCategory] = useState([]);


  useEffect(()=>{

    // call getPruducts() function from appReducer
  dispatch(getProducts({
    
    //  filters parameters
    category:category,
    type:type,
    page: page,
    limit: 10,
    sort: sort,
    order: sortOrder}));    
    
    setSort("price")

  },[page, sortOrder, type, category])


  return (
    <>

{/* box */}
<Box bg='#f6f6f6'>

  {/* flex which contain filters and productsGrid component */}
    <Flex w="full"  pl="10" pr={{sm:"0px", md:"10", xl:"10"}}>
      {/* filter component */}
      <Filters setType={setType} type={type} setCategory={setCategory} category={category} />
      
      {/* productGrid contain all products */}
      <ProductsGrid setSortOrder={setSortOrder} sortOrder={sortOrder} />
    </Flex>

    {/* pagination conponent */}
<Pagination setPage={setPage} page={page} />
</Box>

    </>
  )
}
