import React, { useEffect } from "react";

import Header from "../../components/header";
import Hero from "../../components/hero";
// import Mint from "../../components/mint";
import WhyJoin from "../../components/why-join";
// import RoadMap from "../../components/roadmap";
// import Team from "../../components/team";
// import Partners from "../../components/partners";
import Footer from "../../components/footer";

import "../../assets/styles/pages.scss";

function HomePage() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div className="home">
      <Header />

      <Hero/>
      {/* <Mint/> */}
      <WhyJoin/>
      {/* <RoadMap/>
      <Team/>
      <Partners/> */}
      
      <Footer />
    </div>
  );
}
export default HomePage;
