import React, { useState } from 'react';

const Carousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = React.Children.toArray(children);
  const totalSlides = slides.length;

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + totalSlides) % totalSlides);
  };

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % totalSlides);
  };

  return (
    <div className="relative w-full">
      {/* Slide Container */}
      <div className="overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0 absolute inset-0'
            }`}
          >
            {slide}
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-600 text-white px-3 py-1"
      >
        Prev
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-600 text-white px-3 py-1"
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;
