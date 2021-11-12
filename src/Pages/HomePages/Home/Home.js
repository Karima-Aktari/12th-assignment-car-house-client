import React from 'react';
import ShowProducts from '../ShowProducts/ShowProducts';
import Banner from '../Banner/Banner';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ShowProducts></ShowProducts>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;