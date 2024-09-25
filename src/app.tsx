import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./style.css";

const App: React.FC = () => {
  return (
    <div className="column">
      <div className="multi-row">
        <div className="box">1dsa</div>
        <div className="box">2dsa</div>
        <div className="box">3dsa</div>
        <div className="box">4dsa</div>
        <div className="box">5dsa</div>
        <div className="box">6dsa</div>
      </div>

      <div className="row">
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
    </div>
  );
};

export default App;
