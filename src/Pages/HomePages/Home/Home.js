import React from 'react';
import ShowProducts from '../ShowProducts/ShowProducts';
import Banner from '../Banner/Banner';
import Reviews from '../Reviews/Reviews';
import Offers from '../Offers/Offers';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <ShowProducts></ShowProducts>
            <Reviews></Reviews>
            <Offers></Offers>
        </div>
    );
};

export default Home;