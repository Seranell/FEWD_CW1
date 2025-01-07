import React from "react";
import { HiChevronDoubleRight, HiChevronDoubleLeft } from "react-icons/hi";

const NextArrow = ({ className, onClick }) => (
  <div className={`${className} group`} onClick={onClick}>
    <HiChevronDoubleRight className="text-black transition-transform duration-200 group-hover:scale-125" size={28} />
  </div>
);

const PrevArrow = ({ className, onClick }) => (
  <div className={`${className} group`} onClick={onClick}>
    <HiChevronDoubleLeft className="text-black transition-transform duration-200 group-hover:scale-125" size={28} />
  </div>
);

const SliderSettings = ({ children, itemCount }) => {
  const slidesToShow = 3; 
  const slidesToScroll = 2; 

  const settings = {
    dots: true,
    infinite: itemCount > slidesToShow,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return children(settings); 
};

export default SliderSettings;