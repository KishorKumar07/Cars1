import React from 'react';
import { useMemo } from "react";
import "./Property1EnableStyleLight.css";
const Property1EnableStyleLight = ({
  logos,
  property1EnableStyleLightPosition,
  property1EnableStyleLightMarginLeft,
}) => {
  const property1EnableStyleLightStyle = useMemo(() => {
    return {
      position: property1EnableStyleLightPosition,
      marginLeft: property1EnableStyleLightMarginLeft,
    };
  }, [property1EnableStyleLightPosition, property1EnableStyleLightMarginLeft]);

  return (
    <div
      className="property-1enable-stylelight"
      style={property1EnableStyleLightStyle}
    >
      <img className="vector-icon5" alt="" src="/undefined40.png" />
      <div className="logo4">
        <img className="logos-icon4" alt="" src={logos} />
        <div className="new-tab1">New Tab</div>
      </div>
      <img className="icons5" alt="" src="/undefined42.png" />
    </div>
  );
};

export default Property1EnableStyleLight;
