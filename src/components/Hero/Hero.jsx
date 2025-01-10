import React from 'react';
import carPng from '../../assets/car.png';

const Hero = () => {
  return (
    <div className="dark:bg-black dark:text-white duration-300">
      <div className="container min-h-[620px] flex">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div className="order-1 sm:order-2">
            <img src={carPng} alt="car" />
          </div>
          <div className="order-2 sm:order-1">
            <p className="text-primary text-2xl font-serif">Effortless</p>
            <h1 className="text-5xl lg:text-7xl font-serif font-semibold">Car Rental</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
