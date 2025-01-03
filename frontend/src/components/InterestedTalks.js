import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderSettings from "./SliderSettings";
import Tag from "./Tag";
import StarAverage from "./StarAverage";
import { useFavourites } from "./FavouritesContext";

const InterestedTalks = () => {
  const { interestedTalks } = useFavourites();

  return (
    <SliderSettings>
      {(settings) => (
        <div style={{ margin: "0 auto", width: "80%" }} className="p-5">
          <h2 className="text-2xl mb-4">Interested Talks</h2>
          <Slider {...settings}>
            {interestedTalks.length > 0 ? (
              interestedTalks.map((talk) => (
                <div key={talk.id} className="flex flex-col items-center px-20">
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
                </div>
              ))
            ) : (
              <p>No Talks Added to Interested Yet!</p>
            )}
          </Slider>
        </div>
      )}
    </SliderSettings>
  );
};

export default InterestedTalks;