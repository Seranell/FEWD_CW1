import React from 'react';
// import DisplaySpeakers from './DisplaySpeakers'
import Search from './Search';
import useFetchData from './useFetchData';
// import Session from './Session';
import Itinerary from './Itinerary';
import { ItineraryProvider } from './ItineraryContext';

const Home = () => {
    const {status, talks} = useFetchData();
    if (status === 'fetched')
    return(
        <ItineraryProvider>
            <div>
                <Itinerary />
            </div>
            <div>
                <Search talks = {talks}/>
            </div>
            <div className='pt-5'>
            </div>
        </ItineraryProvider>
    )
}
export default Home;