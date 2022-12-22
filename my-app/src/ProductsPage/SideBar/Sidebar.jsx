import React from "react";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div>
      {/* <h3>SIDEBAR</h3> */}

      <div className={styles.sidebar}>
        <div>
          <div className={styles.CatHeading} style={{ marginTop: "10px" }}>
            CATEGORIES
          </div>
          <div className={styles.Featured_div}>FEATURED</div>
          <div>
            <div>
              <a className="active" href="#home">
                Flash Deals
              </a>
            </div>
            <div>
              <a className="active" href="#home">
                Tata 1mg Health Products
              </a>
            </div>
            <div>
              <a className="active" href="#home">
                Summer Essential
              </a>
            </div>
            <div>
              <a className="active" href="#home">
                Trending Now
              </a>
            </div>
            <div>
              <a className="active" href="#home">
                New Arrivals On Tata 1MG
              </a>
            </div>
            <div>
              <a className="active" href="#home">
                Buy More, Save More
              </a>
            </div>
            <div>
              <a className="active" href="#home">
                Minimum 33% off
              </a>
            </div>
            <div>
              <a className="active" href="#home">
                Combos
              </a>
            </div>
            <div>
              <a className="active" href="#home">
                Deals Of The Day
              </a>
            </div>
          </div>
          <div className={styles.Featured_div}>SHOW ALL</div>
        </div>
        <div className={styles.filter_name}>FILTERS</div>
        <hr></hr>
        <div className={styles.filter_heading}>BRANDS</div>
        <div className="brands">
          <input
            className={styles.filter_input}
            type="text"
            placeholder="Search Brands"
          />
          <br></br>
          <br></br>

          <div className={styles.slider}>
            <div className={styles.filter}>
              <input type="checkbox"></input>
              <p>Dabur</p>
              <span>348</span>
            </div>
            <div className={styles.filter}>
              <input type="checkbox"></input>
              <p>VLCC</p>
              <span>195</span>
            </div>
            <div className={styles.filter}>
              <input type="checkbox"></input>
              <p>Swadeshi</p>
              <span>166</span>
            </div>
            <div className={styles.filter}>
              <input type="checkbox"></input>
              <p>MuscleBlaze</p>
              <span>124</span>
            </div>
            <div className={styles.filter}>
              <input type="checkbox"></input>
              <p>VLCC</p>
              <span>195</span>
            </div>
            <div className={styles.filter}>
              <input type="checkbox"></input>
              <p>Mamaearth</p>
              <span>76</span>
            </div>
            <div className={styles.filter}>
              <input type="checkbox"></input>
              <p>Himalaya Baby</p>
              <span>57</span>
            </div>
            <div className={styles.filter}>
              <input type="checkbox"></input>
              <p>Nutrition</p>
              <span>32</span>
            </div>
            <div className={styles.filter}>
              <input type="checkbox"></input>
              <p>Accu-chek</p>
              <span>31</span>
            </div>
          </div>
        </div>

        <hr></hr>
        <div className={styles.filter_heading}>PRODUCT TAGS</div>

        <div className="brands">
          <input
            className={styles.filter_input}
            type="text"
            placeholder="Search Product Tags"
          />

          <br></br>
          <br></br>

          <div className={styles.slider}>
            <div className={styles.filter}>
              <input type="checkbox"></input>
              <p>Xhebula</p>
              <span>1</span>
            </div>
            <div className={styles.filter}>
              <input type="checkbox"></input>
              <p>Complexion</p>
              <span>1</span>
            </div>
            <div className={styles.filter}>
              <input type="checkbox"></input>
              <p>Constipation</p>
              <span>1</span>
            </div>
            <div className={styles.filter}>
              <input type="checkbox"></input>
              <p>Detoxification</p>
              <span>1</span>
            </div>
            <div className={styles.filter}>
              <input type="checkbox"></input>
              <p>Dosha</p>
              <span>1</span>
            </div>
            <div className={styles.filter}>
              <input type="checkbox"></input>
              <p>Emblica</p>
              <span>1</span>
            </div>
            <div className={styles.filter}>
              <input type="checkbox"></input>
              <p>Germ</p>
              <span>1</span>
            </div>
          </div>
        </div>

        <hr></hr>
        <div className={styles.filter_heading}>DISCOUNT</div>
        <div className="brands">
          <div className={styles.slider}>
            <div className={styles.filter}>
              <input type="checkbox"></input>
              <p>Less Than !0%</p>
              <span>589</span>
            </div>
            <div className={styles.filter}>
              <input type="checkbox"></input>
              <p>10% and above</p>
              <span>356</span>
            </div>
            <div className={styles.filter}>
              <input type="checkbox"></input>
              <p>20% and above</p>
              <span>168</span>
            </div>
            <div className={styles.filter}>
              <input type="checkbox"></input>
              <p>30% and above</p>
              <span>74</span>
            </div>
          </div>
        </div>

        <hr></hr>
        <div className={styles.filter_heading}>PRODUCT FORM</div>
        <div className="brands">
          <input
            className={styles.filter_input}
            type="text"
            placeholder="Search Product Form"
          />
          <br></br>
          <br></br>

          <div className={styles.slider}>
            <div className={styles.filter}>
              <input type="checkbox"></input>
              <p>Liquid</p>
              <span>72</span>
            </div>
            <div className={styles.filter}>
              <input type="checkbox"></input>
              <p>Kit</p>
              <span>64</span>
            </div>
            <div className={styles.filter}>
              <input type="checkbox"></input>
              <p>churna</p>
              <span>54</span>
            </div>
            <div className={styles.filter}>
              <input type="checkbox"></input>
              <p>Shampoo</p>
              <span>36</span>
            </div>
            <div className={styles.filter}>
              <input type="checkbox"></input>
              <p>Paste</p>
              <span>34</span>
            </div>
            <div className={styles.filter}>
              <input type="checkbox"></input>
              <p>Face pack</p>
              <span>12</span>
            </div>
            <div className={styles.filter}>
              <input type="checkbox"></input>
              <p>Butter</p>
              <span>6</span>
            </div>
            <div className={styles.filter}>
              <input type="checkbox"></input>
              <p>Haiir Mask</p>
              <span>3</span>
            </div>
            <div className={styles.filter}>
              <input type="checkbox"></input>
              <p>Tea</p>
              <span>1</span>
            </div>
          </div>
        </div>

        <hr></hr>
        <div className={styles.filter_heading}>BRANDS</div>
        <div className="brands">
          <input
            className={styles.filter_input}
            type="text"
            placeholder="Search Brands"
          />
          <br></br>
          <br></br>

          <div className={styles.slider}>
            <div className={styles.filter}>
              <input type="checkbox"></input>
              <p>Dabur</p>
              <span>348</span>
            </div>
            <div className={styles.filter}>
              <input type="checkbox"></input>
              <p>VLCC</p>
              <span>195</span>
            </div>
            <div className={styles.filter}>
              <input type="checkbox"></input>
              <p>Swadeshi</p>
              <span>166</span>
            </div>
            <div className={styles.filter}>
              <input type="checkbox"></input>
              <p>MuscleBlaze</p>
              <span>124</span>
            </div>
            <div className={styles.filter}>
              <input type="checkbox"></input>
              <p>VLCC</p>
              <span>195</span>
            </div>
            <div className={styles.filter}>
              <input type="checkbox"></input>
              <p>Mamaearth</p>
              <span>76</span>
            </div>
            <div className={styles.filter}>
              <input type="checkbox"></input>
              <p>Himalaya Baby</p>
              <span>57</span>
            </div>
            <div className={styles.filter}>
              <input type="checkbox"></input>
              <p>Nutrition</p>
              <span>32</span>
            </div>
            <div className={styles.filter}>
              <input type="checkbox"></input>
              <p>Accu-chek</p>
              <span>31</span>
            </div>
          </div>
        </div>

        <hr></hr>
        <div className={styles.filter_heading}>USES</div>
        <div className="brands">
          <input
            className={styles.filter_input}
            type="text"
            placeholder="Search Uses"
          />
          <br></br>
          <br></br>

          <div className={styles.slider}>
            <div className={styles.filter}>
              <input type="checkbox"></input>
              <p>Men Care</p>
              <span>348</span>
            </div>
            <div className={styles.filter}>
              <input type="checkbox"></input>
              <p>Cardiac Care</p>
              <span>39</span>
            </div>
            <div className={styles.filter}>
              <input type="checkbox"></input>
              <p>Liver Care</p>
              <span>33</span>
            </div>
            <div className={styles.filter}>
              <input type="checkbox"></input>
              <p>Womwn Care</p>
              <span>44</span>
            </div>
            <div className={styles.filter}>
              <input type="checkbox"></input>
              <p>Kidney Care</p>
              <span>16</span>
            </div>
            <div className={styles.filter}>
              <input type="checkbox"></input>
              <p>Mother Care</p>
              <span>6</span>
            </div>
            <div className={styles.filter}>
              <input type="checkbox"></input>
              <p>Diagnoistic Aids</p>
              <span>1</span>
            </div>
            <div className={styles.filter}>
              <input type="checkbox"></input>
              <p>Thyroid Care</p>
              <span>1</span>
            </div>
            <div className={styles.filter}>
              <input type="checkbox"></input>
              <p>Blood Purifiers</p>
              <span>7</span>
            </div>
          </div>
        </div>

        <hr></hr>
        <div className={styles.filter_heading}>BRANDS</div>
        <div className="brands">
          <input
            className={styles.filter_input}
            type="text"
            placeholder="Search Brands"
          />
          <br></br>
          <br></br>

          <div className={styles.slider}>
            <div className={styles.filter}>
              <input type="checkbox"></input>
              <p>Dabur</p>
              <span>348</span>
            </div>
            <div className={styles.filter}>
              <input type="checkbox"></input>
              <p>VLCC</p>
              <span>195</span>
            </div>
            <div className={styles.filter}>
              <input type="checkbox"></input>
              <p>Swadeshi</p>
              <span>166</span>
            </div>
            <div className={styles.filter}>
              <input type="checkbox"></input>
              <p>MuscleBlaze</p>
              <span>124</span>
            </div>
            <div className={styles.filter}>
              <input type="checkbox"></input>
              <p>VLCC</p>
              <span>195</span>
            </div>
            <div className={styles.filter}>
              <input type="checkbox"></input>
              <p>Mamaearth</p>
              <span>76</span>
            </div>
            <div className={styles.filter}>
              <input type="checkbox"></input>
              <p>Himalaya Baby</p>
              <span>57</span>
            </div>
            <div className={styles.filter}>
              <input type="checkbox"></input>
              <p>Horlex</p>
              <span>32</span>
            </div>
            <div className={styles.filter}>
              <input type="checkbox"></input>
              <p>Accu-chek</p>
              <span>31</span>
            </div>
          </div>
        </div>

        <hr></hr>
        <div className={styles.filter_heading}>Age</div>
        <div className="brands">
          <div className={styles.slider}>
            <div className={styles.filter}>
              <input type="checkbox"></input>
              <p>All</p>
              <span>1008</span>
            </div>
            <div className={styles.filter}>
              <input type="checkbox"></input>
              <p>Child</p>
              <span>102</span>
            </div>
          </div>
        </div>

        <hr></hr>
        <div className={styles.filter_heading}>GENDER</div>
        <div className="brands">
          <div className={styles.slider}>
            <div className={styles.filter}>
              <input type="checkbox"></input>
              <p>Unisex</p>
              <span>1022</span>
            </div>
            <div className={styles.filter}>
              <input type="checkbox"></input>
              <p>Male</p>
              <span>51</span>
            </div>
            <div className={styles.filter}>
              <input type="checkbox"></input>
              <p>Female</p>
              <span>36</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
