import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Description from "./Description";
import Tag from "./Tag";
import SliderSettings from "./SliderSettings";
import AddItem from "./AddItem";
import StarAverage from "./StarAverage";
import Favourite from "./Favourite";
import { useFavourites } from "./FavouritesContext";

const Talk = ({ talks }) => {
  const [openDesc, setOpenDesc] = useState(null);
  const [selectedTag, setSelectedTag] = useState(null); 
  const { interestedTalks, toggleFavourite } = useFavourites();

  const toggleDesc = (index) => {
    setOpenDesc(openDesc === index ? null : index);
  };

  const filteredTalks = selectedTag
    ? talks.filter((talk) => talk.tags.includes(selectedTag))
    : talks;

  return (
    <SliderSettings>
      {(settings) => (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h2 className="text-2xl font-semibold mb-4">All Talks</h2>

          {selectedTag && (
            <div className="mb-4">
              <span className="text-sm">
                Filtered by: <strong>{selectedTag}</strong>
              </span>
              <button
                onClick={() => setSelectedTag(null)}
                className="ml-4 text-blue-500 underline text-sm"
              >
                Clear Filter
              </button>
            </div>
          )}

          <Slider {...settings}>
            {filteredTalks.map((talk, index) => (
              <div key={talk.id} className="flex flex-col items-start px-4 sm:px-8 lg:px-16">
                <div className="flex justify-end w-full">
                  <Favourite
                    selected={interestedTalks.some((t) => t.id === talk.id)}
                    onSelect={() => toggleFavourite(talk)}
                  />
                </div>
                {talk.img && (
                  <img
                    src={talk.img}
                    alt={talk.speaker}
                    className="w-48 h-48 sm:w-60 sm:h-60 object-cover mb-4 rounded-full"
                  />
                )}
                <p className="font-bold text-lg">{talk.speaker}</p>
                <p className="text-sm sm:text-base">{talk.title}</p>
                <p className="font-bold text-sm sm:text-base">{talk.time}</p>

                <div className="py-2">
                  <StarAverage ratings={talk.ratings} />
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {talk.tags.map((tag, index) => (
                    <Tag
                      key={index}
                      text={tag}
                      onClick={() => setSelectedTag(tag)}
                      className="cursor-pointer"
                    />
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