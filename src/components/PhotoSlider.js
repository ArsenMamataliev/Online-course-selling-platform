import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import amazon from '../media/amazonlogo.jpg';
import amazon1 from '../media/amazoncenter.jpg';
import amazon2 from '../media/amazoncenter2.jpg';
import amazon3 from '../media/amazonlogo2.jpg';
import amazon4 from '../media/amazonwarehouse.jpg';
import amazon5 from '../media/amazonlogomini.jpg';

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
    </AutoplaySlider>
  )
}

export default PhotoSlider
