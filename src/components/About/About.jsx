import React from 'react';
import carPng from '../../assets/car1.png';

const About = () => {
  return (
    <div className="dark:bg-dark dark:text-white bg-slate-100 duration-300 sm:min-h-[600px] sm:grid sm:place-items-center">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div>
            <img src={carPng} alt="car" className="sm:scale-105 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]" data-aos="slide-right" data-duration="1500" />
          </div>
          <div className="grid grid-cols-1 place-items-center">
            <div className="space-y-5 sm:p-16 pb-6">
              <h1 className="text-3xl sm:text-4xl font-bold font-serif" data-aos="fade-up">
                About Us
              </h1>
              <p data-aos="fade-up">Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
              <p data-aos="fade-up"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, nostrum!</p>
              <button data-aos="fade-up" className="button-outline">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
