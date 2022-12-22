import React from "react";
import "./FeaturedLabs.modules.css";

const FeaturedLabs = ({ img_url, rating, namelab, title }) => {
  return (
    <>
        <div className="featLabwrap">
            <div className="featboxes">
                <div className="imgratingflex">
                    <div className="featimg">
                        <img
                            className="featlabimg"
                            alt=""
                            src={img_url}
                        />
                    </div>
                    <div className="ratingstarnameflex">
                        <div className="rating">
                            {rating}
                            <div className="starr">
                            <i
                                className="fa fa-star"
                                aria-hidden="true"
                            ></i>
                            </div>
                        </div>
                        <div className="featname">{namelab}</div>
                    </div>
                </div>
            </div>
            <div className="feathead">{title}</div>
        </div>
    </>
  );
};

export default FeaturedLabs;
