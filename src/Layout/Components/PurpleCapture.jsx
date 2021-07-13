import React from "react";
import "../Components/PurpleCapture.css";

export default function PurpleCapture(props) {
  return (
    <div className="purple-capture">
      <div className="purple-capture__title">
        <h1>{props.text}</h1>
      </div>
      <div className="purple-capture__bottom-line">
        <div className="purple-capture__separator">
          <div className="purple-capture__qub"></div>
        </div>
      </div>
    </div>
  );
}
