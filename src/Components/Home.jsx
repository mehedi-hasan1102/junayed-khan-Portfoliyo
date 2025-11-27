import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Footer from './Footer';

const Home = () => {
    return (
        <div className=''>
             <header className=''>
                <Navbar></Navbar>
                <div className=' '>
                   <Hero></Hero>
                </div>
             </header>

              <About></About>
              <Footer></Footer>
        </div>
    );
};

export default Home;