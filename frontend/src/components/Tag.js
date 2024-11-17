import React from "react";

function Tag({ text, onClick }) {
  const tagColors = {
    CSS: "#f56565",
    javascript: "#ed8936",
    react: "#81e6d9",
    "real-time": "#b794f4",
    Sass: "#6b46c1",
    "unit testing": "#97266d",
    mocha: "#38a169",
    HTML5: "#38b2ac",
    "socket.io": "#ed64a6",
    es6: "#f6e05e",
    "full-stack": "#7f9cf5",
    "continuous delivery": "#c05621",
    CORS: "#fc8181",
    security: "#d53f8c",
    patterns: "#553c9a",
    archtecture: "#5a67d8",
    angular: "#2b6cb0",
    frameworks: "#2f855a",
    webrtc: "#f687b3",
    node: "#68d391"
  };

  const color = tagColors[text] || tagColors.default;

  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }} 
      className="text-white px-2 py-1 text-sm rounded-lg hover:opacity-80 transition"
    >
      {text}
    </button>
  );
}

export default Tag;
