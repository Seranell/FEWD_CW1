import React from "react";
import { FaBookmark } from "react-icons/fa6";
export default function Favourite( props) {
    return <FaBookmark 
    color={props.selected ? "yellow" : "grey"}
    onClick={props.onSelect} />;
}

