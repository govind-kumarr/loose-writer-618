import React from 'react'
import { Input, Flex, Spacer, Box, Text, WrapItem, Checkbox } from '@chakra-ui/react'

export default function Filters() {
    return (
        <>
            <Box w="270px" minW={"190px"} h="fit-content" bg='white'>

                <Box w="full" pt="2" borderBottom={"1px"} borderColor={"gray.300"}>
                    <Text p='4' fontSize='lg' as="b">FILTERS</Text>
                </Box>

                <Box w="full" borderBottom={"1px"} borderColor={"gray.300"}  >
                    <WrapItem display={"block"} p="4">
                        <Text fontSize='md' as={"b"}>TOP BRANDS</Text>
                        <Input placeholder='Search Brands' />
                        <Flex>
                            <Checkbox size='sm' colorScheme='red'> Mamaearth  </Checkbox>
                            <Spacer />
                            <Text fontSize={"sm"}> 5 </Text>
                        </Flex>
                    </WrapItem>
                </Box>


                <Box w="full" borderBottom={"1px"} borderColor={"gray.300"}  >
                    <WrapItem display={"block"} p="4">
                        <Text fontSize='md' as={"b"}>DISCOUNT</Text>
                        <Flex>
                            <Checkbox size='sm' colorScheme='red'> Less Then 10%  </Checkbox> <Spacer />
                            <Text fontSize={"sm"}> 0 </Text> </Flex>

                        <Flex> <Checkbox size='sm' colorScheme='red'> 10% and above  </Checkbox>
                            <Spacer />
                            <Text fontSize={"sm"}> 0 </Text>
                        </Flex>

                        <Flex> <Checkbox size='sm' colorScheme='red'> 20% and above  </Checkbox>
                            <Spacer />
                            <Text fontSize={"sm"}> 0 </Text>
                        </Flex>

                        <Flex> <Checkbox size='sm' colorScheme='red'> 30% and above  </Checkbox>
                            <Spacer />
                            <Text fontSize={"sm"}> 0 </Text>
                        </Flex>
                    </WrapItem>
                </Box>

                <Box w="full" borderBottom={"1px"} borderColor={"gray.300"}  >
                    <WrapItem display={"block"} p="4">
                        <Text fontSize='md' as={"b"}>PRODUCT FORM</Text>
                        <Input placeholder='Search Product Form' />

                {Product_Form?.map((item)=>(
                    <Flex key={item.id}>  <Checkbox size='sm' colorScheme='red'> {item}  </Checkbox>
                        <Spacer />
                        <Text fontSize={"sm"}> 5 </Text>
                    </Flex>
                ))}
                    </WrapItem>
                </Box>


                <Box w="full" borderBottom={"1px"} borderColor={"gray.300"}  >
                    <WrapItem display={"block"} p="4">
                        <Text fontSize='md' as={"b"}>USES</Text>
                        <Input placeholder='Search Uses' />

                {Uses?.map((item)=>(
                    <Flex key={item.id}>  <Checkbox size='sm' colorScheme='red'> {item}  </Checkbox>
                        <Spacer />
                        <Text fontSize={"sm"}> 5 </Text>
                    </Flex>
                ))}
                    </WrapItem>
                </Box>

                <Box w="full" borderBottom={"1px"} borderColor={"gray.300"}  >
                    <WrapItem display={"block"} p="4">
                        <Text fontSize='md' as={"b"}>AGE</Text>
                        <Flex>
                            <Checkbox size='sm' colorScheme='red'> All  </Checkbox>
                            <Spacer />
                            <Text fontSize={"sm"}> 5 </Text>
                        </Flex>
                    </WrapItem>
                </Box>

                <Box w="full" borderBottom={"1px"} borderColor={"gray.300"}  >
                    <WrapItem display={"block"} p="4">
                        <Text fontSize='md' as={"b"}>GENDER</Text>
                        <Flex>
                            <Checkbox size='sm' colorScheme='red'> Unisex  </Checkbox>
                            <Spacer />
                            <Text fontSize={"sm"}> 5 </Text>
                        </Flex>
                    </WrapItem>
                </Box>

            </Box>
        </>
    )
}


const Product_Form =["Capsume", "Pack","Bottle","Juice","Syrup", "Tablet"];
const Uses =["Immunity Booster", "Liver Care", "Skin Care","Stomach Care","Diabetes Care","Hair Care","Blood Purifiers","Cardiac Care","Respiratory Care"];