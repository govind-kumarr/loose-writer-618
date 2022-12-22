import React from "react";
import medicine from "../Data-Details/medicine.json";
import OffersNames from "../components/OffersNames";
import "./Product.css";

const Medicine = () => {
  console.log(medicine);

  return (
    <div>
      <OffersNames />
      <div className="heading">Medicine Offers</div>
      <div className="container">
        {/* map through the data and display the cards */}
        {medicine.map((item) => (
          <div className="card" key={item.id}>
            <div className="card-image">
              <img className="imgdata" src={item.imgURL} alt={item.name} />
            </div>
            <p>{item.title}</p>
            <div className="price">
              <h3>{item.sellingPrice}</h3>
              <h4>{item.mrp}</h4>
              <p1>{item.date}</p1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Medicine;
