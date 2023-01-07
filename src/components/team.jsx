import React from "react";

import { sidePatternCircles, barnerTeam, barnerWhitelist, teamBraithwaite, teamElena, teamMena } from '../assets/images';

import "../assets/styles/pages.scss";

function Team() {

  return (
    <div className="team py-5" id="team">
    <div className="side-bg">
      <img src={sidePatternCircles} alt="" />
    </div>
      <div className="w80 max600 imh pt-5" data-aos="flip-left">
        <img src={barnerTeam} alt="" />
      </div>
      <div className="relative">
        
        <div className="relative max1100 w96">
          <div className="row py-5">
            <div className="col-lg-4 col-md-6 my-3">
              <div className="w90 max400 team-card" data-aos="fade-up">
                <div className="w90 imh">
                  <img src={teamBraithwaite} alt="" />
                </div>
                <h6 className="increased-soft pt-3">Braithwaite </h6>
                <p className="reduced-soft mb-1">From North America</p>
                <p className="reduced-soft mb-0 min-content-web">
                  This guy has been a Degen right from the early days of BTC. He was even renamed as Satoshi Nakamoto at a 
                  point in his Degen journey. Loves coding to a fault and migrated to web3 development early in his sojourn 
                  through this space.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 my-3">
              <div className="w90 max400 team-card" data-aos="fade-up" data-aos-delay="200">
                <div className="w90 imh">
                  <img src={teamElena} alt="" />
                </div>
                <h6 className="increased-soft pt-3">Elena</h6>
                <p className="reduced-soft mb-1">From Europe</p>
                <p className="reduced-soft mb-0 min-content-web">
                  We honestly don't know what this lady says all the time. Even when she is speaking English, we literally 
                  have to act like we understand what she is saying. But we don’t understand shit except she writes it. Jokes 
                  apart, Elena was gifted with artistry at birth. This collection and many to come are all illustrated by her. 
                  Elena also leads a massive 3D game development hub.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 my-3">
              <div className="w90 max400 team-card" data-aos="fade-up" data-aos-delay="400">
                <div className="w90 imh">
                  <img src={teamMena} alt="" />
                </div>
                <h6 className="increased-soft pt-3">Ndulovu</h6>
                <p className="reduced-soft mb-1">From South Africa</p>
                <p className="reduced-soft mb-0 min-content-web">
                  Frankly, We are excited to have this guy in the team. He is a real degen and NFT/BTC/ETH OG. Along with 
                  other members of the team, he has traveled the globe promoting cryptocurrency projects and forming alliances 
                  with blockchain ecosystem developers. Mena is also an astute marketer and can sell water to a well.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="w80 max600 imh pt-5" data-aos="flip-left" id="whitelist">
        <img src={barnerWhitelist} alt="" />
      </div>
      <div className="relative pb-5">
        <div className="relative max800 w90 pt-5">
          <p className="font-weight-bold text-center mb-4">
            Minting will be phased to prevent gas wars and system collapse. Kindly complete the form below to be whitelisted 
            for any of the phases of minting.
          </p>
          <h6 className="c-red-faded italic increased text-center mb-4">
            Whitelisting is not open yet.  Community will be updated once whitelist is open.
          </h6>
        </div>
        <div className="relative max600 w90">
          <div className="whitelist-card" data-aos="flip-right">
            <label htmlFor="" className="font-weight-bold pt-2">Name</label>
            <input type="text" placeholder="Enter your name" />
            <label htmlFor="" className="font-weight-bold pt-2">Email</label>
            <input type="text" placeholder="Enter your email address" />
            <label htmlFor="" className="font-weight-bold pt-2">Wallet Address</label>
            <input type="text" placeholder="Enter your wallet address" />
            <button className="solid-button-2c mt-3">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Team;
