import axios from "axios";
import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { get_data } from "../../Redux/actions";
import { AuthContext } from "../../Redux/Login_Auth";
import { Single_product } from "../Styles/Product";

export const Single_slider_product = ({
  image_url,
  name,
  desc,
  mrp,
  price,
  discount,
  id,
}) => {
  const { isvisible, setvisible } = useContext(AuthContext);
  const { token } = useSelector((state) => {
    // console.log(state);
    return state;
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleADD = () => {
    if (!token) {
      return setvisible(true);
    }

    axios
      .post(`https://mock-test-8th-json-server.herokuapp.com/api/Cart`, {
        qty: 1,
        image_url,
        name,
        desc,
        mrp,
        price,
        discount,
      })
      .then((data) => {
        get_data(dispatch);
      })
      .catch((err) => console.error(err));
  };

  return (
    <Single_product>
      <div>
        <img src={image_url} alt="Product Image" />
      </div>
      <div onClick={() => navigate(`/Products/Slider_products/${id}`)}>
        {name}
      </div>
      <div>{desc}</div>
      <div>
        <div>
          <span>MRP</span>
          <span>₹{mrp}</span>
          <span>{discount}</span>
        </div>
        <div>
          <span>₹{price}</span>
          <span onClick={handleADD}>ADD</span>
        </div>
      </div>
    </Single_product>
  );
};
