import React from "react";

export default function About() {
  return (
    <div className="about">
      <div className="container about__container">
        <div className="about__row">
          <div className="about__column">
            {/* Capture */}
            <div className="capture">
              <div className="capture__tittle">
                <h1>About Me</h1>
              </div>
              <div className="capture__bottom-line"></div>
            </div>
            <div className="about__text">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                rutrum in orci sit amet rutrum. Nunc blandit rhoncus
                consequat.Donec sodales enim et felis commodo, eget posuere
                turpis fringilla.
              </span>
            </div>
          </div>
          <div className="about__column">
            <div className="about__widget">
              <img
                src="http://bloxthemes.net/landing-pages/uploads/images/blox_page_builder/me.jpg"
                alt="Yoga instructor"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
