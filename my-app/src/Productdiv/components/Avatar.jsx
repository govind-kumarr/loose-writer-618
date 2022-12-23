import React from "react";

import "./style.css";

function Avatar({ fecture }) {
  return (
    <>
      <a className="allin" href={fecture.link}>
        <img src={fecture.image_url} alt="image" />
        <div>{fecture.name}</div>
      </a>
    </>
  );
}

export default Avatar;
