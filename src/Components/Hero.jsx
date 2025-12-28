// Hero.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import img from "../../src/assets/junayed.png";

const Hero = () => {
  const texts = [
    "Front-End Developer.",
    "MERN Stack Developer.",
    "Full Stack Developer.",
    "Web Designer.",
    "React Developer.",
  ];

  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState("");

  const TYPING_DURATION = 1200;

  useEffect(() => {
    const currentText = texts[textIndex];
    const totalChars = currentText.length;
    const charSpeed = TYPING_DURATION / totalChars;

    let timeout;

    if (!isDeleting && charIndex < totalChars) {
      timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, charSpeed);
    } else if (!isDeleting && charIndex === totalChars) {
      timeout = setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, charSpeed / 2);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  // Motion variants
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const imageVariants = {
    hover: { rotate: 12, scale: 1.05, transition: { duration: 0.5, type: "spring" } },
  };

  return (
    <section id="hero" className="bg-[#050B14] pt-12 md:pt-20">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT SIDE */}
          <motion.div
            className="order-2 md:order-1 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-sm sm:text-lg text-cyan-400 mb-2 font-medium">
              Welcome to my world
            </h3>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4">
              I'm Junayed Khan
            </h1>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-600 via-cyan-400 to-cyan-300 bg-clip-text text-transparent mb-6">
              <span className="text-white">A</span> {displayText}
            </h2>

            <p className="text-base sm:text-lg text-gray-300 mb-6 leading-relaxed">
              I create beautiful and functional web experiences. Clean design and
              excellent user experience are the core focus of my work.
            </p>
            <div className="flex gap-2 justify-center md:justify-start">
              {/* View My Work Button */}
              <ScrollLink
                to="portfolio"
                smooth={true}
                duration={800}
                className="text-base sm:text-lg font-medium text-cyan-400
               border border-cyan-400/30 px-5 py-2 rounded-full
               hover:bg-cyan-400 hover:text-black transition-colors duration-300 cursor-pointer flex items-center gap-2"
              >
                View My Work →
              </ScrollLink>

              {/* Get In Touch Button */}
              <ScrollLink
                to="contact"
                smooth={true}
                duration={800}
                className="text-base sm:text-lg font-medium hover:bg-[#050B14] hover:text-cyan-400
               border hover:border-cyan-400/30 px-5 py-2 rounded-full
              bg-cyan-400 text-black transition-colors duration-300 cursor-pointer flex items-center gap-2"
              >
                Get In Touch
              </ScrollLink>
            </div>

          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            className="order-1 md:order-2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              className="relative"
              whileHover="hover"
              variants={imageVariants}
            >
              <div className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto border-8 border-cyan-500/20 rounded-2xl flex items-center justify-center overflow-hidden shadow-xl">
                <img
                  src={img}
                  alt="Junayed Khan Web Developer"
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="absolute -top-3 -right-3 lg:-top-5 lg:-right-5 w-14 h-14 md:w-20 md:h-20 bg-cyan-300 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-5 -left-3 lg:-bottom-5 lg:-left-5 w-16 h-16 md:w-24 md:h-24 bg-cyan-400 rounded-full opacity-20 animate-pulse" style={{ animationDelay: "1s" }}></div>
            </motion.div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
