import React from 'react';
import whiteCar from '../../assets/white-car.png';
import car2 from '../../assets/car5.png';
import car3 from '../../assets/car6.png';

const carList = [
  {
    name: 'BMW UX',
    price: 100,
    image: whiteCar,
    aosDelay: '0',
  },
  {
    name: 'KIA UX',
    price: 140,
    image: car2,
    aosDelay: '300',
  },
  {
    name: 'BMW UX',
    price: 100,
    image: car3,
    aosDelay: '500',
  },
];

const CarList = () => {
  return (
    <div className="py-10 dark:bg-black dark:text-white">
      <div className="container">
        <h1 data-aos="fade-up" className="text-4xl font-serif font-bold mb-3">
          Lorem, ipsum dolor.
        </h1>
        <p data-aos="fade-up" data-aos-delay="400" className="text-sm pb-10">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam officia deleniti odit.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
          {carList.map((data) => (
            <div data-aos="fade-up" data-aos-delay={data.aosDelay} className="border-2 border-gray-500 rounded-xl p-3 space-y-3 hover:border-primary relative group">
              <div className="w-full h-[120px]">
                <img src={data.image} alt="" className="w-full h-[120px] object-contain sm:translate-x-8 group-hover:sm:translate-x-16 duration-700" />
              </div>
              <div className="space-y-2">
                <h5 className="text-lg text-primary font-bold">{data.name}</h5>
                <div className="flex justify-between items-center text-xl font-semibold">
                  <p>${carList[0].price}/Day</p>
                  <a href="#">Details</a>
                </div>
                <h4 className="text-xl font-bold absolute top-0 left-3">12Km</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarList;
