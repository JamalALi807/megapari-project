'use client'
import { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const slides = [
  {
    id: 1,
    title: "DON'T STOP! THE MOST EXCITING RACES ARE ALREADY WAITING FOR YOU",
    image: "https://unsplash.com/photos/blue-orange-and-green-textile-6QR_HefF6dU", // You'll need to add this image to your public folder
  },
  {
    id: 2,
    title: "DON'T STOP! THE MOST EXCITING RACES ARE ALREADY WAITING FOR YOU",
    image: "https://unsplash.com/photos/green-and-blue-light-illustration-coj7UZ7iN60", // You'll need to add this image to your public folder
  },
  // Add more slides as needed
];

export default function FormulaCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative max-w-full w-full h-[258px] overflow-hidden bg-black">
      {/* Main Content Container */}
      <div className="flex h-full">
        {/* Left Text Section */}
        <div className="w-[400px] h-full flex items-center z-10 bg-black bg-opacity-80">
          <h2 className="text-white text-3xl font-bold p-10 leading-tight">
            {slides[currentIndex].title}
          </h2>
        </div>

        {/* Right Image Section */}
        <div className="flex-1 relative">
          <div
            className="absolute z-10 inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slides[currentIndex].image})`,
              backgroundSize: 'cover',
            }}
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent" />
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all z-20"
      >
        <IoIosArrowBack size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all z-20"
      >
        <IoIosArrowForward size={24} />
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {[...Array(8)].map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              currentIndex === index
                ? 'bg-white'
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      {/* Decorative Stars */}
      <div className="absolute top-0 left-0 right-0 h-8">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </div>
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute top-0 w-2 h-2 bg-white transform rotate-45"
              style={{
                left: `${(i * 100) / 12}%`,
                animation: `twinkle ${Math.random() * 2 + 1}s infinite`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
