import React from 'react';
import carPng from '../../assets/car.png';
import yellowCar from '../../assets/banner-car.png';

const Hero = ({ theme }) => {
  return (
    <div className="dark:bg-black dark:text-white duration-300 relative ">
      <div className="container min-h-[620px] flex">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div data-aos="zoom-in" className="order-1 sm:order-2">
            <img src={theme == 'dark' ? carPng : yellowCar} alt="car" className="relative -z-10 max-h-[620px] sm:scale-125 drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]" />
          </div>
          <div className="order-2 sm:order-1 space-y-5 sm:pr-32">
            <p data-aos="fade-up" data-aos-delay="600" className="text-primary text-2xl font-serif">
              Effortless
            </p>
            <h1 data-aos="fade-up" data-aos-delay="600" className="text-5xl lg:text-7xl font-serif font-semibold">
              Car Rental
            </h1>
            <p data-aos="fade-up" data-aos-delay="1000">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
            <button data-aos="fade-up" data-aos-duration="1500" className="bg-primary px-6 py-2 rounded-md text-black hover:bg-primary/80 duration-150">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
