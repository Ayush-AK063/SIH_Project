// ReviewSlider.js
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const reviews = [
  {
    name: "John Doe",
    review: "Amazing product! Highly recommended.",
    image: "https://via.placeholder.com/50",
    profession: "Software Engineer",
  },
  {
    name: "Jane Smith",
    review: "Fantastic experience! Will definitely purchase again.",
    image: "https://via.placeholder.com/50",
    profession: "Designer",
  },
  {
    name: "Alice Johnson",
    review: "Very happy with the product. Excellent customer service.",
    image: "https://via.placeholder.com/50",
    profession: "Project Manager",
  },
  // Add more reviews here
];

// Custom arrow components
const PreviousArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 cursor-pointer text-lime-400"
      onClick={onClick}
    >
      <FaArrowLeft size={24} />
    </div>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 cursor-pointer text-lime-400"
      onClick={onClick}
    >
      <FaArrowRight size={24} />
    </div>
  );
};

const Review = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PreviousArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-6xl mx-auto my-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Our Clients Say!</h2>
      <Slider {...settings} className="relative">
        {reviews.map((review, index) => (
          <div key={index} className=" p-4">
            <div className="bg-white p-6 rounded-lg shadow-md shadow-lime-400">
              <p className="text-gray-700 mb-4">{review.review}</p>
              <div className="flex items-center">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.profession}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Review;
