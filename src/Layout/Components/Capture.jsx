import React from "react";

export default function Capture(props) {
  return (
    <div className="capture">
      <div className="capture__tittle">
        <h1>{props.text}</h1>
      </div>
      <div className="capture__bottom-line"></div>
    </div>
  );
}
