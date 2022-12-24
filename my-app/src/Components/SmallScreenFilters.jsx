import { BiFilterAlt } from 'react-icons/bi'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    IconButton
} from '@chakra-ui/react'
import React from 'react'
import Filters from './Filters'

function SmallScreenFilters({ setType, type, setCategory, category }) {
 
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <>

            {/* button icon */}
            <IconButton ref={btnRef} w="35px" bg='#ff6347' onClick={onOpen} aria-label='Filters' icon={<BiFilterAlt color="white" />} float={"left"} />

            {/* drawer */}
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    {/* drawer close button */}
                    <DrawerCloseButton />

                    {/* heading  */}
                    <DrawerHeader>Apply Filters</DrawerHeader>

                    {/* component Body */}
                    <DrawerBody>

                        {/* display filter component */}
                        <Filters setType={setType} type={type} setCategory={setCategory} category={category} />

                    </DrawerBody>

                    {/* footer with close button */}
                    <DrawerFooter>
                        <Button bg="#ff6347" color="white" mr={3} onClick={onClose} 
                                _hover={{color:"#ff6347", background:"white", border:"2px"}} >
                            Close
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default SmallScreenFilters