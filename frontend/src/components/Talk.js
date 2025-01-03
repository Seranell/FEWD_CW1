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
  const { interestedTalks, toggleFavourite } = useFavourites();

  const toggleDesc = (index) => {
    setOpenDesc(openDesc === index ? null : index);
  };

  return (
    <SliderSettings>
      {(settings) => (
        <div style={{ margin: "0 auto", width: "80%" }}>
          <h2 className="text-2xl mb-4">All Talks</h2>
          <Slider {...settings}>
            {talks.map((talk, index) => (
              <div key={talk.id} className="flex flex-col items-center px-20">
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
                <p>{talk.time}</p>

                <div className="py-2">
                  <StarAverage ratings={talk.ratings} />
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
