import React from "react";
import ReactYouTubeExample from "./ReactYouTubeExample";
import './InfoVideo.css'
const InfoVideo = () => {
  return (
    <div className="flex6">
      <div className="info">
        <h3>UNCOMPROMISED QUALITY. RELIABLE RESULTS. ALWAYS.</h3>
        <p>
          Spending hours in a queue at a diagnostic lab or a hospital is now a
          thing of the past. With Tata 1mg you can get your lab tests done from
          the comfort of your home. Our highly qualified phlebotomist will
          collect the samples at your preferred time. Watch this video to see
          steps taken by us to ensure quality and hygiene in sample collection.
          Book your next lab test with Tata 1mg at the lowest price guaranteed!
        </p>
      </div>
      <div>
      <ReactYouTubeExample videoId="_Bk2_nFVRI0" />
      </div>
    </div>
  );
};

export default InfoVideo;
