import React, { useState } from "react";
import NftSlide from "../sub-components/nft-slide";
import { barnerMint, topSlantStraight } from '../assets/images';

import "../assets/styles/pages.scss";

function Mint() {

  const [loopStarted, setLoopStarted] = useState(false);
  const [currentTime, setCurrentTime] = useState({});

  const markTime = new Date('2022-06-19T22:00').getTime();

  const startLoop = () => {
    if(!loopStarted) {
      setLoopStarted(true);
      loopCountDown();
    }
  }

  const loopCountDown = () => {
    setInterval(() => {
      const currentTimeDigit = new Date().getTime();
      const newCurrentTime = {...currentTime};
      newCurrentTime.day = Math.floor((markTime - currentTimeDigit) / (1000 * 60 * 60 * 24));
      newCurrentTime.hour = Math.floor(((markTime - currentTimeDigit) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      newCurrentTime.minute = Math.floor(((markTime - currentTimeDigit) % (1000 * 60 * 60)) / (1000 * 60));
      newCurrentTime.second = Math.floor(((markTime - currentTimeDigit) % (1000 * 60)) / (1000));
      newCurrentTime.digit = currentTimeDigit;
      
      newCurrentTime.day = (newCurrentTime.day > 0 ? newCurrentTime.day : 0).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
      newCurrentTime.hour = (newCurrentTime.hour > 0 ? newCurrentTime.hour : 0).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
      newCurrentTime.minute = (newCurrentTime.minute > 0 ? newCurrentTime.minute : 0).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
      newCurrentTime.second = (newCurrentTime.second > 0 ? newCurrentTime.second : 0).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
      setCurrentTime(newCurrentTime);
  }, 1000);
  }

  return (
    <div className="mint" id="mint" onLoad={() => startLoop()}>
      <div className="angle-bg"></div>
      <div className="bottom-curve">
        <img src={topSlantStraight} alt="" />
      </div>
      <div className="w80 max600 imh py-4" data-aos="flip-left">
        <img src={barnerMint} alt="" />
      </div>
      <div className="w90 max800 text-center">
        <p className="">
          It’s time to mint and own one of our fancy cars so you don’t miss any of our outstanding perks and fun activities. 
          Click the mint button below to activate a random mint.
        </p>
        <h4>
          Welcome to the club!
        </h4>
        {(markTime <= currentTime.digit) && <h6>(Minting has started)</h6>}
        {(markTime > currentTime.digit) && <h6>(Minting begins in)</h6>}
      </div>
      {(markTime > currentTime.digit) &&   <div className="countdown-grid">
          <div className="grid-card">
            <div data-aos="zoom-in">
              <h1 className="mb-0">{currentTime.day}</h1>
              <p className="mb-0">Days</p>
            </div>
          </div>
          <div className="grid-card">
            <div data-aos="zoom-in" data-aos-delay="200">
              <h1 className="mb-0">{currentTime.hour}</h1>
              <p className="mb-0">Hours</p>
            </div>
          </div>
          <div className="grid-card">
            <div data-aos="zoom-in" data-aos-delay="400">
              <h1 className="mb-0">{currentTime.minute}</h1>
              <p className="mb-0">Minutes</p>
            </div>
          </div>
          <div className="grid-card">
            <div data-aos="zoom-in" data-aos-delay="600">
              <h1 className="mb-0">{currentTime.second}</h1>
              <p className="mb-0">Seconds</p>
            </div>
          </div>
        </div>
      }
      
      <NftSlide/>
      <div className="w90 max300">
        <div className="description-grid-30">
          <div>
            <div className="indicator off"></div>
          </div>
          <div>
            <h5 className="mb-0 text-center">Minting is not yet Live</h5>
          </div>
        </div>
        <p className="text-center pt-2">0 units Mintend</p>
        <div className="center-info relative">
          <div className="button-holder">
            <button className="solid-button-2c">Connect Wallet</button>
            <button className="solid-button-2c">Mint Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Mint;
