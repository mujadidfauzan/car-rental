import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt } from 'react-icons/fa';

const FooterLinks = [
  {
    title: 'Home',
    link: '/#',
  },
  {
    title: 'About',
    link: '/#about',
  },
  {
    title: 'Contact',
    link: '/#contact',
  },
  {
    title: 'Blog',
    link: '/#blog',
  },
];

const Footer = () => {
  return (
    <div className="py-14 bg-dark rounded-t-md text-white ">
      <div className="container">
        <div className="grid sm:grid-cols-3">
          <div className="py-4 px-8 space-y-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify">Car Rental</h1>
            <p>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate.</p>
            <div className="flex items-center gap-3">
              <FaLocationArrow /> <p>Noida, Uttar Pradesh</p>
            </div>
            <div className="flex items-center gap-3">
              <FaMobileAlt /> <p>+91 123456789</p>
            </div>
            <div className="flex items-center gap-3">
              <a href="#" className="text-3xl hover:text-primary duration-300">
                <FaFacebook />
              </a>
              <a href="#" className="text-3xl hover:text-primary duration-300">
                <FaLinkedin />
              </a>
              <a href="#" className="text-3xl hover:text-primary duration-300">
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 col-span-2">
            <div className="py-4 px-8">
              <h1 className="text-xl font-bold">Important Links</h1>
              <ul className="list-disc pl-5 mt-3 text-lg space-y-3">
                {FooterLinks.map((data) => (
                  <li>
                    <a href={data.link} className="hover:text-primary">
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="py-4 px-8">
              <h1 className="text-xl font-bold">Important Links</h1>
              <ul className="list-disc pl-5 mt-3 text-lg space-y-3">
                {FooterLinks.map((data) => (
                  <li>
                    <a href={data.link} className="hover:text-primary">
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="py-4 px-8">
              <h1 className="text-xl font-bold">Important Links</h1>
              <ul className="list-disc pl-5 mt-3 text-lg space-y-3">
                {FooterLinks.map((data) => (
                  <li>
                    <a href={data.link} className="hover:text-primary">
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
