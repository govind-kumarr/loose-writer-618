import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
  } from '@chakra-ui/react';
  import {  Alert, AlertIcon, AlertDescription,AlertTitle,Heading } from '@chakra-ui/react';
import { useState } from 'react';


function BasicUsage({handleClose,children}) {
    const [truth,setTruth]=useState(false);
    
    return (
      <>
        <Modal isOpen={true} onClose={handleClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader></ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {children}
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

  export {BasicUsage};