import React from 'react';
import { useMemo } from "react";
import "./Poster3.css";
const Poster3 = ({
  poster3BorderRadius,
  poster3Position,
  poster3FlexShrink,
}) => {
  const poster3Style = useMemo(() => {
    return {
      borderRadius: poster3BorderRadius,
      position: poster3Position,
      flexShrink: poster3FlexShrink,
    };
  }, [poster3BorderRadius, poster3Position, poster3FlexShrink]);

  return (
    <div className="poster-3" style={poster3Style}>
      <div className="poster-3-child" />
      
      <div className="accessories-parent">
        <div className="accessories">Accessories</div>
        <div className="check-them-out">Check them Out</div>
      </div>
    </div>
  );
};

export default Poster3;
