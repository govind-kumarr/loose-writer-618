import styled from "styled-components";

export const Cart_product_style = styled.div`
  > div {
    display: flex;
    gap: 30px;
    text-decoration: none;
    color: black;
    width: 100%;
  }

  #leftPurchaseDetail {
    /* border: 1px solid purple; */
    width: 100%;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 20%);
    background: #fff;
    display: flex;
    flex-direction: column;
    padding: 10px;
  }

  #leftPurchaseDetail > div {
    display: flex;
    justify-content: space-between;
  }

  #leftPurchaseDetail > div:nth-child(2) {
    color: rgb(158, 158, 158);
    font-size: 10px;
    margin-top: 5px;
  }

  #leftPurchaseName {
    /* border:1px solid blue; */
    width: 65%;
    height: 100%;
    font-size: 14px;
    font-weight: 700;
    color: rgb(33, 33, 33);
    cursor: pointer;
  }

  #leftPurchasePrice {
    /* border: 2px solid green; */
    width: 12%;
    display: grid;
    grid-template-rows: repeat(2, 40%);
  }

  #leftPurchasePrice > div {
    /* border: 1px solid teal; */
    text-align: end;
  }

  #leftPurchasePrice > div:first-child {
    font-size: 12px;
  }

  #leftPruchaseMrp {
    display: inline-block;
    font-size: 10px;
    color: rgb(158, 158, 158);
  }
  #mrpdash {
    text-decoration: line-through;
    font-weight: bolder;
  }
  #quant {
    font-weight: bolder;
  }

  #removeItem {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0 10px 0;
  }

  #removeItem > div:first-child {
    /* border: 1px solid darkred; */
    display: flex;
    font-size: 12px;
    color: rgb(158, 158, 158);
    gap: 3px;

    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  #removeItem > div:last-child {
    /* border: 2px solid yellow; */
    display: flex;

    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  #betweenIncDec {
    font-size: 12px;
  }

  #inc,
  #dec,
  .remove {
    cursor: pointer;
  }
  .remove {
    margin-right: 1%;
  }
`;
