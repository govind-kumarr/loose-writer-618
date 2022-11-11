import { Box, Text, Button } from '@chakra-ui/react'
import { ChevronLeftIcon, AddIcon, ArrowLeftIcon,ChevronRightIcon, ArrowRightIcon } from '@chakra-ui/icons'
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";


export default function Pagination() {

  

return (
<>
<Box w="fit-content"  float={"right"} p="5">
<Button leftIcon={<ArrowLeftIcon />} m="1" colorScheme='teal' variant='outline' >
    First Page
  </Button>
  <Button leftIcon={<ChevronLeftIcon />} m="1"  colorScheme='teal' variant='outline'>
    Prev
  </Button>
  <Button rightIcon={<ChevronRightIcon />} m="1"  colorScheme='teal' variant='outline' >
    Next
  </Button>
  <Button rightIcon={<ArrowRightIcon />} m="1"  colorScheme='teal' variant='outline' >
    Last Page
  </Button>
    </Box>
</>
  )
}
