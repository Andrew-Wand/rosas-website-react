import React from "react";
import "../css/event.css";
import eventImg from "../imgs/image-2.png";

function Event() {
  return (
    <section className="event-section">
      <div className="container">
        <div className="inner-event">
          <figure className="event-img">
            <img src={eventImg} alt="" />
          </figure>
          <div className="event-content">
            <h3 className="event-title">
              YOU'LL LOVE OUR BREAKFAST TACOS, BOWLS AND PLATES!
            </h3>
            <h4 className="event-subtitle">6:30 - 10:30 a.m. daily</h4>
            <a href="/" className="btn btn-large">
              view the menu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Event;
