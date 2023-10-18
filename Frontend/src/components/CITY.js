import React from 'react';
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./CITY.css";
import TextField from '@mui/material/TextField';
const CITY = ({ onClose }) => {
  const navigate = useNavigate();

  const onGroupContainer1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const customStyles = {
   
    borderRadius: '10px',
    position: "relative",
    top:"120px",
    heigth:"20px",
    left:"27px",
    width:"250px"

  };


  return (


    <div className="city">
      <div className="city-child" />
     
      <div className="select-your-city">Select your City</div>
      <div className="new-delhi">New Delhi</div>
      <div className="mumbai">Mumbai</div>
      <div className="agra">Agra</div>
      <img className="mask-group-icon1" alt="" src="/undefined135.png" />
     
      <div >
        
        <img className="image-106-icon" alt="" src="/undefined136.png" />
        <TextField label="Search" variant="outlined"  style={customStyles}/>
      </div>
      <div className="hyderabad-group" onClick={onGroupContainer1Click}>
        <div className="hyderabad1">Hyderabad</div>
        <img className="image-149-icon" alt="" src="/undefined137.png" />
      </div>
      <img className="mask-group-icon2" alt="" src="/undefined138.png" />
      <img className="image-151-icon" alt="" src="/undefined139.png" />
      <img className="image-152-icon" alt="" src="/undefined140.png" />
    </div>
  );
};

export default CITY;
