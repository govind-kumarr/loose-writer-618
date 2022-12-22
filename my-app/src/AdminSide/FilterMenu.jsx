import React from "react";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
const FilterMenu = () => {
  return (
    <div>
        {/* filtering */}
      <div>
        <div>Filter By</div>
        <div>
          <Checkbox defaultChecked>Name</Checkbox>
        </div>
        <div>
          <Checkbox defaultChecked>Price</Checkbox>
        </div>
      </div>
{/* sorting */}
      <div>
            <div>Sorting</div>
            <div>
                Ascending Order
            </div>
      </div>
    </div>
  );
};

export default FilterMenu;
