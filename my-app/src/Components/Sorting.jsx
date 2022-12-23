import React, { useEffect, useState } from "react";
import { Box, Flex, Select, Show, Spacer } from '@chakra-ui/react'
import SmallScreenFilters from "./SmallScreenFilters";

export default function Sorting({ setSortOrder, sortOrder, setType, type, setCategory, category }) {

  // sort products
  const handleSortBy = (e) => {
    setSortOrder(e.target.value)
  };
  return (
    <>

      {/* Flex  */}
      <Flex w="full" pl="4" pr="4">

        {/* below component show only below large screen */}
        {/* filters for scallscreen */}
        <Show below="lg"> 
          <SmallScreenFilters setType={setType} type={type} setCategory={setCategory} category={category} />
        </Show>

        {/* give space between filters and sort componenr */}
        <Spacer />

        {/* select sort option */}
        <Select maxW="200" minWidth={"100"} bg="white" ml="2" m="auto" onChange={handleSortBy}>
          <option value='rel'>Relevance</option>
          <option value='asc' name="sortBy">Price: Low to High</option>
          <option value='desc' name="sortBy">Price: High to Low </option>
        </Select>

      </Flex>
    </>
  )
}
