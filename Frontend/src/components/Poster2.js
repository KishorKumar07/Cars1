import React from 'react';
import { useMemo } from "react";
import "./Poster2.css";
const Poster2 = ({
  vector36,
  group7413,
  poster2Position,
  poster2BorderRadius,
  poster2FlexShrink,
}) => {
  const poster2Style = useMemo(() => {
    return {
      position: poster2Position,
      borderRadius: poster2BorderRadius,
      flexShrink: poster2FlexShrink,
    };
  }, [poster2Position, poster2BorderRadius, poster2FlexShrink]);

  return (
    <div className="poster-2" style={poster2Style}>
      <div className="poster-2-child" />
      
      <div className="warranty-parent">
        <div className="warranty">Warranty</div>
        <div className="save-5000-inr-container">
          <p className="save-5000-inr">Save 5000 INR</p>
          <p className="save-5000-inr">Annually</p>
        </div>
      </div>
    </div>
  );
};

export default Poster2;
