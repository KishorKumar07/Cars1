import React from 'react';
import { useCallback } from "react";
import "./CuratedCustomServicesContainer.css";
const CuratedCustomServicesContainer = () => {
  const onFrameContainerClick = useCallback(() => {
    // Please sync "Batteries" to the project
  }, []);

  const onFrameContainer1Click = useCallback(() => {
    // Please sync "wind Shield & Lights" to the project
  }, []);

  const onFrameContainer2Click = useCallback(() => {
    // Please sync "Car Inspection" to the project
  }, []);

  const onFrameContainer4Click = useCallback(() => {
    // Please sync "Perodic Service" to the project
  }, []);

  const onFrameContainer5Click = useCallback(() => {
    // Please sync "Detailing Service" to the project
  }, []);

  const onFrameContainer6Click = useCallback(() => {
    // Please sync "Denting & Repair" to the project
  }, []);

  const onFrameContainer8Click = useCallback(() => {
    // Please sync "Ac Service & Repair" to the project
  }, []);

  const onFrameContainer9Click = useCallback(() => {
    // Please sync "wind Shield & Lights" to the project
  }, []);

  const onFrameContainer10Click = useCallback(() => {
    // Please sync "Tyres & wheel" to the project
  }, []);

  const onFrameContainer12Click = useCallback(() => {
    // Please sync "Tyres & wheel" to the project
  }, []);

  const onFrameContainer13Click = useCallback(() => {
    // Please sync "Tyres & wheel" to the project
  }, []);

  const onFrameContainer14Click = useCallback(() => {
    // Please sync "Denting & Repair" to the project
  }, []);

  const onFrameContainer16Click = useCallback(() => {
    // Please sync "Perodic Service" to the project
  }, []);

  const onFrameContainer17Click = useCallback(() => {
    // Please sync "Car Services & Spa" to the project
  }, []);

  return (
    <div
      className="heading-2-car-services-avail-parent2"
      data-scroll-to="frameContainer1"
    >
      <b className="heading-28">Custom Services</b>
      <div className="frame-parent3">
        <div className="image-3-parent" onClick={onFrameContainerClick}>
         
          <div className="steering">Batteries</div>
        </div>
        <div className="image-3-parent" onClick={onFrameContainer1Click}>
      
          <div className="steering">Lights</div>
        </div>
        <div className="image-10-parent" onClick={onFrameContainer2Click}>
         
          <div className="steering">Steering</div>
        </div>
      </div>
      <div className="frame-parent4">
        <div className="image-3-parent" onClick={onFrameContainer4Click}>
          
          <div className="steering">Brakes</div>
        </div>
       
        <div className="image-3-parent" onClick={onFrameContainer6Click}>
          
          <div className="steering">Body Parts</div>
        </div>
      </div>
      <div className="frame-parent5">
        <div className="image-3-parent" onClick={onFrameContainer8Click}>
         
          <div className="steering">AC Parts</div>
        </div>
        <div className="image-3-parent" onClick={onFrameContainer9Click}>
          
          <div className="steering">Glasses</div>
        </div>
        <div className="image-10-parent" onClick={onFrameContainer10Click}>
         
          <div className="steering">Suspension</div>
        </div>
      </div>
      <div className="frame-parent6">
        <div className="image-3-parent" onClick={onFrameContainer12Click}>
        
          <div className="steering">Clutch</div>
        </div>
        <div className="image-10-parent" onClick={onFrameContainer13Click}>
        
          <div className="steering">Tyres</div>
        </div>
       
      </div>
      <div className="frame-parent7">
        <div className="image-3-parent" onClick={onFrameContainer16Click}>
        
          <div className="steering">Go connect 2.0</div>
        </div>
        <div className="image-10-parent" onClick={onFrameContainer17Click}>
       
          <div className="steering">Car Spa</div>
        </div>
      </div>
    </div>
  );
};

export default CuratedCustomServicesContainer;
