import React, { } from "react";
// import { footerLogo } from "./../assets/images";

function Footer() {

  return (
    <div className="footer pt-2 relative">
      <div className="pattern-holder"></div>
      <div className="w90 p-3 relative">
        <div className="w96 max800 text-center mt-5">
          <p>
            For marketing and business proposals, send a mail to &nbsp; 
            <a href="mailto:business@drivin.club" className="c-secondary-blue-im">business@pluto_inu.club</a>
            <br />
            Join Newsletter so you dont miss important events and updates
          </p>
          <div className="subscribe-grid inc-grid w96 max600 mb-4">
              <input type="text" placeholder="Enter your email" />
              <span></span>
              <button className="">Subscribe</button>
          </div>
          <div className="w80 max250">
          <div className="spread-info mt-3 media-icons">
                <a href="https://t.me/plutoinuai" target="_blank" rel="noreferrer"><i className="fa-sharp fa-solid fa-paper-plane increased-x"></i></a>
                <a href="https://twitter.com/pluto_inu" target="_blank" rel="noreferrer"><i className="fab fa-twitter increased-x"></i></a>
                <a href="https://medium.com/@drivin.club" target="_blank" rel="noreferrer"><i className="fa-brands fa-medium increased-x"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div className="center-info reduced footer-base relative">
          <p className="pt-4 pb-3 center-mobile">
            © Pluto Inu {new Date().getFullYear()} . All right reserved
          </p>
        </div>
    </div>
  );
}
export default Footer;
