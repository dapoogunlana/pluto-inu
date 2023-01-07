import React, { useEffect } from 'react';
// import BaseRoot from "./routes/base-root";
import Home from "./pages/home/home.jsx";
import "./assets/styles/general.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import './App.scss';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return <Home />;
}

export default App;
