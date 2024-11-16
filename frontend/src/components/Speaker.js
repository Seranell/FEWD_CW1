import React, { useState, useEffect } from "react";
import { HiChevronDoubleRight } from "react-icons/hi";
import { HiChevronDoubleLeft } from "react-icons/hi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function DisplaySpeakers() {
  const [talks, setTalks] = useState([]);
  const [loading, setLoading] = useState(true);

  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "transparent" }}
        onClick={onClick}
      >
        <HiChevronDoubleRight size={24} color="black" />
      </div>
    );
  }

  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "transparent" }}
        onClick={onClick}
      >
        <HiChevronDoubleLeft size={24} color="black" />
      </div>
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  useEffect(() => {
    fetch("http://localhost:3001/talks")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setTalks(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error Loading Talks", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div style={{ margin: "0 auto", width: "80%" }}>
      <h2 className="text-4xl font-bold pb-5">Conference Talks</h2>
      <Slider {...settings}>
        {talks.map((talk) => (
          <div className="flex flex-col items-center w-60 h-96 bg-white p-8 rounded-lg"key={talk.id}>
           {talk.img && (
          <img src={talk.img} alt={talk.speaker} className="w-60 h-60 object-cover mb-4 rounded-full"/>
                        )}
            <h3 className="text-xl font-semibold">{talk.title}</h3>
            <p className="text-lg">{talk.speaker}</p>

            <div className="flex flex-wrap gap-2 my-4">
          {talk.tags.map((tag, index) => (
            <div
              key={index}
              className="bg-gray-500 text-white px-2 py-1 text-sm rounded-lg"
            >
              {tag}
            </div>
          ))}
        </div>

          </div>
        ))}
      </Slider>
    </div>
  );
}

export default DisplaySpeakers;
