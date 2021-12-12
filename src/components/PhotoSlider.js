import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import amazon from '../media/amazoncenter.jpg';
import amazon1 from '../media/amazoncenter2.jpg';
import amazon2 from '../media/amazoncenter3.jpg';
import amazon3 from '../media/amazone-office.png';
import amazon4 from '../media/amazone-office2.jpg';
import amazon5 from '../media/amazonlogo.jpg';
import amazon6 from '../media/amazonlogo2.jpg';
import amazon7 from '../media/amazonwarehouse.jpg';
import amazon8 from '../media/amazonwarehouse2.jpeg';

const AutoplaySlider = withAutoplay(AwesomeSlider);

function PhotoSlider() {
  return (
    <AutoplaySlider
      play={true}
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={6000}
    >
      <div data-src={amazon2} />
      <div data-src={amazon1} />
      <div data-src={amazon} />
      <div data-src={amazon3} />
      <div data-src={amazon4} />
      <div data-src={amazon5} />
      <div data-src={amazon6} />
      <div data-src={amazon7} />
      <div data-src={amazon8} />
    </AutoplaySlider>
  )
}

export default PhotoSlider
