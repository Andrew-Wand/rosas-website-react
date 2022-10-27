import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="inner-footer">
          <div className="footer-aside">
            <nav className="footer-nav">
              <ul>
                <li>
                  <a href="/">press</a>
                </li>
                <li>
                  <a href="/">contact</a>
                </li>
                <li>
                  <a href="/">subscribe</a>
                </li>
              </ul>
            </nav>
            <div className="socials-default">
              <ul>
                <li>
                  <a href="/">
                    <i className="facebook-white"></i>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="instagram-white"></i>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="twitter-white"></i>
                  </a>
                </li>
              </ul>
            </div>
            <ul className="list-links">
              <li className="list-links-small">
                <a href="/">Site Designed by "algo + rhythm"</a>
              </li>
              <li>
                <a href="/">privacy policy</a>
              </li>
              <li>
                <a href="/">terms of service</a>
              </li>
            </ul>
          </div>
          <div className="footer-aside text-right">
            <a href="/" className="footer-btn">
              <i className="arrow-icon-large"></i>
              <span>BACK TO TOP</span>
            </a>
            <p>authentic is our special ingredient</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
