import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import AOS from 'aos';
import 'aos/dist/aos.css';
import About from './components/About/About';
import Services from './components/Services/Services';
import CarList from './components/CarList/CarList';
import Testimonial from './components/Testimonial/Testimonial';
import AppStoreBanner from './components/AppStoreBanner/AppStoreBanner';
import AdevertiseBanner from './components/AdvertiseBanner/AdevertiseBanner';
import Footer from './components/Footer/Footer';

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');

  const element = document.documentElement;
  useEffect(() => {
    if (theme == 'dark') {
      element.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      element.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  });

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero theme={theme} />
      <About />
      <Services />
      <CarList />
      <Testimonial />
      <AppStoreBanner />
      <AdevertiseBanner />
      <Footer />
    </div>
  );
};

export default App;
