import React from "react";
import { listings, mobileListings } from '../utils/temp-data';
import { barnerSeenOn } from '../assets/images';


import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


function TrustedSlide() {

  return (
    <div className="trusted-section py-5">
        <div className="w80 max600 imh pt-5" data-aos="flip-left">
          <img src={barnerSeenOn} alt="" />
        </div>
      <div className="trusted-board  bgrid-md-close">
        <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
          {listings.map((list, listIndex) => {
            return   <div className="grid" key={listIndex}>
              {list.map((firm, index) => {
                return <div className="" key={index}>
                  <div className="trusted-card" data-aos="zoom-in" data-aos-delay={900 + (100 * index)}>
                    <img src={firm.image} alt="" />
                  </div>
                </div>
              })}
            </div>
          })}
        </Carousel>
      </div>
      <div className="trusted-board  bgrid-md-open">
        <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
          {mobileListings.map((list, listIndex) => {
            return   <div className="grid-sm" key={listIndex}>
              {list.map((firm, index) => {
                return <div className="" key={index}>
                  <div className="trusted-card">
                    <img src={firm.image} alt="" />
                  </div>
                </div>
              })}
            </div>
          })}
        </Carousel>
      </div>
    </div>
  );
}
export default TrustedSlide;
