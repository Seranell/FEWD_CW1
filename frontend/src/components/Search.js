import React, { useState } from "react";
// import FoodMenu from "./FoodMenu"
import Talk from "./Talk"
import Session from "./Session";

function Search({ talks }) {
   const [searchField, setSearchField] = useState("");

  const filtered = talks.filter((talk) => {
    return talk.speaker.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
      <div>
          <div className="p-8">
            <input
              className="form-control rounded-lg w-1/2"
              type="text"
              placeholder="Search ..."
              onChange={(e) =>  setSearchField(e.target.value)}
            />
          </div>
          <Talk talks={filtered} />
          <div className = "pt-5" >
          <Session talks={filtered} />
          </div>


      </div>
  
  );
}
export default Search;
