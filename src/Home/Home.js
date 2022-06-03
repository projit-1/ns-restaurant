import React from 'react';
import Menu from '../Shared/Menu';
import Navbar from '../Shared/Navbar';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Menu></Menu>
        </div>
    );
};

export default Home;