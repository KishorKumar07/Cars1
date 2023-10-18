import React from 'react';
import { useMemo } from "react";
import "./StyleHomeModeLight.css";
const StyleHomeModeLight = ({
  refresh,
  frame13,
  google,
  extension,
  styleHomeModeLightPosition,
  styleHomeModeLightTop,
  styleHomeModeLightLeft,
}) => {
  const styleHomeModeLightStyle = useMemo(() => {
    return {
      position: styleHomeModeLightPosition,
      top: styleHomeModeLightTop,
      left: styleHomeModeLightLeft,
    };
  }, [
    styleHomeModeLightPosition,
    styleHomeModeLightTop,
    styleHomeModeLightLeft,
  ]);

  return (
    <div className="stylehome-modelight" style={styleHomeModeLightStyle}>
      <div className="frame-container">
        {/* <div className="icons-parent">
          <div className="refresh-parent">
            <img className="icons-child" alt="" src="/undefined28.png" />
            <img className="icons-child" alt="" src="/undefined29.png" />
          </div>
          <div className="refresh-parent">
            <img className="icons-child" alt="" src={refresh} />
            <img className="icons-child" alt="" src={frame13} />
          </div>
        </div> */}
        {/* <div className="frame-wrapper">
          <div className="frame-parent1">
            <div className="google-parent">
              <img className="icons-child" alt="" src={google} />
              <div className="search-google-or">
                Search Google or type a URL
              </div>
            </div>
            <img className="icon-favorite" alt="" src="/undefined33.png" />
          </div>
        </div> */}
        {/* <div className="extension-parent">
          <img className="extension-icon" alt="" src={extension} />
          <img className="union-icon" alt="" src="/undefined35.png" />
          <div className="exclude">
            <div className="exclude-child" />
            <div className="exclude-item" />
          </div>
          <img className="ellipse-icon" alt="" src="/undefined36.png" />
          <div className="ellipse-parent">
            <div className="ellipse-div" />
            <div className="ellipse-div" />
            <div className="ellipse-div" />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default StyleHomeModeLight;
