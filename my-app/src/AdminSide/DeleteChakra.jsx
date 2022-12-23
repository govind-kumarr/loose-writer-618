import React from "react";
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Button,
    useDisclosure
  } from '@chakra-ui/react'

const DeleteChakra = ({id,deleteHandle}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  return (
    <div>
      <>
        {/* <Button colorScheme="red" onClick={onOpen}>
          Delete Customer
        </Button> */}
        <Button
              _hover={{ backgroundColor: "teal.400" }}
              data-cy="delete-button"
              className="danger"
              onClick={onOpen}
              variant={"outline"}
              backgroundColor="aqua"
              
            >
              <img src="./delete.png" alt="delete" width="20px" />
     </Button>

        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Delete Product
              </AlertDialogHeader>

              <AlertDialogBody>
                Are you sure? You can't undo this action afterwards.
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme="red" onClick={() => deleteHandle(id)} ml={3}>
                  Delete
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </>
    </div>
  );
};

export {DeleteChakra};
