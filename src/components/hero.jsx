import React, { useState } from "react";

import { heroImg, } from '../assets/images';
import VideoModal from '../sub-components/video-modal';

import "../assets/styles/pages.scss";

function Hero() {

  const [toggleVideoModal, setToggleVideoModal] = useState(false);

  const openVid = () => {
    setToggleVideoModal(true);
  }
  const closeVid = () => {
    setToggleVideoModal(false);
  }

  return (
    <div className="hero" id="home">
      <div className="info-sect w90 max900 text-center">
        <h2 className="pt-4">
          Welcome to the future of memes!
        </h2>
      </div>
      <div className="holder">
        <img src={heroImg} alt="" data-aos="flip-left" />
        <div className="vid-outer-circle" data-aos="zoom-in" data-aos-delay="1000"></div>
        <div className="vid-inner-circle" data-aos="zoom-in" data-aos-delay="1000" onClick={openVid}>
          <div>
            <i className="fa-solid fa-play"></i>
          </div>
        </div>
      </div>
      {toggleVideoModal && <VideoModal link={'Tu4Yun97cJY'} onCloseModal={closeVid} />}
    </div>
  );
}
export default Hero;
