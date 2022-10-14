import React from 'react'


function Header() {


  const openMobileMenu = (e) => {
    e.preventDefault();

    const menuNav = document.getElementById('menu-nav');
    menuNav.classList.toggle('menu-is-active');

    const menuBtn = document.getElementById('btn-menu');
    menuBtn.classList.toggle('btn-is-active');


    const headerInner = document.getElementById('header-inner');
    headerInner.classList.toggle('header-active');
  }

  const openLocationMenu = (e) => {
    e.preventDefault();

    const pinIcon = document.getElementById('pin-icon');

    pinIcon.classList.toggle('pin-is-active');

    const locationDropdown = document.getElementById('location-dropdown');

    locationDropdown.classList.toggle('pin-is-active');
  }


  return (
    <div className='header-container'>
      <header className="header">
        
        <div className="secondary-nav-container">
          <nav className="secondary-nav">
            <ul>
              <li>
                <a href="">about us</a>
              </li>
              <li>
                <a href="">contact</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="header-inner" id='header-inner'>
          <div className="inner-container">
            
            <a href="" className="logo">
              <i className="logo-icon">Rosa Cafe</i>
            </a>
            {/* HAMBURGER MOBILE ONLY */}
            <a href="" className="btn-menu" id='btn-menu'  onClick={openMobileMenu}>
              <span></span>
              <span></span>
              <span></span>
            </a>
            {/* HAMBURGER  */}


            
            <div className="header-location">
              <a href="" id='pin-icon' onClick={openLocationMenu}>
                <i className="pin-icon"></i>
                <span>Locations</span>
              </a>
              {/* DROPDOWN MENU */}
              <div className="location-dropdown" id='location-dropdown'>
                <div className="search-location">
                  <div className="search-location-inner">
                    <label htmlFor="">Search</label>
                    <input type="search" className="search-field" placeholder="city & state or zip" />
                    <a href="" className="search-btn">go</a>

                  
                 
                  </div>
                  <a href="" className="get-location">
                  <i className="arrow-icon"></i>
                  <span>Use current location</span>
                  </a>
                </div>
               
              </div>

              {/* DROPDOWN MENU END */}
            </div>


            <nav className="menu-nav" id='menu-nav'>
              <ul>
              <li className='menu-arrow'>
                <a href="" >menu</a>
              </li>
              
              <li>
                <a href="">catering</a>
              </li>
              
              <li>
              <a href="">gift cards</a>
              </li>
              
              <li>
              <a href="">careers</a>
              </li>
              
              <li>
              <a href="">vip</a>
              </li>
              
              <li>
              <a href="">nutrition</a>
              </li>


              <li className="visible-mobile-menu">
                <a href="">locations</a>
              </li>
              
              <li className="visible-mobile-menu">
              <a href="">careers</a>
              </li>
              
              <li className="visible-mobile-menu">
              <a href="">about us</a>
              </li>
              
              <li className="visible-mobile-menu">
              <a href="">contact</a>
              </li>

              </ul>
             
            </nav>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header