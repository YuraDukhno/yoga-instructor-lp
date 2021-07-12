import React from "react";
import "../Layout/Header.css";

export default function Header() {
  return (
    <div className="header box">
      <div className="container header__container">
        <div className="header__content">
          <h1 className="header__title">I'm</h1>

          <h1 className="header__title header__title-yalow"> lisa zak.</h1>
          <div className="header__bottom-line">
            <div className="line"></div>
          </div>
          <div className="header__subtitle">Yoga Instructor</div>
          <ul className="icon__list">
            <li className="icon uc_icons_link">
              <a href="http://www.facebook.com" className="uc_icon">
                <i className="fa fa-facebook-f"></i>
              </a>
            </li>
            <li className="icon uc_icons_link">
              <a href="http://www.facebook.com" className="uc_icon">
                <i className="fa fa-instagram"></i>
              </a>
            </li>
            <li className="icon uc_icons_link">
              <a href="http://www.facebook.com" className="uc_icon">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
