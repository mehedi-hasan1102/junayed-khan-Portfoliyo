"use client" // Framer Motion use korle eta shobar upore thakte hoy

import React from 'react';
import { motion, useScroll } from "framer-motion" // Note: Latest version e "framer-motion" use kora hoy

// Components Import
import Navbar from './Navbar';
import Hero from './Hero';
import Footer from './Footer';
import PortfolioSection from '../Components/PortfolioSection';
import Services from './Services';
import Contact from './Contact';
import HomeBlogs from './Blogs/HomeBlogs';

export default function ScrollLinked() {
    const { scrollYProgress } = useScroll();

    return (
        <>
            {/* Scroll Progress Bar */}
            <motion.div
                id="scroll-indicator"
                style={{
                    scaleX: scrollYProgress,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 6, // Height ektu komiye deya hoyeche jate bhalo dekhay
                    originX: 0,
                    backgroundColor: "#00FFFF",
                    zIndex: 100 // Jate Navbar er upore thake
                }}
            />
            
            <Content />
        </>
    );
} 

function Content() {
    return (
        <article
           className=''
        >
            <Hero />
            <Services />
            <PortfolioSection />
            <HomeBlogs />
            <Contact />
        </article>
    );
}

