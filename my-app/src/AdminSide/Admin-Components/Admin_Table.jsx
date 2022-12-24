import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button
} from "@chakra-ui/react";
import {Link } from "react-router-dom";
import RightAddIcon from "./RightAddIcon";


const Admin_Table = ({handleForm,handleStatistics}) => {

    
  return (
    <div>
      <TableContainer>
        <Table variant="striped" colorScheme="teal">
    
          <Thead>
            <Tr onClick={handleStatistics} style={{cursor:"pointer"}}>
              <Th backgroundColor={"aqua"}>Statistics</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td onClick={handleForm} backgroundColor={"aqua"} style={{cursor:"pointer"}}>
                <RightAddIcon />
              </Td>
            </Tr>
            <Tr>
              <Td backgroundColor={"aqua"}>
                <Link to="/check">
                    
                      + See All the Products
                    
                  </Link>
              </Td>
            </Tr>
            <Tr>
              <Td>Rewards</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Admin_Table;
