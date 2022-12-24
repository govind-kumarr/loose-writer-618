import React, { useEffect, useState } from "react";
import { Input, Flex, Spacer, Box, Text, WrapItem, Checkbox } from '@chakra-ui/react'

export default function Filters({ setType, type, setCategory, category }) {

    return (
        <>

            {/* main container */}
            <Box w="270px" minW={"190px"} h="fit-content" bg='white' textAlign={"left"}>

                {/* filters heading */}
                <Box w="full" pt="2" borderBottom={"1px"} borderColor={"gray.300"}>
                    <Text p='4' fontSize='lg' as="b">FILTERS</Text>
                </Box>

                {/* filter by product category */}
                <Box w="full" borderBottom={"1px"} borderColor={"gray.300"}  >

                    <WrapItem display={"block"} p="4" >

                        {/* This box contain filter name */}
                        <Box mb="2">
                            <Text fontSize='md' as={"b"}  >Category</Text>
                        </Box>

                        {/* map category filters */}
                        {category_list?.map((item) => (

                            // this box contain checkbox   
                            <Box key={item.id}>
                                <Checkbox size='sm' colorScheme='red' value={item} onChange={(e) => setCategory([...category, e.target.value])}> {item}  </Checkbox>
                            </Box>
                        ))}
                    </WrapItem>
                </Box>

                {/* filter by product form/type */}
                <Box w="full" borderBottom={"1px"} borderColor={"gray.300"}  >
                    <WrapItem display={"block"} p="4">

                        {/* This box contain filter name */}
                        <Box mb="2">
                            <Text fontSize='md' as={"b"}>PRODUCT FORM</Text>
                        </Box>

                        {/* map product form filters */}
                        {Product_Form?.map((item) => (

                            // this box contain filter checkbox
                            <Box key={item.id}>
                                <Checkbox size='sm' colorScheme='red' value={item} onChange={(e) => setType([...type, e.target.value])} > {item}  </Checkbox>
                            </Box>
                        ))}
                    </WrapItem>
                </Box>

                {/* filter by product uses */}
                <Box w="full" borderBottom={"1px"} borderColor={"gray.300"}  >
                    <WrapItem display={"block"} p="4">


                        {/* This box contain filter name */}
                        <Box mb="2">
                            <Text fontSize='md' as={"b"}>USES</Text>
                        </Box>

                        {/* map uses filters */}
                        {Uses?.map((item) => (
                            // This box contain filter checobox
                            <Box key={item.id}>
                                <Checkbox size='sm' colorScheme='red' value="item" > {item}  </Checkbox>
                            </Box>
                        ))}
                    </WrapItem>
                </Box>


                {/* Filter by brands */}
                <Box w="full" borderBottom={"1px"} borderColor={"gray.300"}  >
                    <WrapItem display={"block"} p="4">


                        {/* This box contain filter name */}
                        <Box mb="2">
                            <Text fontSize='md' as={"b"}>TOP BRANDS</Text>
                        </Box>

                        {/* map brand filters */}
                        {brands?.map((item) => (

                            // this box contain filter checkbox
                            <Box key={item.id}>
                                <Checkbox size='sm' colorScheme='red' value="item" > {item}  </Checkbox>
                            </Box>
                        ))}
                    </WrapItem>
                </Box>

                {/* filter by discount */}
                <Box w="full" borderBottom={"1px"} borderColor={"gray.300"}  >
                    <WrapItem display={"block"} p="4">


                        {/* This box contain filter name */}
                        <Box mb="2">
                            <Text fontSize='md' as={"b"}>DISCOUNT</Text>
                        </Box>

                        {/* this box contain discounts checkbox  */}
                        <Box display={"flex"} flexDirection="column">
                            <Checkbox size='sm' colorScheme='red'> Less Then 10%  </Checkbox> <Spacer />
                            <Checkbox size='sm' colorScheme='red'> 10% and above  </Checkbox>
                            <Checkbox size='sm' colorScheme='red'> 20% and above  </Checkbox>
                            <Checkbox size='sm' colorScheme='red'> 30% and above  </Checkbox>
                        </Box>
                    </WrapItem>
                </Box>

                {/* filter by age */}
                <Box w="full" borderBottom={"1px"} borderColor={"gray.300"}  >
                    <WrapItem display={"block"} p="4">

                        {/* This box contain filter name */}
                        <Box mb="2">
                            <Text fontSize='md' as={"b"}>AGE</Text>
                        </Box>

                        {/* filter checkbox */}
                        <Flex>
                            <Checkbox size='sm' colorScheme='red'> All  </Checkbox>
                            <Spacer />
                            {/* <Text fontSize={"sm"}> 5 </Text> */}
                        </Flex>
                    </WrapItem>
                </Box>

                {/* filter by gender */}
                <Box w="full" borderBottom={"1px"} borderColor={"gray.300"}  >
                    <WrapItem display={"block"} p="4">

                        {/* This box contain filter name */}
                        <Box mb="2">
                            <Text fontSize='md' as={"b"}>GENDER</Text>
                        </Box>

                        <Flex>
                            <Checkbox size='sm' colorScheme='red'> Unisex  </Checkbox>
                            <Spacer />
                            {/* <Text fontSize={"sm"}> 5 </Text> */}
                        </Flex>
                    </WrapItem>
                </Box>

            </Box>
        </>
    )
}

// filter => brand 
const brands = ["Mamaearth", "Dabur", "Sugar Free", "Himalaya", "Baidyanath"]

// filter => category 
const category_list = ["Supplement", "Diabetes", "COVID", "Devices"]

// filter => product form/type
const Product_Form = ["Box", "Strip", "Bottle", "Jar", "Tin", "Packet", "1 Unit", "Combo Pack"];

// filter => product uses 
const Uses = ["Immunity Booster", "Liver Care", "Skin Care", "Stomach Care", "Diabetes Care", "Hair Care", "Blood Purifiers", "Cardiac Care", "Respiratory Care"];