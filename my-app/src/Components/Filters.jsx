import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Input, Flex, Spacer, Box, Text, WrapItem, Checkbox } from '@chakra-ui/react'

export default function Filters() {

    const [searchParams, setSearchParams] = useSearchParams();
    const [sortBy, setSortyBy] = useState(searchParams.get("sortBy") || "");
    const [category, setCategory] = useState(searchParams.getAll("category") || []);

    // product form
    const [type, setType] = useState(searchParams.getAll("type") || []);

    const handleFilter = (e) => {
        const option = e.target.value;
        //if the option is present in the category array, remove it,
        // else add it to the category array.

        let newCategory = [...category];
        if (newCategory.includes(option)) {
            //remove it
            newCategory.splice(newCategory.indexOf(option), 1);
        } else {
            //add it
            newCategory.push(option);
        }
        setCategory(newCategory);
    };


    useEffect(() => {
        const params = {};
        // params.limit=10
        category && (params.genre = category);
        sortBy && (params.sortBy = sortBy);
        setSearchParams(params);
    }, [category, setSearchParams, sortBy]);

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

                        {Product_Form?.map((item) => (
                            <Flex key={item.id}>  <Checkbox size='sm' colorScheme='red' value={item} onChange={handleFilter}> {item}  </Checkbox>
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

                        {Uses?.map((item) => (
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

                <input
                    type="checkbox"
                    defaultChecked={category.includes("")}
                    value="Supplement"
                    onChange={handleFilter}
                />
                <label> spplements </label>

            </Box>
        </>
    )
}


const Product_Form = ["Capsume", "Pack", "Bottle", "Juice", "Syrup", "Tablet"];
const Uses = ["Immunity Booster", "Liver Care", "Skin Care", "Stomach Care", "Diabetes Care", "Hair Care", "Blood Purifiers", "Cardiac Care", "Respiratory Care"];