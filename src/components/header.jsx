import React, { useState, useEffect } from "react";

import "./../assets/styles/layout.scss";
import { logo } from "./../assets/images";

import {
  navigateToId,
  handleSHeaderOnScroll
} from "./../utils/utility-services";
import { whitePaper } from "../assets/files";

function Header() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [scrolledHeader, setScrolledHeader] = useState(false);

  const toggleMobileMenu = () => {
    setOpenMobileMenu(!openMobileMenu);
  };

  const closeAndNavigate = (id, file) => {
    setOpenMobileMenu(false);
    return;
    if (!file) {
      navigateToId(id);
      return;
    }
    window.open(file);
  }

  useEffect(() => {
    handleSHeaderOnScroll();
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 610){
        setScrolledHeader (true);
      } else {
        setScrolledHeader (false);
      }
    });
  });

  return (
    <div
      className={
        openMobileMenu
          ? "header open-mobile-menu"
          : "header close-mobile-menu"
      }
    >
      <div className={scrolledHeader ? 'sub-layer' : 'trans-layer'}></div>
      <div className="case spread-info md-open relative">
        <div className="logo-mini" onClick={() => closeAndNavigate('home')}>
          <img src={logo} alt="" />
        </div>
        <div className="spread-info">
          <div className="mobile-menu pr-2 py-3">
            <i className="fas fa-bars" onClick={toggleMobileMenu}></i>
          </div>
        </div>
      </div>
      <div className="w90 spread-nav-web relative">
        <div className="logo md-close-im" onClick={() => closeAndNavigate('home')}>
          <img src={logo} alt="" />
        </div>
        <div className="nav">
                
          <ul>
            <li>
              <div className="text-center">
                <span className="clickable" onClick={() => closeAndNavigate('', whitePaper)}>WhitePaper</span>
              </div>
            </li>
            <li>
              <div className="text-center">
                <span className="clickable" onClick={() => closeAndNavigate('roadmap')}>Roadmap</span>
              </div>
            </li>
            <li>
              <div className="text-center">
                <span className="clickable" onClick={() => closeAndNavigate('partners')}>Partners</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Header;
