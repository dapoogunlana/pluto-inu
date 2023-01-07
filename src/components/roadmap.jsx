import React from "react";
import { barnerRoadmap, topSlantCurved } from '../assets/images';
import { roadmapList } from '../utils/temp-data';

import "../assets/styles/pages.scss";

function RoadMap() {

  return (
    <div className="roadmap pt-5" id="roadmap">
      <div className="angle-bg"></div>
      <div className="bottom-curve">
        <img src={topSlantCurved} alt="" />
      </div>
      <div className="w80 max600 imh pt-5" data-aos="flip-left">
        <img src={barnerRoadmap} alt="" />
      </div>
      <div className="relative max1000 w96 py-5">
        {roadmapList.map((item, index) => {
          return <div className="road-map-sect" key={index}>
            <div className={(index % 2) ? 'right-sect' : 'left-sect'} data-aos={(index % 2) ? 'fade-left' : 'fade-right'}>
              <div className="img-holder">
                <img src={item.image} alt="" />
              </div>
              <h6 className="">{item.title}</h6>
              <p>{item.brief}</p>
            </div>
          </div>
        })}
        <div className="rm-spacer"></div>
      </div>
    </div>
  );
}
export default RoadMap;
