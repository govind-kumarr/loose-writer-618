import React from 'react'
import {Image,Text, Flex,Button, Spacer, Box,} from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'

export default function ProductCard() {
  return (
<>

<Box bg='white' height='360' minHeight={"fit-content"} m="auto" maxWidth={"250px"} p="5">
  <Image p="8" src='https://onemg.gumlet.io/images/f_auto,c_fit,q_auto,w_150,h_150/95f3887290df43c98fbaebf39143cf00/tata-1mg-daily-wellness-combo-pack-to-support-immunity-liver-function-and-hair-skin-nails.jpg' alt='Dan Abramov' h="65%" w="full" />
  <Text fontSize='sm' lineHeight={"4"}>Tata 1mg Daily Wellness Combo Pack to Support Immunity, Liver</Text>
  <Text fontSize='xs'>combo pack of 4 Packs</Text>
  
  <Flex mt="1" gap="2">
  <Button borderRadius={"3px"} colorScheme='white' h="5" w="12" bg="#1aab2a" rightIcon={<StarIcon w={2} ml="-5px" h={2} color="white" />} >
    4.3
  </Button>
    <Text fontSize='xs'>3358 Rating</Text>
  </Flex>

  <Flex  gap="2">
  <Text fontSize='xs' as="del">MRP ₹ 2026</Text>
    <Text fontSize='xs' color="#1aab2a">47% OFF</Text>
  </Flex>


  <Flex >
  <Text fontSize='xl'>₹ 1020</Text>
  <Spacer/>
    <Text mt="1" fontSize='sm' as="b" color="tomato">ADD</Text>
  </Flex>

  </Box>

</>
  )
}
