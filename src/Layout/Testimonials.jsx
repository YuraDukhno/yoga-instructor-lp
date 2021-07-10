import React from "react";

export default function Testimonials() {
  return (
    <div className="testimonials">
      <div className="testimonials__container container">
        <div className="motto">
          <div className="motto__icon">"</div>
          <div className="motto__text">
            There is always room for change, but you have to be open to that
            change.
          </div>
          <div className="motto__signature">— LISA ZAK</div>
        </div>
        <ul className="testimonials__list">
          <li className="testimonials__item">
            <figure className="testimonial__widget">
              <img src="" alt=""></img>
              <figcaption className="testimonial__text">
                The best running trainer in the world! Highly recommended to any
                one who wants to loose weight.
              </figcaption>
            </figure>
            <span className="author"></span>
            <span className="city"></span>
            <span className="stars"></span>
          </li>
          <li className="testimonials__item">
            <figure className="testimonial__widget">
              <img src="" alt=""></img>
              <figcaption className="testimonial__text">
                The best running trainer in the world! Highly recommended to any
                one who wants to loose weight.
              </figcaption>
            </figure>
            <span className="author"></span>
            <span className="city"></span>
            <span className="stars"></span>
          </li>
          <li className="testimonials__item">
            <figure className="testimonial__widget">
              <img src="" alt=""></img>
              <figcaption className="testimonial__text">
                The best running trainer in the world! Highly recommended to any
                one who wants to loose weight.
              </figcaption>
            </figure>
            <span className="author"></span>
            <span className="city"></span>
            <span className="stars"></span>
          </li>
        </ul>
      </div>
    </div>
  );
}
