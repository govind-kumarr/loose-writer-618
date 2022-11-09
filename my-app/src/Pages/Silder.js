import React, { Component } from "react";
import CarouselSlider from "react-carousel-slider";
import "./Slider.css";

class Slider extends Component {
  render() {
    let data = [
      {
        imgSrc:
          "https://onemg.gumlet.io/assets/2e61b010-39d7-11ed-81ac-0a2a0bfbf692.jpg?format=auto",
      },
      {
        imgSrc:
          "https://onemg.gumlet.io/assets/d9fa7552-147e-11ed-bf47-0a7644f785c6.png?format=auto",
      },
      {
        imgSrc:
          "https://onemg.gumlet.io/assets/8caf7042-d511-11ec-a81c-0a1e05c4583e.png?format=auto",
      },
      {
        imgSrc:
          "https://onemg.gumlet.io/assets/e406cd06-39d7-11ed-8d85-0acb2b1fe408.jpg?format=auto",
      },
      {
        imgSrc:
          "https://onemg.gumlet.io/assets/d798e690-3a62-11ed-988f-025c288f92b2.png?format=auto",
      },
      {
        imgSrc:
          "https://onemg.gumlet.io/assets/d9fa7552-147e-11ed-bf47-0a7644f785c6.png?format=auto",
      },
      {
        imgSrc:
          "https://onemg.gumlet.io/assets/8caf7042-d511-11ec-a81c-0a1e05c4583e.png?format=auto",
      },
      {
        imgSrc:
          "https://onemg.gumlet.io/assets/e406cd06-39d7-11ed-8d85-0acb2b1fe408.jpg?format=auto",
      },
      {
        imgSrc:
          "https://onemg.gumlet.io/assets/d798e690-3a62-11ed-988f-025c288f92b2.png?format=auto",
      },
    ];
    let manner = {
      autoSliding: { interval: "2s" },
      circular: true,
    };

    let accEleSetting = { dots: false };

    let buttonSetting = {
      placeOn: "middle-inside",
      style: {
        left: {
          height: "100px",
          width: "60px",
          color: "black",
          margin: "0",
          fontSize: "30px",
          background: "white",
          opacity: "1",
          borderRadius: "50%",
          fontWeight: "1000",
        },
        right: {
          height: "100px",
          width: "60px",
          color: "balck",
          margin: "0",
          fontSize: "40px",
          background: "white",
          opacity: "1",
          borderRadius: "50%",
          fontWeight: "1000",
        },
      },
    };

    return (
      <div className="offers_container">
        <div className="offer_slider">
          <div><CarouselSlider
            slideItems={data}
            manner={manner}
            accEle={accEleSetting}
            buttonSetting={buttonSetting}
            sliderBoxStyle={{
              width: "100%",
              height: "auto",
              background: "transparent",
            }}
          /></div>
          <div className="second">
            <div>
              <img src="https://onemg.gumlet.io/image/upload/w_480,h_200,,a_ignore,q_auto,f_auto/v1645641668/wogy2tugo2zcgoopfrim.jpg" alt="clone"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;
