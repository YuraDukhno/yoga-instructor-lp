import React from "react";
import PurpleCapture from "./Components/PurpleCapture";
import "../Layout/Benefits.css";

export default function Benefits() {
  return (
    <div className="benefits box">
      <div className="benefits__container container">
        <PurpleCapture text={"Benefits Of Yoga"} />
        <div className="benefits__row">
          <ul className="benefits__list">
            <li className="benefits__item">
              <span className="benefits__icon">
                <i class="fa fa-fire"></i>
              </span>
              <span className="benefits__title">Burn More</span>
              <span className="benefits__text">
                Cras sagittis. Vivamus in erat urna cursus vestibulum.
                Vestibulum rutrum, mi nec elementum vehiculaid fringilla.
              </span>
            </li>
            <li className="benefits__item">
              <span className="benefits__icon">
                <i class="fa fa-heartbeat"></i>
              </span>
              <span className="benefits__title">Stress Relief</span>
              <span className="benefits__text">
                Cras sagittis. Vivamus in erat urna cursus vestibulum.
                Vestibulum rutrum, mi nec elementum vehiculaid fringilla.
              </span>
            </li>
            <li className="benefits__item">
              <span className="benefits__icon">
                <i class="fa fa-bolt"></i>
              </span>
              <span className="benefits__title">Boosts Energy</span>
              <span className="benefits__text">
                Cras sagittis. Vivamus in erat urna cursus vestibulum.
                Vestibulum rutrum, mi nec elementum vehiculaid fringilla.
              </span>
            </li>
            <li className="benefits__item">
              <span className="benefits__icon">
                <i class="fa fa-male"></i>
              </span>
              <span className="benefits__title">Full Body</span>
              <span className="benefits__text">
                Cras sagittis. Vivamus in erat urna cursus vestibulum.
                Vestibulum rutrum, mi nec elementum vehiculaid fringilla.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
