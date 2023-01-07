import React from "react";

import { whyJoinImage, perkImage, barnerWhyJoin, sidePatternAngles } from '../assets/images';
import { perks } from '../utils/temp-data';
import Marquee from "react-fast-marquee";

import "../assets/styles/pages.scss";

function WhyJoin() {

  return (
    <div className="why-join" id="why_join">
      <div className="relative max1200 w96 pb-5">
        <div className="row pt-5">
          <div className="col-md-6 my-3 center-info sm-open">
            <div className="w90 imh" data-aos="zoom-in" data-aos-delay="600">
              <img src={whyJoinImage} alt="" />
            </div>
          </div>
          <div className="col-md-6 my-3 center-info">
            <div className="w96" data-aos="fade-up">
              <p className="text-center pt-4 reduced-soft-web">
                Introducing Pluto, the AI-powered meme token that is changing the game. With its advanced technology and 
                innovative approach to cryptocurrency, Pluto is the ultimate choice for meme enthusiasts. Get in on the action 
                now and join the Pluto community – you won't be disappointed! The sky's the limit for Pluto's potential for 
                growth and success. Don't miss out on this opportunity to be a part of something truly groundbreaking and 
                unforgettable.
              </p>
              <div className="liner"></div>
            </div>
          </div>
          <div className="col-md-6 my-3 center-info sm-close">
            <div className="w90 imh" data-aos="zoom-in" data-aos-delay="600">
              <img src={whyJoinImage} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="mq-sect">
        <Marquee speed={100} gradient={false}>
          <p className="px-5 mb-0 py-4">Degens, please note that full website will be released once there are 1000 hodlers of the $PLUTO token. Let’s make this happen!</p>
        </Marquee>
      </div>
    </div>
  );
}
export default WhyJoin;
