import React from "react";
import PortfolioCard from "./PortfolioCard";

const PortfolioSection = () => {
  const portfolioData = [
    {
      image: "../../src/assets/Cat.JPG",
      title: "The services provide for design",
      category: "Pets Shop",
      views: 501,
      links: [
        { label: "Live Demo", url: "https://junayed-khan24.github.io/assignment-3--0001/" },
        { label: "GitHub", url: "https://github.com/junayed-khan24/assignment-3--0001" }
      ],
    },
    {
      image: "../../src/assets/Capture.JPG",
      title: "Mobile app landing design & app maintain",
      category: "Bangladesh 2.0",
      views: 780,
      links: [
        { label: "Live Demo", url: "https://junayed-khan24.github.io/Assingment-1/" },
        { label: "GitHub", url: "https://github.com/junayed-khan24/Assingment-1" }
      ],
    },
    {
      image: "../../src/assets/tee.JPG",
      title: "Logo design creativity & Application",
      category: "Branding",
      views: 320,
      links: [
        { label: "Live Demo", url: "https://junayed-khan24.github.io/tea-house-with-tailwind/" },
        { label: "GitHub", url: "https://github.com/junayed-khan24/tea-house-with-tailwind" }
      ],
    },
    {
      image: "../../src/assets/188147906.png",
      title: "Mobile app landing design & services",
      category: "App UI",
      views: 265,
      links: [
        { label: "Live Demo", url: "https://example.com/demo4" },
      ],
    },
    {
      image: "../../src/assets/5ef32588ca14e2124d041f32a4e978c2.jpg",
      title: "Design for technology & services",
      category: "Technology",
      views: 380,
      links: [
        { label: "Live Demo", url: "https://example.com/demo5" },
        { label: "GitHub", url: "https://github.com/user/repo5" }
      ],
    },
    {
      image: "https://i.ibb.co.com/0MvXcC2/dark-ui.jpg",
      title: "App for technology & services",
      category: "Product UI",
      views: 450,
      links: [
        { label: "Live Demo", url: "https://example.com/demo6" },
      ],
    },
  ];

  return (
    <div className="py-16 px-4 md:px-8 lg:px-20 bg-[#0f1115] min-h-screen">
      <div className="text-center mb-12">
        <p className="text-rose-500 tracking-wider mb-1 text-sm">
          ✦ A GLIMPSE INTO MY CREATIVE WORK SHOWCASE ✦
        </p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white">
          My Portfolio
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
        {portfolioData.map((item, index) => (
          <PortfolioCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default PortfolioSection;
