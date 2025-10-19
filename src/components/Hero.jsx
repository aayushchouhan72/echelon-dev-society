import React, { useState, useEffect } from "react";
import { heroSliderImages, clubInfo } from "../data/mockData";
import { ChevronLeftIcon, ChevronRightIcon } from "./Icons";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide
      ? heroSliderImages.length - 1
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === heroSliderImages.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, [currentIndex]);

  return (
    <section
      id="home"
      className="h-screen w-full relative group overflow-hidden"
    >
      <div
        className="w-full h-full flex transition-transform ease-in-out duration-700"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {heroSliderImages.map((url, index) => (
          <div
            key={index}
            className="w-full h-full flex-shrink-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${url})` }}
          >
            <div className="w-full h-full bg-black/50" />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight drop-shadow-lg">
          For the students by the Students
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-8 text-gray-200 drop-shadow-md">
          Welcome to the {clubInfo.name}, the hub of creativity and technology
          at our college. Join us to create amazing things!
        </p>
        <a
          href="#events"
          className="bg-violet-600 hover:bg-violet-700 text-white font-bold py-3 px-8 rounded-full transition-transform duration-300 ease-in-out transform hover:scale-105"
        >
          Explore Events
        </a>
      </div>

      <div className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <ChevronLeftIcon onClick={prevSlide} className="w-8 h-8" />
      </div>
      <div className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <ChevronRightIcon onClick={nextSlide} className="w-8 h-8" />
      </div>

      <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2">
        {heroSliderImages.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
              currentIndex === slideIndex ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
