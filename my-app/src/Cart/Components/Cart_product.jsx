import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { get_data } from "../../Redux/actions";
import { Cart_product_style } from "../Style/Cart_Product_style";
// import { Cart_products } from "./Medora.styled";

const Cart_product = ({
  name,
  mrp,
  price,
  desc,
  id,
  qty,
  varChange,
  funcChange,
}) => {
  const [count, setCount] = React.useState(qty);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (e) => {
    navigate(`/Products/Cart/${id}`);
  };

  const handleDelete = () => {
    axios
      .delete(
        `https://mock-test-8th-json-server.herokuapp.com/api/Cart/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((data) => {
        axios
          .get("https://mock-test-8th-json-server.herokuapp.com/api/Cart/posts")
          .then((data) => {
            // console.log("data:", data);
            get_data(dispatch);
          })
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  };

  const handleQty = (t) => {
    if (t) {
      var payload = {
        qty: qty + 1,
      };
    } else {
      var payload = {
        qty: qty - 1,
      };
    }
    axios
      .patch(
        `https://mock-test-8th-json-server.herokuapp.com/api/Cart/${id}`,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((data) => {
        console.log("data:", data.data);
        get_data(dispatch);
        funcChange(!varChange);
      })
      .catch((err) => console.error(err));
  };

  return (
    <Cart_product_style>
      <div>
        <div id="leftPurchaseDetail">
          <div>
            <div
              id="leftPurchaseName"
              onClick={() => navigate(`/Products/Cart/${id}`)}
            >
              {name}
            </div>
            <div id="leftPurchasePrice">
              <div>
                ₹<b id="leftPurchasePriceFirst">{price}</b>
              </div>
            </div>
          </div>
          <div>
            <div id="quant">{desc}</div>
            <div id="leftPruchaseMrp">
              MRP &nbsp; ₹<span id="mrpdash">{mrp}</span>
            </div>
          </div>
          <div id="removeItem">
            <div onClick={() => handleDelete()}>
              <div className="remove">
                <img src="https://img.1mg.com/images/delete_icon.svg" alt="" />
              </div>
              <div className="remove">Remove</div>
            </div>
            <div>
              <div id="dec">
                <img
                  src="https://www.1mg.com/images/minus-cart.svg"
                  alt="decrease"
                  className=""
                  onClick={() => {
                    if (count > 1) {
                      console.log("count:", count);
                      handleQty(false);
                      setCount((prev) => prev - 1);
                    } else {
                      handleDelete();
                    }
                  }}
                />
              </div>
              <div id="betweenIncDec">{count}</div>
              <div id="inc">
                <img
                  src="https://www.1mg.com/images/plus-cart.svg"
                  alt="increase"
                  onClick={() => {
                    handleQty(true);
                    setCount((prev) => prev + 1);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Cart_product_style>
  );
};

export default Cart_product;
