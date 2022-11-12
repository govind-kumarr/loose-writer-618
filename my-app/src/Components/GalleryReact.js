import React, { useState } from "react";
import Menu from "../data/FiltersData";

const GalleryReact = () => {
  const [items, setItems] = useState(Menu);
  const [active, setActive] = useState(false);
  const filterItem = (categItem) => {
    const updateItems = Menu.filter((curElem) => {
      return curElem.category === categItem;
    });

    setItems(updateItems);
    setActive(true);
  };

  return (
    <>
      <div className="container">
        <ul className="nav  btn btn-secondary justify-content-center">
          <li className="nav-item">
            <a
              className={active ? "nav-link" : "nav-link active"}
              href="javascrip:0;"
              onClick={() => filterItem("Fever")}
            >
              Fever
            </a>
          </li>
          <li className="nav-item">
            <a
              className={active ? "nav-link" : "nav-link active"}
              href="javascrip:0;"
              onClick={() => filterItem("Diabetes")}
            >
              Diabetes
            </a>
          </li>
          <li className="nav-item">
            <a
              className={active ? "nav-link" : "nav-link active"}
              href="javascrip:0;"
              onClick={() => filterItem("Women Health")}
            >
              Women Health
            </a>
          </li>
          <li className="nav-item">
            <a
              className={active ? "nav-link" : "nav-link active"}
              href="javascrip:0;"
              onClick={() => filterItem("Fitness")}
            >
              Fitness
            </a>
          </li>
          <li className="nav-item">
            <a
              className={active ? "nav-link" : "nav-link active"}
              href="javascrip:0;"
              onClick={() => filterItem("Covid 19")}
            >
              Covid 19
            </a>
          </li>
          <li className="nav-item">
            <a
              className={active ? "nav-link" : "nav-link active"}
              href="javascrip:0;"
              onClick={() => filterItem("Allergy Profiles")}
            >
              Allergy Profiles
            </a>
          </li>
          <li className="nav-item">
            <a
              className={active ? "nav-link" : "nav-link active"}
              href="javascrip:0;"
              onClick={() => filterItem("Senior Citizen")}
            >
              Senior Citizen
            </a>
          </li>
          <li className="nav-item">
            <a
              className={active ? "nav-link" : "nav-link active"}
              href="javascrip:0;"
              onClick={() => filterItem("Lifestyle Habits")}
            >
              Lifestyle Habits
            </a>
          </li>
          <li className="org">
            <a
              className={active ? "nav-link" : "nav-link active"}
              href="javascrip:0;"
              onClick={() => setItems(Menu)}
            >
              View All
            </a>
          </li>
        </ul>
       
      </div>

      <div className="container-fluid mt-4">
        <div className="row">
          {items.map((elem) => {
            const { id, name, image, description, price } = elem;

            return (
              <div className="col-sm-4" id={id}>
                <div class="card mb-3">
                      <div class="card-body">
                      <img class="img-fluid" src={image} alt={name} />
                        <h5 class="card-title font-weight-bolder text-left">{name}</h5>
                        <p class="card-text font-italic text-left">{description}</p>
                        <div class="d-flex justify-content-between text-left">
                          <div class="p-1 font-weight-bold text-left">{price} <del class="font-weight-normal text-secondary">₹6999</del></div>
                          <button type="button" className="btn btn-danger p-1">
                            Add to Cart
                          </button>
                        </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default GalleryReact;
