import React from 'react';
import { useMemo } from "react";
import "./Icons.css";
const Icons = ({ iconsWidth, iconsHeight }) => {
  const iconsStyle = useMemo(() => {
    return {
      width: iconsWidth,
      height: iconsHeight,
    };
  }, [iconsWidth, iconsHeight]);

  return (
    <div className="icons6" style={iconsStyle}>
      <img className="icons-inner" alt="" src="/undefined28.png" />
      <img className="icons-inner" alt="" src="/undefined29.png" />
    </div>
  );
};

export default Icons;
