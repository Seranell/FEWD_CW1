import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import Description from "./Description";
import AddItem from "./AddItem";
import Tag from "./Tag";
import StarAverage from "./StarAverage"

import SliderSettings from "./SliderSettings";

const Session = ({ talks }) => {
  const [openDesc, setOpenDesc] = useState(null);
  const [index, setindex] = useState(0);

  const sessions = Object.entries(
    talks.reduce((acc, talk) => {
      acc[talk.session] = acc[talk.session] || [];
      acc[talk.session].push(talk);
      return acc;
    }, {})
  ).sort(([sessionA], [sessionB]) => sessionA.localeCompare(sessionB));

  const handleSessionChange = (direction) => {
    setOpenDesc(null);
    const newIndex = (index + direction + sessions.length) % sessions.length;
    setindex(newIndex);
  };

  if (sessions.length === 0) {
    return (
      <div style={{ margin: "0 auto", width: "80%", textAlign: "center" }}>
        <h2 className="text-2xl font-bold">No talks found</h2>
      </div>
    );
  }

  const toggleDesc = (index) => {
    setOpenDesc(openDesc === index ? null : index);
  };
  
  
  return (
    <div style={{ margin: "0 auto", width: "80%" }}>
        <div>
            <h2 className="text-2xl">Sessions</h2>
        </div>
      <div className="flex items-center justify-between mb-4">
        <HiChevronLeft
          className="text-black cursor-pointer hover:scale-125 transition-transform"
          onClick={() => handleSessionChange(-1)}
          size={28}
        >
          &larr;
        </HiChevronLeft>
        <h2 className="text-2xl font-bold">Session: {sessions[index][0]}</h2>
        <HiChevronRight
          className="text-black cursor-pointer hover:scale-125 transition-transform"
          onClick={() => handleSessionChange(1)}
          size={28}
        >
          &rarr;
        </HiChevronRight>
      </div>

      <SliderSettings>
        {(settings) => (
          <Slider {...settings}>
            {sessions[index][1].map((talk, index) => (
              <div key={talk.id}>
                {talk.img && (
                  <img
                    src={talk.img}
                    alt={talk.speaker}
                    className="w-60 h-60 object-cover mb-4 rounded-full"
                  />
                )}
                <p>{talk.speaker}</p>
                <p>{talk.title}</p>

                <div className="flex flex-wrap gap-2">
                  {talk.tags.map((tag, idx) => (
                    <Tag key={idx} text={tag} />
                  ))}
                </div>

                <div className="py-2">
                <StarAverage ratings={talk.ratings} />
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
        )}
      </SliderSettings>
    </div>
  );
};

export default Session;
