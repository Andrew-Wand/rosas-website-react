import React from "react";
import "../css/intro.css";
import tacos from "../imgs/product-large.png";

function Intro() {
  return (
    <div className="intro-container">
      <div className="intro-inner">
        <div className="container">
          <div className="product-large">
            <figure className="product-img">
              <img src={tacos} alt="tacos" />
              <figcaption className="product-badge">
                <span>
                  tuesdays
                  <br />
                  <small>
                    were
                    <br />
                    made for
                  </small>
                  tacos
                </span>
              </figcaption>
            </figure>
            <div className="product-content">
              <h6>tuesdays just got better.</h6>
              <p>
                Your choice of three beef or chicken tacos, crispy or soft, plus
                rice and beans for only $5.49 every Tuesday, starting at 10:30
                AM! Spice it up the way you like with Rosa’s FREE Salsa Bar.
              </p>
              <span className="product-price">$5.49</span>
              <a href="/">
                view menu
                <i className="arrow-icon-intro"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
