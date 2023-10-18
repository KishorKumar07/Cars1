import React from 'react';
import { useCallback } from "react";
import "./PeriodicServiceForm.css";
const PeriodicServiceForm = () => {
  const onGroupContainerClick = useCallback(() => {
    // Please sync "Perodic Service" to the project
  }, []);

  const onGroupContainer2Click = useCallback(() => {
    // Please sync "Denting & Repair" to the project
  }, []);

  const onGroupContainer3Click = useCallback(() => {
    // Please sync "Tyres & wheel" to the project
  }, []);

  return (
    <div className="group-parent17">
      <div className="group-parent18" onClick={onGroupContainerClick}>

        <div className="periodic-service">Periodic Service</div>
      </div>
     
      <div className="group-parent19">
        
        <div className="periodic-service">
          <p className="fitments">{`Suspension &`}</p>
          <p className="fitments">Fitments</p>
        </div>
      </div>
      <div className="group-parent20" onClick={onGroupContainer2Click}>
       
        <div className="clutch-body-container">
          <p className="fitments">{`Clutch &`}</p>
          <p className="fitments">Body Parts</p>
        </div>
      </div>
      <div className="group-parent21" onClick={onGroupContainer3Click}>
       
        <div className="periodic-service">{`Tyres & Wheel`}</div>
      </div>
     
    </div>
  );
};

export default PeriodicServiceForm;
