import React from "react";
import "../css/preview.css";
import sliderImg from "../imgs/slide-image-4.jpg";
import bannerImg from "../imgs/image-3.png";

function Preview() {
  return (
    <section className="preview-section">
      <div className="slider">
        <div className="slider-clip">
          <div className="slider-slides">
            <div className="slider-list">
              <div className="slider-track">
                <div>
                  <div>
                    <div className="slider-slide">
                      <figure className="slider-img">
                        <img src={sliderImg} alt="img" />
                      </figure>
                      <div className="slider-content">
                        <div className="container">
                          <div className="slider-entry slider-entry-center">
                            <h1>ASK FOR BLACK BEANS</h1>
                            <p>A delicious and healthier option</p>
                            <a href="/" className="btn btn-pink">
                              view our menu
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="banner">
        <div className="container">
          <div className="banner-img">
            <img src={bannerImg} alt="banner" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Preview;
