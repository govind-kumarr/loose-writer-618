import React from "react";
import {
    Tag,
    TagLabel,
    TagLeftIcon,
    HStack
  } from '@chakra-ui/react';
  import { AddIcon } from "@chakra-ui/icons";

const RightAddIcon = ({handleForm}) => {
  return (
    <div>
      <HStack spacing={4} onClick={handleForm}>
        
          <Tag size={"lg"} key={"lg"} variant="subtle" colorScheme="cyan">
            <TagLeftIcon boxSize="12px" as={AddIcon} />
            <TagLabel>Add Product</TagLabel>
          </Tag>
        
      </HStack>
    </div>
  );
};

export default RightAddIcon;
