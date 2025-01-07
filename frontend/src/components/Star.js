import React from "react";
import { FaStar } from "react-icons/fa";

export default function Star(props) {
  return (
    <div className={`inline-flex items-center justify-center rounded-full p-1 cursor-pointer ${props.selected}`}
      onClick={props.onSelect}>
      <FaStar color={props.selected ? "#ECC94B" : "#A0AEC0"} />
    </div>
  );
}