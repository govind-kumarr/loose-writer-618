import React from "react";
import { Link } from "react-router-dom";
const OffersNames = () => {
  return (
    <div
      style={{
        marginBottom: "10px",
        padding: "25px",
        background: "white",
        color: "white",
        fontSize: "14px",
        textAlign: "left",
        display: "grid",
        gap: "10px",
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        margin: "20px",
        marginLeft: "90px",
        width: "300px",
        height: "200px",
        textDecoration: "none",
      }}
    >
      <div>
        <Link to="/">Medicine Offers</Link>
      </div>
      <div className="line"></div>
      <div>
        <Link to="/labtest">Lab Test Offers</Link>
      </div>
      <div className="line"></div>
      <div>
        <Link to="/health">OTC/Health Product Offer</Link>
      </div>
      <div className="line"></div>
      <div>
        <Link to="/online">Online Product Consultation</Link>
      </div>
      <div className="line"></div>
      <div>
        <Link to="/careplan"> Care Plan Offers</Link>
      </div>
      <div className="line"></div>
      <div>
        <Link to="/other">Other Offers</Link>
      </div>
    </div>
  );
};

export default OffersNames;
