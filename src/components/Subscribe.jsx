import React from "react";
import "../css/subscribe.css";

function Subscribe() {
  return (
    <section className="subscribe-section">
      <div className="container">
        <div className="subscribe">
          <div className="inner-subscribe">
            <h2 className="subscribe-title">subscribe!</h2>
            <h5 className="subscribe-subtitle">become a rosa's vip</h5>
            <div className="form-container">
              <form action="" className="subscribe-form">
                <ul>
                  <li className="form-li">
                    <div>
                      <input
                        type="text"
                        placeholder="enter your email here"
                        className="subscribe-input"
                      />
                    </div>
                  </li>
                  <li className="form-icon">
                    <input type="submit" className="button-text" />
                  </li>
                </ul>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
