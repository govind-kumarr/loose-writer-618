import styled from "styled-components";

export const Nav_Search = styled.div`
  .navbar1 {
    margin: auto;
    height: fit-content;
    display: flex;
    box-sizing: border-box;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid #f1f4f6;
    background: #ffffff;
  }

  .navbar_inner_div {
    display: flex;
    justify-content: center;
    background-color: #fff;
    gap: 2px;
    /* border: red solid; */
  }

  .navbar_2nd_part {
    display: flex;
    align-items: center;
    /* border: red solid; */
  }

  .spark_img {
    height: 20px;
    width: 20px;
    display: flex;
    align-items: center;
  }

  .upload_btn {
    /* border: red solid; */
    padding: 5px 10px;
    border-radius: 4px;
    background-color: #ff6f61;
    padding: 10px;
    margin-left: 5px;
    text-decoration: none;
    width: 140px;
    text-align: center;
  }

  .upload_anc {
    text-decoration: none;
    color: #ffffff;
  }

  .navbar_discount {
    /* border: rebeccapurple solid; */
    font-size: 14px;
  }

  .location_bar_innerdiv {
    display: flex;
    align-items: center;
  }

  .location_bar_innerdiv > div {
    display: flex;
    box-sizing: border-box;
    align-items: center;
    background-color: #f1f4f6;
    padding: 0 10px;
    /* border: red solid; */
  }

  .location_icon {
    color: #666666;
  }

  .search_bar {
    padding: 6px 13px 6px 1px;
    width: 75%;
  }

  .search_bar_innerdiv {
    width: 500px;
    position: relative;
    background-color: #f1f4f6;
    /* border: #3e3e3e solid; */
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .search_icon {
    width: 27px;
    height: 33px;
    cursor: pointer;
    display: flex;
    align-items: center;
    /* border: red solid; */
  }

  .searchbarinfo {
    width: 100%;
    font-size: 14px;
    line-height: 21px;
    padding: 6px 30px 7px 0;
    border: none;
    outline: 0;
    bottom: 19px;
    color: #3e3e3e;
    text-indent: 12px;
    height: auto;
    border-radius: 0 3px 3px 0;
    background-color: #f1f4f6;
    display: inline;
  }
`;
