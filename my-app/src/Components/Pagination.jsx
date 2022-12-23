import { Box, Text, Button } from '@chakra-ui/react'
import { ChevronLeftIcon, AddIcon, ArrowLeftIcon, ChevronRightIcon, ArrowRightIcon } from '@chakra-ui/icons'
import React, { useEffect, useState } from "react";

export default function Pagination({ setPage, page }) {

  return (
    <>
      {/* box */}
      <Box w="fit-content" float={"right"} p="5">

        {/* prev page button */}
        <Button leftIcon={<ChevronLeftIcon />} m="1" colorScheme='teal' variant='outline' disabled={page == 1} onClick={() => setPage(page - 1)}>
          Prev
        </Button>

        {/* next page button */}
        <Button rightIcon={<ChevronRightIcon />} m="1" colorScheme='teal' variant='outline' disabled={page == 5} onClick={() => setPage(page + 1)}>
          Next
        </Button>
      </Box>
    </>
  )
}
