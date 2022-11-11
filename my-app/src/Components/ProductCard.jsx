import React from 'react'
import {Image,Text, Flex,Button, Spacer, Box,} from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'

export default function ProductCard({item}) {
  return (
<>

<Box bg='white' height='360' minHeight={"fit-content"} m="auto" maxWidth={"250px"} p="5">
  <Image p="8" src={item.image} alt='Dan Abramov' h="65%" w="full" />
  <Text fontSize='sm' lineHeight={"4"} noOfLines={2} overflow={'hidden'}>{item.title}</Text>
  <Text fontSize='xs'  noOfLines={1} overflow={'hidden'}>{item.count}</Text>
  
  <Flex mt="1" gap="2">
  <Button borderRadius={"3px"} colorScheme='white' h="5" w="12" bg="#1aab2a" rightIcon={<StarIcon w={2} ml="-5px" h={2} color="white" />} >
    4.3
  </Button>
    <Text fontSize='xs'>3358 Rating</Text>
  </Flex>

  <Flex  gap="2">
  <Text fontSize='xs' as="del">MRP ₹ 2026</Text>
    <Text fontSize='xs' color="#1aab2a">{item.off}% OFF</Text>
  </Flex>

  <Flex >
  <Text fontSize='xl'>₹ {item.price}</Text>
  <Spacer/>
    <Text mt="1" fontSize='sm' as="b" color="tomato">ADD</Text>
  </Flex>

  </Box>

</>
  )
}

