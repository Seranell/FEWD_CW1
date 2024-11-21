import React from 'react';
// import DisplaySpeakers from './DisplaySpeakers'
import Search from './Search';
import useFetchData from './useFetchData';
import Session from './Session';
const Home = () => {
    const {status, talks} = useFetchData();
    if (status === 'fetched')
    return(
        <div>
            <div>
                <Search talks = {talks}/>
            </div>
            <div className='pt-5'>
                {/* <Session talks = {talks}/> */}
            </div>
        </div>
    )
}
export default Home;