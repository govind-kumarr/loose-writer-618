import { Flex, Spacer, Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Filters from '../Components/Filters'
import Pagination from '../Components/Pagination'
import ProductsGrid from '../Components/ProductsGrid'
import { useDispatch} from "react-redux"
import { getProducts } from '../Redux/AppReducer/action'


export default function Products() {
  const dispatch = useDispatch()
  const [sortOrder, setSortOrder] = useState("")
  const [sort, setSort]= useState("discount");
  const [page, setPage] = useState(1);
  const [type, setType] = useState([])
  const[category, setCategory] = useState([]);


  useEffect(()=>{

  dispatch(getProducts({
    category:category,
    type:type,
    page: page,
    limit: 10,
    sort: sort,
    order: sortOrder}));
    
    // temp
    setSort("price")

  },[page, sortOrder, type, category])


  return (
    <>
<Box bg='#f6f6f6'>
    <Flex w="full"  pl="10" pr={{sm:"0px", md:"10", xl:"10"}}>
      <Filters setType={setType} type={type} setCategory={setCategory} category={category} />
      <ProductsGrid setSortOrder={setSortOrder} sortOrder={sortOrder} />
    </Flex>
<Pagination setPage={setPage} page={page} />
</Box>

    </>
  )
}
