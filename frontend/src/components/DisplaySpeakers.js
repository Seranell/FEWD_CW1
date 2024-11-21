import React, {useState} from "react";
import useFetchData from "./useFetchData";
import Talk from "./Talk";
// import Search from "./Search"
    
const DisplaySpeakers = () =>{
    const {status, talks} = useFetchData();
    if (status === 'fetched')
        return(
                <Talk talks = {talks} />
    )
}

export default DisplaySpeakers