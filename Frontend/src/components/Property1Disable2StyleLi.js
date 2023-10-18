import React from 'react';
import { useMemo } from "react";
import "./Property1Disable2StyleLi.css";
const Property1Disable2StyleLi = ({
  appTitle,
  appIcon,
  showLogosIcon,
  property1Disable2StyleLiPosition,
  tabWidth,
  tabRight,
  tabLeft,
}) => {
  const property1Disable2StyleLiStyle = useMemo(() => {
    return {
      position: property1Disable2StyleLiPosition,
    };
  }, [property1Disable2StyleLiPosition]);

  const tabStyle = useMemo(() => {
    return {
      width: tabWidth,
      right: tabRight,
      left: tabLeft,
    };
  }, [tabWidth, tabRight, tabLeft]);

  return (
    <div
      className="property-1disable-2-styleli"
      style={property1Disable2StyleLiStyle}
    >
      <img className="vector-icon4" alt="" src="/undefined37.png" />
      <div className="tab" style={tabStyle}>
        <div className="div1">
          <div className="logo3">
            {showLogosIcon && (
              <img className="logos-icon3" alt="" src={appTitle} />
            )}
            <div className="instacart-grocery2">{appIcon}</div>
          </div>
          <img className="icons4" alt="" src="/undefined39.png" />
        </div>
      </div>
    </div>
  );
};

export default Property1Disable2StyleLi;
