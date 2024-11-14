import React, { useState, useEffect } from "react";

function ConferenceList() {
  const [talks, setTalks] = useState([]);
  const [loading, setLoading] = useState(true);

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
    <>
      <div>
        {talks.map((talk) => (
          <span key = {talk.id}>
            <p>Speaker Name: {talk.speaker}</p>
          </span>
          
        ))}
      </div>
    </>
  );
}

export default ConferenceList;
