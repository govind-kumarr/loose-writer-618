import React from 'react'
import { Image, Text, Flex, Button, Spacer, Box, } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'

export default function ProductCard({ item }) {
  return (
    <>

      {/* box */}
      <Box bg='white' height='370' w="full" minHeight={"fit-content"} m="auto"  p="5">

        {/* product image */}
        <Image p="4" src={item.image} alt='Dan Abramov' h="65%" w="full" />

        {/* product title */}
        <Text fontSize='sm' lineHeight={"4"} noOfLines={2} overflow={'hidden'}>{item.title}</Text>

        {/* product counts */}
        <Text fontSize='xs' noOfLines={1} overflow={'hidden'}>{item.count}</Text>

        {/* this flex contain product rating */}
        <Flex mt="1" gap="2">
          <Button borderRadius={"3px"} colorScheme='white' h="5" w="12" bg="#1aab2a" rightIcon={<StarIcon w={2} ml="-5px" h={2} color="white" />} >
            4.3
          </Button>
          <Text fontSize='xs'>3358 Rating</Text>
        </Flex>


        {/* this flex contain product old price & discount */}
        <Flex gap="2">
          {/* old price */}
          <Text fontSize='xs' as="del">MRP ₹ {item.price * 2}</Text>

          {/* discount */}
          <Text fontSize='xs' color="#1aab2a">{item.off}% OFF</Text>
        </Flex>

        {/* this flex contain current price & add to cart button */}
        <Flex >

          {/* current price  */}
          <Text fontSize='xl'>₹ {item.price}</Text>
          <Spacer />

          {/* add to cart button */}
          <Text mt="1" fontSize='sm' as="b" color="tomato">ADD</Text>
        </Flex>

      </Box>

    </>
  )
}

