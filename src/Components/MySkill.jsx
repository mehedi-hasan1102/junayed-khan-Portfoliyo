import React from "react";
import Marquee from "react-fast-marquee";
import figma from '../assets/figmaIcon.png';
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaBootstrap,
} from "react-icons/fa";
import { IoLogoFigma, IoLogoFirebase, IoLogoNodejs } from "react-icons/io5";
import { SiTailwindcss, SiNextdotjs, SiMongodb, SiExpress } from "react-icons/si";

const MySkill = () => {
  const skills = [
    { icon: <FaHtml5 size={28} className="text-orange-500" />, name: "HTML" },
    { icon: <FaCss3Alt size={28} className="text-blue-500" />, name: "CSS" },
    { icon: <FaJsSquare size={28} className="text-yellow-400" />, name: "JavaScript" },
    { icon: <FaReact size={28} className="text-cyan-400" />, name: "React JS" },
    { icon: <SiTailwindcss size={28} className="text-sky-400" />, name: "TailwindCSS" },
    { icon: <IoLogoFirebase size={28} className="text-orange-400" />, name: "Firebase" },
    { icon: <IoLogoNodejs size={28} className="text-green-700" />, name: "Node.js" },
    { icon: <FaBootstrap size={28} className="text-indigo-500" />, name: "Bootstrap" },
    { icon: <SiExpress size={28} className="text-white" />, name: "Express.js" },
    { icon: <SiNextdotjs size={28} className="text-gray-200" />, name: "Next.js" },
    { icon: <SiMongodb pauseOnHover={true} size={32} className="text-green-500" />, name: "MongoDB" },
    { icon: <img className="w-6 h-6" src={figma} alt="Figma" />, name: "Figma" },
  ];

  return (
    <div className="bg-transparent">
      <Marquee speed={50} pauseOnHover={true}>
        <div className="flex gap-5 items-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="
                p-1
                bg-[#1d1f25] 
                w-12
                h-12
                rounded-md 
                shadow-lg 
                flex 
                flex-col 
                justify-center 
                items-center 
                border 
                border-gray-300
                hover:border-cyan-400
                hover:shadow-cyan-300/50
                transition-all duration-300
              "
            >
              {skill.icon}
              <p className="text-gray-300 mt-1 text-[8px]">{skill.name}</p>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default MySkill;
