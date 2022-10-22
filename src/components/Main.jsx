import React from "react";
import "../css/main.css";
import van from "../imgs/van.png";
import Gallery from "./Gallery";

function Main() {
  return (
    <div className="main">
      <section className="section">
        <div className="container">
          <div className="section-inner">
            <div className="section-inner-content">
              <h1>we cater!</h1>
              <h5>let us cater your next event</h5>
              <a href="/" className="btn btn-large btn-block">
                learn more
              </a>
            </div>
            <div className="section-img">
              <img src={van} alt="van" />
            </div>
          </div>
        </div>
      </section>

      <Gallery />
    </div>
  );
}

export default Main;
