import React from "react";
import "../css/simple.css";
import giftCard from "../imgs/gift-card.png";

function Simple() {
  return (
    <section className="simple-container">
      <div className="container">
        <div className="inner-simple">
          <div className="section-content">
            <h2 className="section-title">
              become a Rosa’s <span className="section-ribbon">vip</span>
            </h2>
            <p>
              Join Rosa’s Email VIP and you’ll receive news, offers and event
              notifications all in your inbox! {" "}
            </p>
            <h4>It's simple, easy and delicious!</h4>
            <a href="/" className="btn btn-large section-btn">
              sign up today
            </a>
          </div>
          <div className="section-content">
            <h2 className="section-title">purchase a gift card</h2>
            <figure className="simple-img">
              <img src={giftCard} alt="" />
            </figure>
            <a href="/" className="btn btn-large section-btn">
              purchase here
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Simple;
