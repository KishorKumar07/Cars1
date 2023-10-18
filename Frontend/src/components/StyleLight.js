import React from 'react';
import { useMemo } from "react";
import StyleLight1 from "./StyleLight1";
import StyleHomeModeLight from "./StyleHomeModeLight";
import Property1Disable2StyleLi from "./Property1Disable2StyleLi";
import "./StyleLight.css";
const StyleLight = ({
  refresh,
  frame13,
  google,
  extension,
  logos,
  instacartGroceryDeliveryO,
  logos1,
  logos2,
  logos3,
  tabs,
  showLogosIcon,
  showTabs,
  tabsVisible,
  showTabsIcon,
  styleLightWidth,
  styleLightPosition,
  styleLightTop,
  styleLightLeft,
  tabWidth,
  tabRight,
  tabLeft,
  vectorIconTop,
  vectorIconBottom,
  vectorIconTop1,
  vectorIconBottom1,
}) => {
  const styleLightStyle = useMemo(() => {
    return {
      width: styleLightWidth,
      position: styleLightPosition,
      top: styleLightTop,
      left: styleLightLeft,
    };
  }, [styleLightWidth, styleLightPosition, styleLightTop, styleLightLeft]);

  const tabStyle = useMemo(() => {
    return {
      width: tabWidth,
      right: tabRight,
      left: tabLeft,
    };
  }, [tabWidth, tabRight, tabLeft]);

  const vectorIconStyle = useMemo(() => {
    return {
      top: vectorIconTop,
      bottom: vectorIconBottom,
    };
  }, [vectorIconTop, vectorIconBottom]);

  const vectorIcon1Style = useMemo(() => {
    return {
      top: vectorIconTop1,
      bottom: vectorIconBottom1,
    };
  }, [vectorIconTop1, vectorIconBottom1]);

  return (
   <>
   </>
  );
};

export default StyleLight;
