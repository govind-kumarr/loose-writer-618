import { Button, Alert, AlertIcon, AlertDescription, AlertTitle, Heading } from '@chakra-ui/react';

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react';

import { useState } from 'react';


const BasicAdded = ({ handleClose }) => {
    const [truth, setTruth] = useState(false);

    return (
        <>
            <Modal isOpen={true} onClose={handleClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader></ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {<Alert
                            status='success'
                            variant='subtle'
                            flexDirection='column'
                            alignItems='center'
                            justifyContent='center'
                            textAlign='center'
                            height='200px'
                        >
                            <AlertIcon boxSize='40px' mr={0} />
                            <AlertTitle mt={4} mb={1} fontSize='lg'>
                                Product has been added successfully!
                            </AlertTitle>
                            <AlertDescription maxWidth='sm'>
                                Thanks for adding product.
                            </AlertDescription>
                        </Alert>}
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={handleClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}


export { BasicAdded }