import React from "react";
import "../Layout/Header.css";

export default function Header() {
  return (
    <div className="header box">
      <div className="container header__container">
        <div className="header__content">
          <h1 className="header__title">I'm</h1>
          <br />
          <h1 className="header__title header__title-yalow"> lisa zak.</h1>
          <div className="header__bottom-line"></div>
          <div className="header__subtitle">Yoga Instructor</div>
          <ul className="icon__list">
            <li className="icon">facebook</li>
            <li className="icon">instagram</li>
            <li className="icon">twitter</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
