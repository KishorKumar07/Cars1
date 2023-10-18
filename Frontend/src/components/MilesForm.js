import React from 'react';
import Poster1 from "./Poster1";
import Poster2 from "./Poster2";
import Poster3 from "./Poster3";
import "./MilesForm.css";
const MilesForm = () => {
  return (
    <div className="poster-1-parent">
      <Poster1
        poster1Position="relative"
        poster1BorderRadius="20px"
        poster1FlexShrink="0"
      />
      <Poster2
        vector36="/undefined53.png"
        group7413="/undefined54.png"
        poster2Position="relative"
        poster2BorderRadius="20px"
        poster2FlexShrink="0"
      />
      <Poster3
        poster3BorderRadius="20px"
        poster3Position="relative"
        poster3FlexShrink="0"
      />
    </div>
  );
};

export default MilesForm;
