import React from 'react';

const AdevertiseBanner = () => {
  return (
    <div className="container mt-10 mb-20">
      <div className="sm:grid sm:grid-cols-3 sm:place-items-center bg-gray-800 text-white">
        <div className="px-5 py-10 space-y-5 col-span-2">
          <h1 className="text-5xl font-bold ">Let's collaborate on your upcoming car rental venture</h1>
          <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis atque repudiandae accusantium voluptas.</p>
        </div>
        <div className="">
          <a href="#" className="py-2 px-7 bg-primary rounded-md  text-lg font-semibold hover:bg-primary/70 duration-300">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdevertiseBanner;
