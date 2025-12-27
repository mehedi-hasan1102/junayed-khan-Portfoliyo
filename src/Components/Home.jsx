import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Footer from './Footer';
import PortfolioSection from '../Components/PortfolioSection'
import Services from './Services';
import Contact from './Contact';
import BlogPage from './BlogPost';
import Blogs from './Blogs/Blogs';

const Home = () => {
    return (
        <div>
                <Navbar></Navbar>
                <Hero></Hero>
            <Services></Services>
            <PortfolioSection></PortfolioSection>
            <Blogs></Blogs>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;