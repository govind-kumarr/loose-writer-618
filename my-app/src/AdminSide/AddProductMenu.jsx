import React from 'react'
import styled from "styled-components";
import {Button} from "@chakra-ui/react";
const AddProductMenu = (props) => {
    const {handleChange,title,subTitle,price,category,type,image,rate,count,off,quantity,max_unit,handleForm}=props;
  return (
    <div>
        <FormDiv className="form-element-div">
              <Label className="form-label">Product Title :- </Label>
              <Input
                className="form-input"
                type="text"
                name="title"
                value={title}
                onChange={(e) => handleChange(e)}
                placeholder="title"
              />
            </FormDiv>
            <FormDiv>
              <Label>Product Sub-Title :- </Label>
              <Input
                type="text"
                value={subTitle}
                name="subTitle"
                onChange={(e) => handleChange(e)}
                placeholder="subTitle"
              />
            </FormDiv>
            <FormDiv>
              <Label>Price :- </Label>
              <Input
                type="Number"
                value={price}
                name="price"
                onChange={(e) => handleChange(e)}
                placeholder="price"
              />
            </FormDiv>
            <FormDiv>
              <Label>Category :- </Label>
              <Select
                value={category}
                name="category"
                onChange={(e) => handleChange(e)}
                placeholder="category"
              >
                <option value="">Select Category</option>
                <option value="Supplement">Supplement</option>
                <option value="Diabetes">Diabetes</option>
                <option value="COVID">COVID</option>
                <option value="Devices">Devices</option>
              </Select>
            </FormDiv>
            <FormDiv>
              <Label>Type :-</Label>
              <Input
                type="text"
                value={type}
                name="type"
                onChange={(e) => handleChange(e)}
                placeholder="type"
              />
            </FormDiv>
            <FormDiv>
              <Label>Image :-</Label>
              <Input
                type="url"
                value={image}
                name="image"
                onChange={(e) => handleChange(e)}
                placeholder="image"
              />
            </FormDiv>
            <FormDiv>
              <Label>Rate :-</Label>
              <Input
                type="Number"
                value={rate}
                name="rate"
                onChange={(e) => handleChange(e)}
                placeholder="rate"
              />
            </FormDiv>
            <FormDiv>
              <Label>Count :-</Label>
              <Input
                type="text"
                value={count}
                name="count"
                onChange={(e) => handleChange(e)}
                placeholder="count"
              />
            </FormDiv>
            <FormDiv>
              <Label>off :-</Label>
              <Input
                type="Number"
                value={off}
                name="off"
                onChange={(e) => handleChange(e)}
                placeholder="off"
              />
            </FormDiv>
            <FormDiv>
              <Label>Quantity :-</Label>
              <Input
                type="Number"
                value={quantity}
                name="quantity"
                onChange={(e) => handleChange(e)}
                placeholder="quantity"
              />
            </FormDiv>
            <FormDiv>
              <Label>Max Unit :-</Label>
              <Input
                type="Number"
                value={max_unit}
                name="max_unit"
                onChange={(e) => handleChange(e)}
                placeholder="max_unit"
              />
            </FormDiv>
            <div style={{display:"flex",justifyContent:"center",alignItem:"center",gap:"25px",padding:"20px"}}>
              <Button
                className="buttone"
                _hover={{ backgroundColor: "cyan.400" }}
                style={{ textAlign: "center" }}
                colorScheme="teal"
                type="submit"
              >
                ADD
              </Button>
              <Button onClick={handleForm}>
                  Cancel
              </Button>
            </div>
    </div>
  )
}

const FormDiv = styled.div`
  border: 0px solid yellow;

  display: flex;
  padding: 20px;
  margin: auto;
  align-items: center;
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
    rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
  @media all and (min-width: 0px) and (max-width: 481px) {
    display: flex;
    flex-direction: column;
  }
  @media all and (min-width: 481px) and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;


const Input = styled.input`
  border: 1px solid blue;
  flex: 1;
  text-align: center;
  font-size: 22px;
  width: 40%;
  border-radius: 6px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  @media all and (min-width: 481px) and (max-width: 768px) {
    align-self: center;
    width: auto;
  }
  @media all and (min-width: 0px) and (max-width: 481px) {
    align-self: center;
    width: auto;
  }
`;

const Select = styled.select`
  border: 1px solid blue;
  flex: 1;
  text-align: center;
  font-size: 22px;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  option {
    color: green;
  }
`;


const Label = styled.label`
  border: 0px solid gray;
  margin-right: 22px;
  text-align: center;
  font-size: 20px;
  color: green;
  width: 40%;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  @media all and (min-width: 481px) and (max-width: 768px) {
    align-self: center;
    width: auto;
    flex: 1;
  }
  @media all and (min-width: 0px) and (max-width: 481px) {
    align-self: center;
    width: auto;
    flex: 1;
  }
`;

export default AddProductMenu