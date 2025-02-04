import React from 'react';
import { FaCameraRetro } from 'react-icons/fa';
import { FcRotateCamera } from 'react-icons/fc';
import { GiNotebook } from 'react-icons/gi';
import { SlNote } from 'react-icons/sl';

const skillsData = [
  {
    name: 'Best Price',
    icon: <FaCameraRetro className="text-5xl text-primary group-hover:text-black duration-300" />,
    link: '#',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    aosDelay: '0',
  },
  {
    name: 'Fast and Safe',
    icon: <GiNotebook className="text-5xl text-primary group-hover:text-black duration-300" />,
    link: '#',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    aosDelay: '500',
  },
  {
    name: 'Experience Drivers',
    icon: <SlNote className="text-5xl text-primary group-hover:text-black duration-500" />,
    link: '#',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    aosDelay: '800',
  },
];

const Services = () => {
  return (
    <div className="py-14 dark:bg-black dark:text-white sm:grid sm:place-items-center">
      <div className="container">
        <div className="pb-12">
          <h1 data-aos="fade-up" className="text-3xl font-semibold text-center font-serif sm:text-4xl">
            Why Choose Us
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {skillsData.map((skill) => (
            <div key={skill.name} data-aos="fade-up" data-aos-delay={skill.aosDelay} className="card text-center space-y-3 sm:space-7-6 bg-dark p-4 sm:py-16 rounded-md group hover:bg-primary text-white hover:text-black duration-300">
              <div className="grid place-items-center ">{skill.icon}</div>
              <h1 className="text-2xl font-bold">{skill.name}</h1>
              <p>{skill.description}</p>
              <a href={skill.link} className="inline-block text-lg font-semibold py-3 text-primary group-hover:text-black duration-300">
                Learn more
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
    // {skillsData.map((skill) => {})}
  );
};

export default Services;
