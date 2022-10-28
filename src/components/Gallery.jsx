import React, { useState, useEffect } from "react";
import "../css/gallery.css";
import "../css/main.css";

function Gallery() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 600);
      // setScroll(true);
    });
  }, []);

  return (
    <div className="gallery-container">
      <div className="gallery-content">
        <div
          className={
            scroll
              ? "gallery-items animated fadeIn"
              : "gallery-items beforeAnim"
          }
        >
          <div className="gallery-item">
            <figure
              className="gallery-img"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "/imgs/gallery-1.jpg"
                })`,
              }}
            >
              <a href="/">
                <i className="zoom-icon"></i>
              </a>
            </figure>
          </div>
          <div className="gallery-item">
            <figure
              className="gallery-img"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "/imgs/gallery-2.jpg"
                })`,
              }}
            >
              <a href="/">
                <i className="zoom-icon"></i>
              </a>
            </figure>
          </div>
          <div className="gallery-item">
            <figure
              className="gallery-img"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "/imgs/gallery-3.jpg"
                })`,
              }}
            >
              <a href="/">
                <i className="zoom-icon"></i>
              </a>
            </figure>
          </div>
          <div className="gallery-item">
            <figure
              className="gallery-img"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "/imgs/gallery-4.jpg"
                })`,
              }}
            >
              <a href="/">
                <i className="zoom-icon"></i>
              </a>
            </figure>
          </div>
          <div className="gallery-item">
            <figure
              className="gallery-img"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "/imgs/gallery-5.jpg"
                })`,
              }}
            >
              <a href="/">
                <i className="zoom-icon"></i>
              </a>
            </figure>
          </div>
          <div className="gallery-item">
            <figure
              className="gallery-img"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "/imgs/gallery-6.jpg"
                })`,
              }}
            >
              <a href="/">
                <i className="zoom-icon"></i>
              </a>
            </figure>
          </div>
          <div className="gallery-item">
            <figure
              className="gallery-img"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "/imgs/gallery-7.jpg"
                })`,
              }}
            >
              <a href="/">
                <i className="zoom-icon"></i>
              </a>
            </figure>
          </div>
          <div className="gallery-item">
            <figure
              className="gallery-img"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "/imgs/gallery-8.jpg"
                })`,
              }}
            >
              <a href="/">
                <i className="zoom-icon"></i>
              </a>
            </figure>
          </div>
          <div className="gallery-item">
            <figure
              className="gallery-img"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "/imgs/gallery-9.jpg"
                })`,
              }}
            >
              <a href="/">
                <i className="zoom-icon"></i>
              </a>
            </figure>
          </div>
          <div className="gallery-item">
            <figure
              className="gallery-img"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "/imgs/gallery-10.jpg"
                })`,
              }}
            >
              <a href="/">
                <i className="zoom-icon"></i>
              </a>
            </figure>
          </div>
          <div className="gallery-item">
            <figure
              className="gallery-img"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "/imgs/gallery-11.jpg"
                })`,
              }}
            >
              <a href="/">
                <i className="zoom-icon"></i>
              </a>
            </figure>
          </div>
          <div className="gallery-item">
            <figure
              className="gallery-img"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "/imgs/gallery-12.jpg"
                })`,
              }}
            >
              <a href="/">
                <i className="zoom-icon"></i>
              </a>
            </figure>
          </div>
        </div>
      </div>

      <div className="gallery-btn-container">
        <a href="/" className="btn btn-large">
          view our menu
        </a>
      </div>
    </div>
  );
}
export default Gallery;
