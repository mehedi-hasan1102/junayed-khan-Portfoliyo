import React from "react";
import PortfolioCard from "./PortfolioCard";
import Pets from "../../src/assets/Cat.JPG";
import Bangladesh from "../../src/assets/Capture.JPG";
import Tea from "../../src/assets/tee.JPG";
import Kids from "../../src/assets/kids.JPG";
import DevBoard from "../../src/assets/5ef32588ca14e2124d041f32a4e978c2.jpg";

const PortfolioSection = () => {
  const portfolioData = [
  {
  image: Pets,
  title: "Pet Shop Website Development with Responsive UI",
  category: "Web Development",
  views: 501,
  links: [
    { label: "Live Demo", url: "https://junayed-khan24.github.io/assignment-3--0001/" },
    { label: "GitHub", url: "https://github.com/junayed-khan24/assignment-3--0001" },
  ],
},
{
  image: Bangladesh,
  title: "Bangladesh 2.0 – Static Website Development",
  category: "Frontend Development",
  views: 780,
  links: [
    { label: "Live Demo", url: "https://junayed-khan24.github.io/Assingment-1/" },
    { label: "GitHub", url: "https://github.com/junayed-khan24/Assingment-1" },
  ],
},
{
  image: Tea,
  title: "Tea House Website Development Using Tailwind CSS",
  category: "Frontend Development",
  views: 320,
  links: [
    { label: "Live Demo", url: "https://junayed-khan24.github.io/tea-house-with-tailwind/" },
    { label: "GitHub", url: "https://github.com/junayed-khan24/tea-house-with-tailwind" },
  ],
},
{
  image: Kids,
  title: "Kids School Educational Website Development",
  category: "Web Development",
  views: 265,
  links: [
    { label: "Live Demo", url: "https://junayed-khan24.github.io/kids-school/" },
    { label: "GitHub", url: "https://github.com/junayed-khan24/kids-school" },
  ],
},
{
  image: DevBoard,
  title: "DevBoard Platform – Frontend Development Project",
  category: "Frontend Development",
  views: 380,
  links: [
    { label: "Live Demo", url: "https://devboardd.netlify.app/" },
    { label: "GitHub", url: "https://github.com/junayed-khan24/assinmentt-5" },
  ],
},
{
  image: DevBoard,
  title: "DevBoard Application UI Development & Functionality",
  category: "Frontend Development",
  views: 450,
  links: [
    { label: "Live Demo", url: "https://devboardd.netlify.app/" },
    { label: "GitHub", url: "https://github.com/junayed-khan24/assinmentt-5" },
  ],
},
  ];

  return (
    <div
      id="portfolio"
      className="py-16 px-4 md:px-8 lg:px-20 bg-[#050B14] min-h-screen"
    >
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-cyan-400 tracking-wider mb-1 text-sm">
          ✦ A GLIMPSE INTO MY CREATIVE WORK SHOWCASE ✦
        </p>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-300">
          My Portfolio
        </h1>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
        {portfolioData.map((item, index) => (
          <PortfolioCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default PortfolioSection;
