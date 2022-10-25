import React from "react";
import "../css/social.css";

function Social() {
  return (
    <div className="social-container">
      <div className="container">
        <div className="inner-social">
          <div className="socials">
            <ul>
              <li>
                <a href="/">
                  <span className="socials-icon">
                    <i className="facebook-icon"></i>
                  </span>
                  <p>facebook</p>
                </a>
              </li>
              <li>
                <a href="/">
                  <span className="socials-icon">
                    <i className="instagram-icon"></i>
                  </span>
                  <p>instagram</p>
                </a>
              </li>
              <li>
                <a href="/">
                  <span className="socials-icon">
                    <i className="twitter-icon"></i>
                  </span>
                  <p>twitter</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Social;
