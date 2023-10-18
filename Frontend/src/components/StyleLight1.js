import React from 'react';
import { useMemo } from "react";
import "./StyleLight1.css";
const StyleLight1 = ({ styleLightPosition, styleLightTop, styleLightLeft }) => {
  const styleLight1Style = useMemo(() => {
    return {
      position: styleLightPosition,
      top: styleLightTop,
      left: styleLightLeft,
    };
  }, [styleLightPosition, styleLightTop, styleLightLeft]);

  return (
    <>
    </>
  );
};

export default StyleLight1;
