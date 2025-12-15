import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Footer from './Footer';
import PortfolioSection from '../Components/PortfolioSection'

const Home = () => {
    return (
        <div className=''>
            <header className=''>
                <Navbar></Navbar>
                <Hero></Hero>

            </header>
            <About></About>
            <PortfolioSection></PortfolioSection>
            <Footer></Footer>
        </div>
    );
};

export default Home;