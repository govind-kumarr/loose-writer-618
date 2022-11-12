import { Box, Text, Button } from '@chakra-ui/react'
import { ChevronLeftIcon, AddIcon, ArrowLeftIcon,ChevronRightIcon, ArrowRightIcon } from '@chakra-ui/icons'
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"

export default function Pagination({setPage, page}) {

return (
<>
<Box w="fit-content"  float={"right"} p="5">
<Button leftIcon={<ArrowLeftIcon />} m="1" colorScheme='teal' variant='outline' disabled={page==1} onClick={()=>setPage(1)} >
    First Page
  </Button>
  <Button leftIcon={<ChevronLeftIcon />} m="1"  colorScheme='teal' variant='outline' disabled={page==1} onClick={()=>setPage(page-1)}>
    Prev
  </Button>
  <Button rightIcon={<ChevronRightIcon />} m="1"  colorScheme='teal' variant='outline' disabled={page==10} onClick={()=>setPage(page+1)}>
    Next
  </Button>
  <Button rightIcon={<ArrowRightIcon />} m="1"  colorScheme='teal' variant='outline' disabled={page==10} onClick={()=>setPage(10)} >
    Last Page
  </Button>
    </Box>
</>
  )
}
