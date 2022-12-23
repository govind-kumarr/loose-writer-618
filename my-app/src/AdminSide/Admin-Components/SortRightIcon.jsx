import React from "react";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button
  } from '@chakra-ui/react';
import {ChevronDownIcon } from "@chakra-ui/icons";

const SortRightIcon = ({handleAscending,handleDescending,handleRelevance}) => {
  return (
    <div>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          Relevance
        </MenuButton>
        <MenuList >
          <MenuItem onClick={handleRelevance}>Relevance</MenuItem>
          <MenuItem onClick={handleDescending}>Price: High to Low</MenuItem>
          <MenuItem onClick={handleAscending}>Price: Low to High</MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

export default SortRightIcon;
