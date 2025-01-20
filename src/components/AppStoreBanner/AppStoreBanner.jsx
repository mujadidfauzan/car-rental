import React from 'react';
import AppStoreImg from '../../assets/website/app_store.png';
import PlayStoreImg from '../../assets/website/play_store.png';
import pattern from '../../assets/website/pattern.jpeg';

const bannerImg = {
  backgroundImage: `url(${pattern})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '100%',
  width: '100%',
};

const AppStoreBanner = () => {
  return (
    <div className="container mt-10">
      <div className="text-black sm:min-h-[400px] sm:grid sm:place-items-center rounded-xl" style={bannerImg}>
        <div className="space-y-6 max-w-xl">
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-center" data-aos="fade-up">
            Get Started With Our APP
          </h1>
          <p className="text-center" data-aos="fade-up" data-aos-delay="200">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet alias deserunt nostrum libero temporibus eaque?
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4" data-aos="fade-up" data-aos-delay="500">
            <a href="#">
              <img src={AppStoreImg} alt="" className="max-w-40 sm:max-w-40 md:max-w-48" />
            </a>
            <a href="#">
              <img src={PlayStoreImg} alt="" className="max-w-40 sm:max-w-40 md:max-w-48" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppStoreBanner;
