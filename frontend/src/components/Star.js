import React from "react";
import { FaStar } from "react-icons/fa";

export default function Star(props) {
  return (
    <div className={`inline-flex items-center justify-center rounded-full p-1 cursor-pointer ${props.selected ? "border-2 border-blue-500 bg-blue-500" : "border-2 border-blue-500 bg-blue-500"}`}
      onClick={props.onSelect}>
      <FaStar color={props.selected ? "yellow" : "#e2e8f0"} />
    </div>
  );
}
