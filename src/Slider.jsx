import React from 'react';
import video from "./videos/video-1.mp4";
import { Button } from './Button';
import './Slider.css';

function Slider() {
  return (
    <div className='hero-container'>
      <video src={video} autoPlay loop muted />
      <h1>CodeLog</h1>
      <p>Backgroung Video rendered using Blender !!</p>
      <div className='hero-btns'>
       
      </div>
    </div>
  );
}

export default Slider;
