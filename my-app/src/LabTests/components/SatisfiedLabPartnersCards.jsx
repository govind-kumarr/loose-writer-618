import React from 'react';
import "./SatisfiedLabPartnersCards.modules.css";

const satisfiedLabPartnersCards = ({ title, para, logo_url }) => {
  return (
    <div className="satisLabPartwrap" >
      <div className="satisLabPartboxes">
        <div className="contentLogo" >
          <div className="satisfiedcontent" >
            <div className="satisfiedhead" ><h3>{title}</h3></div>
            <div className="satisfiedpara" >{para}</div>
          </div>
          <div className="satisfiedimgouter" >
            <img src={logo_url} className="satisfiedimg" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default satisfiedLabPartnersCards;