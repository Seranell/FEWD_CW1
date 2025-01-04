import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderSettings from "./SliderSettings";
import StarAverage from "./StarAverage";
import Favourite from "./Favourite";
import Description from "./Description";
import AddItem from "./AddItem";
import { useFavourites } from "./FavouritesContext";

const InterestedTalks = () => {
  const { interestedTalks, toggleFavourite } = useFavourites();
  const [openDesc, setOpenDesc] = useState(null);

  const toggleDesc = (index) => {
    setOpenDesc(openDesc === index ? null : index);
  };

  return (
    <SliderSettings>
      {(settings) => (
        <div style={{ margin: "0 auto", width: "80%" }} className="py-5">
          <h2 className="text-2xl mb-4">Interested Talks</h2>
          <Slider {...settings}>
            {interestedTalks.length > 0 ? (
              interestedTalks.map((talk, index) => (
                <div key={talk.id} className="flex flex-col items-center px-20">
                  <Favourite
                    selected={true}
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
              ))
            ) : (
              <p className="text-center">No Talks Added to Interested Yet!</p>
            )}
          </Slider>
        </div>
      )}
    </SliderSettings>
  );
};

export default InterestedTalks;