import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Description from "./Description";
import Tag from "./Tag";
import SliderSettings from "./SliderSettings";
import AddItem from "./AddItem";
import Stars from "./Stars";

const Talk = ({ talks }) => {
  const [openDesc, setOpenDesc] = useState(null);

  const toggleDesc = (index) => {
    setOpenDesc(openDesc === index ? null : index);
  };

  return (
    <SliderSettings>
      {(settings) => (
        <div style={{ margin: "0 auto", width: "80%" }}>
          <Slider {...settings}>
            {talks.map((talk, index) => (
              <div key={talk.id} className="flex flex-col items-center px-20">
                {talk.img && (
                  <img
                    src={talk.img}
                    alt={talk.speaker}
                    className="w-60 h-60 object-cover mb-4 rounded-full"
                  />
                )}
                <p class = "font-bold text-lg">{talk.speaker}</p>
                <p>{talk.title}</p>
                <p>{talk.time}</p>
                <div>
                <Stars />
                </div>
                <div className="flex flex-wrap gap-2">
                  {talk.tags.map((tag, index) => (
                    <Tag key={index} text={tag} />
                  ))}
                </div>
                <Description
                  desc={talk.description}
                  isOpen={openDesc === index}
                  onToggle={() => toggleDesc(index)}
                  >
                  {openDesc === index && <AddItem talk={talk} />}
                  </Description>
                
              </div>
            ))}
          </Slider>
        </div>
      )}
    </SliderSettings>
  );
};

export default Talk;
