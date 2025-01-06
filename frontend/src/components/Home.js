import React from 'react';
import Search from './Search';
import useFetchData from './useFetchData';
import Itinerary from './Itinerary';
import { ItineraryProvider } from './ItineraryContext';
import { FavouritesProvider } from './FavouritesContext';
import Popup from './Popup'
import Nav from './Nav';

const Home = () => {
    const {status, talks} = useFetchData();
    if (status === 'fetched')
        
    return(
<FavouritesProvider>
        <ItineraryProvider>
            <Nav />
            <span>
                <Popup />
            </span>
            <div>
                <Itinerary />
            </div>
            <div>
            </div>
            <div>
                <Search talks = {talks}/>
            </div>
            <div className='pt-5'>
            </div>
        </ItineraryProvider>
        </FavouritesProvider>
    )
}
export default Home;