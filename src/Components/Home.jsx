import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';

const Home = () => {
    return (
        <div className=''>
             <header className='mt-0'>
                <Navbar></Navbar>
                <div className='mt-6 '>
                   <Hero></Hero>
                </div>
             </header>

              <About></About>
            <h2 className='text-7xl mt-12 bg-[#F7F6F5]'>suna mia</h2>
            <h2 className='text-7xl mt-12 bg-[#f9f9f8]'>suna mia</h2>


        </div>
    );
};

export default Home;