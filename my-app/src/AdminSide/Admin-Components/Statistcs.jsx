import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

const Statistcs = ({produ_length}) => {
  return (
    <div>
        <Top>
            <TopDiv style={{ display: "flex", position: "relative" }}>
              <NoOfProducts>Total No of Products :-</NoOfProducts>
              <div data-cy="navbar-cart-count" className="navbar-cart-count">
                {produ_length}
              </div>
              <Link to="/cart">
                <img
                  data-cy="cart-image-link"
                  src="./shopping-cart.png"
                  alt="cart"
                  width="30px"
                />
              </Link>
            </TopDiv>
          </Top>
    </div>
  )
}
const NoOfProducts = styled.div`
  border: 0px solid green;
  text-align: left;
  color: green;
  margin-right: 6px;
  font-size: 20px;
  @media all and (min-width: 0px) and (max-width: 481px) {
    text-align: center;
    align-self: center;
  }
  @media all and (min-width: 481px) and (max-width: 768px) {
    text-align: center;
  }
`;

const TopDiv = styled.div`
border:0px solid pink;
width:max-content;
img{
    margin-left:12px;
}
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}
`;
const Top = styled.div`
  border: 0px solid blue;
  margin-left: 20px;

  @media all and (min-width: 0px) and (max-width: 481px) {
    display: flex;
    justify-content: center;
  }
  @media all and (min-width: 481px) and (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

export default Statistcs