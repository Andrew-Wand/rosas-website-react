import React, { useState, useEffect } from "react";
import "../css/main.css";
import van from "../imgs/van.png";
import Gallery from "./Gallery";
import Simple from "./Simple";
import Social from "./Social";
import Event from "./Event";
import Preview from "./Preview";
import Subscribe from "./Subscribe";
import "animate.css";

function Main() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 300);
      setScroll(true);
    });
  }, []);

  return (
    <div className="main">
      <section className="section">
        <div className="container">
          <div className="section-inner">
            <div
              className={
                scroll
                  ? "section-inner-content animated fadeInLeft"
                  : "section-inner-content beforeAnim"
              }
            >
              <h1>we cater!</h1>
              <h5>let us cater your next event</h5>
              <a href="/" className="btn btn-large btn-block">
                learn more
              </a>
            </div>
            <div
              className={
                scroll
                  ? "section-img animated fadeInRight"
                  : "section-img beforeAnim"
              }
            >
              <img src={van} alt="van" />
            </div>
          </div>
        </div>
      </section>

      <Gallery />
      <Simple />
      <Social />
      <Event />
      <Preview />
      <Subscribe />
    </div>
  );
}

export default Main;
