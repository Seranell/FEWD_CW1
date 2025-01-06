import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import Description from "./Description";
import AddItem from "./AddItem";
import Tag from "./Tag";
import StarAverage from "./StarAverage";
import Favourite from "./Favourite";
import SliderSettings from "./SliderSettings";
import { useFavourites } from "./FavouritesContext";

const Session = ({ talks }) => {
  const [openDesc, setOpenDesc] = useState(null);
  const [index, setindex] = useState(0);
  const [selectedTag, setSelectedTag] = useState(null);

  const { interestedTalks, toggleFavourite } = useFavourites();

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
      <div className="m-auto w-80 text-center">
        <h2 className="text-2xl font-bold">No talks found</h2>
      </div>
    );
  }

  const toggleDesc = (index) => {
    setOpenDesc(openDesc === index ? null : index);
  };

  const filteredTalks = selectedTag
    ? sessions[index][1].filter((talk) => talk.tags.includes(selectedTag))
    : sessions[index][1];

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
        />
        <h2 className="text-2xl font-bold">Session: {sessions[index][0]}</h2>
        <HiChevronRight
          className="text-black cursor-pointer hover:scale-125 transition-transform"
          onClick={() => handleSessionChange(1)}
          size={28}
        />
      </div>

      {selectedTag && (
        <div className="mb-4">
          <span>
            Filtered by: <strong>{selectedTag}</strong>
          </span>
          <button
            onClick={() => setSelectedTag(null)}
            className="ml-4 text-blue-500 underline"
          >
            Clear Filter
          </button>
        </div>
      )}

      <SliderSettings>
        {(settings) => (
          <Slider {...settings}>
            {filteredTalks.map((talk, index) => (
              <div key={talk.id} className="flex flex-col items-center px-10">
                <Favourite
                  selected={interestedTalks.some((t) => t.id === talk.id)}
                  onSelect={() => toggleFavourite(talk)}
                />
                {talk.img && (
                  <img
                    src={talk.img}
                    alt={talk.speaker}
                    className="w-60 h-60 object-cover mb-4 rounded-full"
                  />
                )}
                <p className="font-bold text-lg">{talk.speaker}</p>
                <p>{talk.title}</p>
                <p className="font-bold">{talk.time}</p>
                <div className="flex flex-wrap gap-2">
                  {talk.tags.map((tag, idx) => (
                    <Tag
                      key={idx}
                      text={tag}
                      onClick={() => setSelectedTag(tag)}
                    />
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