import React from 'react';
import { useMemo } from "react";
import "./Poster1.css";
const Poster1 = ({
  poster1Position,
  poster1BorderRadius,
  poster1FlexShrink,
}) => {
  const poster1Style = useMemo(() => {
    return {
      position: poster1Position,
      borderRadius: poster1BorderRadius,
      flexShrink: poster1FlexShrink,
    };
  }, [poster1Position, poster1BorderRadius, poster1FlexShrink]);

  return (
    <div className="poster-1" style={poster1Style}>
      <div className="poster-1-child" />
      
      <div className="miles-parent">
        <div className="miles">Miles</div>
        <div className="free-road-side-container">
          <p className="free-road-side">Free Road Side</p>
          <p className="free-road-side">Assistance</p>
        </div>
      </div>
    </div>
  );
};

export default Poster1;
