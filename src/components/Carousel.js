import React from 'react';
import { Carousel } from 'react-responsive-carousel'; // Import the Carousel component
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import Carousel CSS
import '../pages/Home/Home.css';

export function CarouselTransition() {
  const slides = [
    {
      id: 1,
      title: 'Ayush Martand',
      description: 'Keep Your Body Fit',
      imgSrc: 'https://picsum.photos/600/400',
    },
    {
      id: 2,
      title: 'Ayush Martand',
      description: 'Keep Your Body Fit',
      imgSrc: 'https://picsum.photos/600/400',
    }
  ];

  return (
    <Carousel
      transitionTime={5000}
      infiniteLoop={true}     // Infinite loop to keep transitioning forward
      autoPlay={true}         // Automatic forward slide transition
      interval={6000}         // Set interval time for forward slides (in milliseconds)
      showThumbs={false}      // Hide thumbnails
      stopOnHover={false}     // Continue auto play when hovered
      showStatus={false}      // Hide status indicator
      emulateTouch={false}    // Ensure touch events don't trigger backward navigation
    >
      {slides.map((slide) => (
        <div key={slide.id} className="p-[5rem] box-border">
          <div className="flex h-full justify-between items-center">
            <div className="flex flex-col w-full items-start">
              <h1 className="font-bold text-5xl">{slide.title}</h1>
              <p className="text-xl mt-2">{slide.description}</p>
              <button className="text-base bg-lime-400 w-28 text-white py-1.5 mt-2 rounded-[8px]">
               Explore Now
              </button>
            </div>
            <img
              className="w-auto vector-graphic object-contain"
              src={slide.imgSrc}
              alt={slide.title}
            />
          </div>
        </div>
      ))}
    </Carousel>
  );
}
