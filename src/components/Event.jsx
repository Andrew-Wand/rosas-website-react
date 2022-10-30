import React, { useState, useEffect } from "react";
import "../css/event.css";
import eventImg from "../imgs/image-2.png";

function Event() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 1400);
      setScroll(true);
    });
  }, []);

  return (
    <section className="event-section">
      <div className="container">
        <div className="inner-event">
          <figure
            className={
              scroll ? "event-img animated fadeInLeft" : "event-img beforeAnim"
            }
          >
            <img src={eventImg} alt="" />
          </figure>
          <div
            className={
              scroll
                ? "event-content animated fadeInRight"
                : "event-content beforeAnim"
            }
          >
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
