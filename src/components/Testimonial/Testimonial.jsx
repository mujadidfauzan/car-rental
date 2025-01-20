import React from 'react';
import car from '../../assets/car6.png';

const testimonialData = [
  {
    name: 'Dilshad',
    image: '',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    aosDelay: '0',
  },
  {
    name: 'Satya',
    image: '',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    aosDelay: '300',
  },
  {
    name: 'Sabir',
    image: '',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    aosDelay: '600',
  },
];

const Testimonial = () => {
  return (
    <div className="py-14 dark:bg-black dark:text-white sm:grid sm:place-items-center">
      <div className="container">
        <div className="space-y-4 mb-12" data-aos="fade-up">
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-center">What Our Clients Says About Us</h1>
          <p className="text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, corrupti?</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-black dark:text-white">
          {testimonialData.map((data) => (
            <div className="card rounded-lg dark:bg-white/20 bg-gray-100 text-center duration-300 p-4 sm:py-12 space-y-3 sm:space-y-6" data-aos="fade-up" data-aos-delay={data.aosDelay}>
              <div className="grid place-items-center">
                <img src="https://picsum.photos/200" alt="" className="rounded-full w-20 h-20" />
              </div>
              <div className="text-2xl">⭐⭐⭐⭐⭐</div>
              <p>{data.description}</p>
              <h2 className="font-bold">{data.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
