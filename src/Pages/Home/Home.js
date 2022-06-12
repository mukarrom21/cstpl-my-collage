import React from 'react';
import Contact from '../Contact/Contact';
import Footer from '../Shared/Footer';
import AboutCollage from './AboutCollage';
import Banner from './Banner';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div className=''>
            <Banner/>
            <AboutCollage/>
            <Testimonial/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;