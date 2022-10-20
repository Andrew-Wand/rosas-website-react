import React from "react";
import Intro from "./Intro";
import dinner from "../imgs/_Dinners.png";
import singleMeal from "../imgs/_individual_items.png";
import familyMeal from "../imgs/_group_meals.png";
import kidsMeal from "../imgs/_Kids4.png";
import breakfast from "../imgs/_breakfast.png";
import dessertDrinks from "../imgs/_Desserts.png";

function Header() {
  const openMobileMenu = (e) => {
    e.preventDefault();

    const menuNav = document.getElementById("menu-nav");
    menuNav.classList.toggle("menu-is-active");

    const menuBtn = document.getElementById("btn-menu");
    menuBtn.classList.toggle("btn-is-active");

    const headerInner = document.getElementById("header-inner");
    headerInner.classList.toggle("header-active");

    // Close location if hamburger pressed
    if (menuBtn.classList.contains("btn-is-active")) {
      const locationDropdown = document.getElementById("location-dropdown");

      locationDropdown.classList.remove("pin-is-active");
    }
  };
  const openLocationMenu = (e) => {
    e.preventDefault();

    // const pinIcon = document.getElementById('pin-icon');

    // pinIcon.classList.toggle('pin-is-active');

    const locationDropdown = document.getElementById("location-dropdown");

    locationDropdown.classList.toggle("pin-is-active");

    // Close hamburger menu when location pressed
    const menuNav = document.getElementById("menu-nav");
    const menuBtn = document.getElementById("btn-menu");
    const headerInner = document.getElementById("header-inner");

    if (menuNav.classList.contains("menu-is-active")) {
      menuNav.classList.remove("menu-is-active");

      menuBtn.classList.remove("btn-is-active");

      headerInner.classList.remove("header-active");
    }
  };

  const openMenuDropDown = (e) => {
    e.preventDefault();

    const menuDropdownContainer = document.getElementById(
      "menu-dropdown-container"
    );

    menuDropdownContainer.classList.add("expand");
  };

  const closeMenuDropDown = (e) => {
    e.preventDefault();

    const menuDropdownContainer = document.getElementById(
      "menu-dropdown-container"
    );

    menuDropdownContainer.classList.remove("expand");
  };

  return (
    <div className="header-container">
      <header className="header">
        <div className="secondary-nav-container">
          <nav className="secondary-nav">
            <ul>
              <li>
                <a href="/">about us</a>
              </li>
              <li>
                <a href="/">contact</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="header-inner" id="header-inner">
          <div className="inner-container">
            <a href="/" className="logo">
              <i className="logo-icon">Rosa Cafe</i>
            </a>
            {/* HAMBURGER MOBILE ONLY */}
            <a
              href="/"
              className="btn-menu"
              id="btn-menu"
              onClick={openMobileMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </a>
            {/* HAMBURGER  */}

            <div className="header-location">
              <a href="/" id="pin-icon" onClick={openLocationMenu}>
                <i className="pin-icon"></i>
                <span>Locations</span>
              </a>
              {/* LOCATION DROPDOWN MENU */}
              <div className="location-dropdown" id="location-dropdown">
                <div className="search-location">
                  <div className="search-location-inner">
                    <label htmlFor="">Search</label>
                    <input
                      type="search"
                      className="search-field"
                      placeholder="city & state or zip"
                    />
                    <a href="/" className="search-btn">
                      go
                    </a>
                  </div>
                  <a href="/" className="get-location">
                    <i className="arrow-icon"></i>
                    <span>Use current location</span>
                  </a>
                </div>
              </div>

              {/* LOCATION DROPDOWN MENU END */}
            </div>

            <nav className="menu-nav" id="menu-nav">
              <ul>
                <li className="menu-arrow">
                  <a href="/" onClick={openMenuDropDown}>
                    menu
                  </a>

                  {/* MENU MOBILE DROPDOWN */}
                  <div
                    className="menu-dropdown-container"
                    id="menu-dropdown-container"
                  >
                    <a
                      href="/"
                      className="mobile-nav-title"
                      onClick={closeMenuDropDown}
                    >
                      Main Menu
                    </a>

                    <ul className="list-menu">
                      <li>
                        <a href="/">
                          <figure>
                            <img src={dinner} alt="Dinners" />
                          </figure>
                          <span>DINNERS</span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <figure>
                            <img src={singleMeal} alt="" />
                          </figure>
                          <span>INDIVIDUAL ITEMS</span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <figure>
                            <img src={familyMeal} alt="" />
                          </figure>
                          <span>FAMILY MEALS</span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <figure>
                            <img src={kidsMeal} alt="" />
                          </figure>
                          <span>KIDS</span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <figure>
                            <img src={breakfast} alt="" />
                          </figure>
                          <span>BREAKFAST</span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <figure>
                            <img src={dessertDrinks} alt="" />
                          </figure>
                          <span>DESSERTS & DRINKS</span>
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/*  */}
                </li>

                <li>
                  <a href="/">catering</a>
                </li>

                <li>
                  <a href="/">gift cards</a>
                </li>

                <li>
                  <a href="/">careers</a>
                </li>

                <li>
                  <a href="/">vip</a>
                </li>

                <li>
                  <a href="/">nutrition</a>
                </li>

                <li className="visible-mobile-menu">
                  <a href="/">locations</a>
                </li>

                <li className="visible-mobile-menu">
                  <a href="/">careers</a>
                </li>

                <li className="visible-mobile-menu">
                  <a href="/">about us</a>
                </li>

                <li className="visible-mobile-menu">
                  <a href="/">contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
