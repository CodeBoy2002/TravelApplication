import React, { useState } from "react";
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";

const sliderData = [
  {
    url: "https://plus.unsplash.com/premium_photo-1661963063507-4fc377854dad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
];

const Carousel = () => {
  const [slide, setSlide] = useState(0);
  const length = sliderData.length;

  const prevSlide = () => {
    setSlide(slide === length - 1 ? 0 : slide + 1);
  };
  const nextSlide = () => {
    setSlide(slide === 0 ? length - 1 : slide - 1);
  };

  return (
    <div className="max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center">
      <BsFillArrowLeftSquareFill
        onClick={prevSlide}
        className="absolute top-[50%] text-3xl text-black cursor-pointer left-8"
      />
      <BsFillArrowRightSquareFill
        onClick={nextSlide}
        className="absolute top-[50%] text-3xl text-black cursor-pointer right-8"
      />
      {sliderData.map((item, index) => {
        return (
          <div className={index === slide ? "opacity-100" : "opacity-0"}>
            {index === slide && (
              <img className="w-full rounded-md" src={item.url} alt="/" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Carousel;
