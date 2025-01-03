import React from "react";
import { FaBookmark } from "react-icons/fa6";
export default function Favourite( props) {
    return <FaBookmark 
    color={props.selected ? "#ECC94B" : "#A0AEC0"}
    onClick={props.onSelect} />;
}

