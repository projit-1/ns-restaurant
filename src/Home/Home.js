import React from 'react';
import Button from '../Home/Button';
import Footer from '../Shared/Footer';
import Services from './Services';




const Home = () => {
    return (
        <div>
            <div className='flex items-center justify-center'> <Button>Checkout Your Food</Button></div>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;