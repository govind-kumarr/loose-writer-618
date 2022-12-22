// import { TextField } from "@mui/material";
import styled from "styled-components";

export const Doc = styled.div`
  * {
    box-sizing: border-box;
    font-family: "Clear Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  #mindiv1st {
    width: 100%;
    height: 536px;
    display: grid;
    grid-template-columns: repeat(2, 553px);
    justify-content: center;
    padding: 60px 66px 40px;
    /* border: red solid; */
  }

  #mindiv1st > div > * {
    width: 100%;
  }

  .first_div {
    line-height: normal;
  }

  .Consultdoc {
    font-size: 28px;
    font-weight: 700;
  }

  .Consultdoc > span {
    color: #913d36;
  }

  .subheading {
    font-size: 20px;
    font-weight: 700;
    color: #9e9e9e;
  }

  .free_consultation_add {
    width: 100%;
    opacity: 1;
    transform: scale(1);
    animation: apear 0.3s ease-in-out;
  }

  .addcontainer {
    width: 100%;
    height: 101.47;
    padding: 10px 0px;
    /* border: red solid; */
  }

  .allinput {
    position: relative;
    outline: 0;
    margin: 12px 0px 0px;
    padding: 12px 0px 5px;
    border: 0;
    border-bottom: 1px #e0e0e0 solid;
    transition: box-shadow 0.15s ease-out;
  }

  .buttondiv {
    margin: 0px 0px 23.1406px;
    padding: 30px 0px 0px;
    height: 98px;
  }

  .allbutton {
    height: 50px;
    width: 282.5px;
    margin: 16px 0px 0px;
    font-size: 15px;
    font-weight: 700;
    color: #fff;
    border-radius: 45px;
    border: none;
    background-color: #ff6f61;
  }

  .second_div {
    display: flex;
    margin-bottom: 20px;
    overflow: hidden;
    justify-content: end;
    /* border: red solid; */
  }

  /* --------------- */

  /* Consultation */
  .step_main_div {
    display: flex;
    flex-direction: column;
    padding-bottom: 200px;
    text-align: center;
  }

  .steps_heading_div {
    margin: 70px 10px;
  }

  .steps_heading {
    font-size: 30px;
    color: #9e9e9e;
    margin: 1.1rem 0 0.88rem 0;
  }

  .steps {
    padding: 20px 7em;
    font-size: 30px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
  }

  .inner_img {
    width: 70%;
  }

  .inner_2nd_div_step {
    display: flex;
    align-items: center;
    /* border: red solid; */
  }

  .step_num {
    padding: 0 32px 0 0;
    color: #c9cbcc;
    flex-basis: auto;
    font-size: 64px;
    font-weight: 700;
    transform: translateY(-16%);
  }

  .step_dis {
    text-align: left;
  }

  .step_name {
    color: #2e2d2d;
    font-size: 28px;
  }

  .step_about {
    font-size: 18px;
    color: #616161;
    padding-top: 10px;
  }

  /* ------------- */

  /* countdis */

  .count_sliding_dis {
    background-color: #f8f8f8;
  }

  .Consultations_count {
    border-radius: 4px;
    background-color: #fff;
    border: 1px solid #979797;
    width: 70%;
    color: #000;
    margin: 0 auto;
    transform: translateY(-50%);
    display: grid;
    font-size: 10px;
    padding: 4em 0;
    text-align: center;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
  }

  .count_dis {
    border-right: 1px solid #979797;
    display: flex;
    flex-direction: column;
    box-sizing: inherit;
  }

  .nums {
    color: #ff6f61;
    font-size: 64px;
    font-weight: 700;
  }

  .Consultations_names {
    color: #616161;
    font-size: 22px;
    font-weight: 700;
  }

  .sliding_info {
    width: 100%;
    height: auto;
    /* border: red solid; */
  }

  .sliding_info_heading {
    text-align: center;
    color: #212121;
    font-size: 20px;
    font-weight: 500;
  }
  /* ----------- */

  /* quotes */

  .quotes {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: center;
    padding: 2% 4%;
  }

  .innerdiv_quotes {
    display: flex;
    flex: 1;
    margin: 0 auto;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 5%;
    width: 100%;
    /* border: red solid; */
  }

  .quotes_img {
    height: 90%;
  }

  .quotes_img > img {
    width: 74.72px;
  }

  .inner_quotes {
    font-size: 20px;
    font-weight: 700;
    color: #616161;
    padding-top: 40px;
  }

  .quotes_dis {
    font-size: 16px;
    color: #616161;
    padding-top: 10px;
  }

  /* ----------- */

  /* FAQ */
  .FAQ_div {
    font-size: 10px;
    text-align: center;
    padding: 0 20em;
    background-color: #fff;
  }

  .FAQ_div_heading {
    display: inline-block;
    color: #9e9e9e;
    margin: 70px 10px;
  }

  .FAQ_div_heading > h1 {
    font-size: 30px;
  }

  .FAQ_1st_div {
    padding-bottom: 5em;
  }

  .FAQ_QandA_div {
    width: 100%;
    font-size: 12px;
  }

  .FAQ_question {
    display: flex;
    justify-content: space-between;
    padding: 20px 0 0;
    align-items: flex-start;
    font-size: 20px;
  }

  .FAQ_answer {
    padding: 10px 0 20px;
    font-size: 18px;
  }

  /* ----------- */

  /* Are you doc oc */
  .Join_doc {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    font-size: 10px;
    padding: 6em 20em;
    background-color: #fbfafa;
  }

  .doc_img_div {
    flex: 1;
    text-align: center;
  }

  .doc_img_div > img {
    vertical-align: middle;
    height: 20em;
  }

  .doc_info_div {
    flex: 1;
  }

  .doc_heading_div {
    color: #212121;
    font-size: 30px;
    font-weight: 700;
    padding-bottom: 10px;
  }

  .doc_dis_div {
    color: #9e9e9e;
    font-size: 20px;
    font-weight: 700;
    padding: 10px 0 20px;
    width: 60%;
  }

  button {
    height: 48px;
    background-color: #ff6f61;
    text-align: center;
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    outline: none;
    width: 227px;
    border: none;
  }

  .FAQ_question {
    text-align: left;
    color: #2e2d2d;
  }

  .FAQ_answer {
    text-align: left;
    color: #9e9e9e;
  }

  .css-aqpgxn-MuiFormLabel-root-MuiInputLabel-root {
    color: white !important;
  }

  .css-1ptx2yq-MuiInputBase-root-MuiInput-root:before {
    border-bottom: 1px solid #e0e0e0 !important;
  }

  .css-1ptx2yq-MuiInputBase-root-MuiInput-root:after {
    border-bottom: 2px solid grey !important;
  }

  .css-1c2i806-MuiFormLabel-root-MuiInputLabel-root.Mui-focused {
    color: #616161 !important;
  }

  .Type_Writer_div {
    width: fit-content !important;
    display: flex;
    position: relative;
    bottom: 25px;
    pointer-events: none;
    z-index: 5;
    height: 18px;

    > span {
      font-size: 16px;
      color: #bfbfbf;
    }

    .Typewriter__wrapper {
      font-size: 16px;
      color: #bfbfbf;
      font-family: "Clear Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    }

    .Typewriter__cursor {
      display: none;
    }
  }
`;
