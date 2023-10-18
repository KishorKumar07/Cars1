import React from 'react';
import { useMemo } from "react";
import "./Property1Frame301.css";
import TextField from '@mui/material/TextField';
   


const Property1Frame301 = ({
  property1Frame301Position,
  property1Frame301Top,
  property1Frame301Left,
}) => {
  const property1Frame301Style = useMemo(() => {
    return {
      position: property1Frame301Position,
      top: property1Frame301Top,
      left: property1Frame301Left,
    };
  }, [property1Frame301Position, property1Frame301Top, property1Frame301Left]);



  const customStyles = {
   
    borderRadius: '40px',
    position: "relative",
    top:"230px",
    
    left:"30px",
    width:"250px"

  };

  

  return (
    <div className="property-1frame-301" style={property1Frame301Style}>
      <div className="property-1frame-301-child" />
      <div className="get-instant-quotes">
        Get instant quotes for your car service
      </div>
      <div className="rating-parent">
        <div className="rating">Rating</div>
        <div className="star-parent">
          <img className="frame-item" alt="" src="/undefined26.png" />
          <div className="div">4.7 / 5</div>
        </div>
      </div>
    
      
      <TextField label="Select Your Car" variant="outlined"  style={customStyles}/>
      <div style={{height:10}}> </div>
      <TextField label="Enter Your Mobile Number" variant="outlined"  style={customStyles}/>
      <div style={{height:30}}> </div>
      <div className="check-prices-for-free-wrapper">
        <div className="check-prices-for">Check Prices For Free</div>
      </div>
      <div className="book-your-car-container">
        <p className="book-your-car">Book your Car</p>
        <p className="book-your-car">Service Now !</p>
      </div>
    </div>
  );
};

export default Property1Frame301;
