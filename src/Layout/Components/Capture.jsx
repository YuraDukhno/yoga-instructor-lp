import React from "react";
import "../Components/Capture.css";

export default function Capture(props) {
  return (
    <div className="capture">
      <div className="capture__title">
        <h1>{props.text}</h1>
      </div>
      <div className="capture__bottom-line">
        <div className="capture__separator">
          <div className="capture__qub"></div>
        </div>
      </div>
    </div>
  );
}
