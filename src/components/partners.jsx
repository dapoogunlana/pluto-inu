import React from "react";
import TrustedSlide from "../sub-components/trusted-slide";

import {
  PartnersSinverse,
  PartnersOpensea,
  PartnersNorthEquities,
  PartnersNftTech,
  barnerPartners,
} from '../assets/images';

import "../assets/styles/pages.scss";

function Partners() {

  return (
    <div className="partners pt-5" id="partners">
      <div className="partner-angle-bg"></div>
      <div className="w80 max600 imh relative" data-aos="flip-left">
        <img src={barnerPartners} alt="" />
      </div>
      <div className="relative max1000 w80 pb-5">
        <div className="row pt-3 text-center">
          <div className="col-md-3 col-6 my-3 py-2">
            <div className="w96 max175 imh" data-aos="zoom-in">
              <img src={PartnersSinverse} alt="" />
            </div>
          </div>
          <div className="col-md-3 col-6 my-3 py-2">
            <div className="w96 max175 imh" data-aos="zoom-in" data-aos-delay="200">
              <img src={PartnersOpensea} alt="" />
            </div>
          </div>
          <div className="col-md-3 col-6 my-3 py-2">
            <div className="w96 max175 imh" data-aos="zoom-in" data-aos-delay="400">
              <img src={PartnersNorthEquities} alt="" />
            </div>
          </div>
          <div className="col-md-3 col-6 my-3 py-2">
            <div className="w96 max175 imh" data-aos="zoom-in" data-aos-delay="600">
              <img src={PartnersNftTech} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="listing">
        <TrustedSlide/>
      </div>
    </div>
  );
}
export default Partners;
