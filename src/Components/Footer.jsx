import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0f1115] text-white py-12 px-6">
      {/* <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        <div>
          <h2 className="text-3xl font-bold mb-3">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-600">
              J
            </span>
            unayed
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Full Stack Developer passionate about building modern and user-friendly digital products.
          </p>

          <div className="flex items-center gap-4 mt-4">
            <a
              href="#"
              className="p-2 rounded-full bg-gray-800 hover:bg-rose-600 duration-300"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-gray-800 hover:bg-rose-600 duration-300"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-gray-800 hover:bg-rose-600 duration-300"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-rose-500">Quick Links</h3>
          <ul className="flex flex-col gap-3 text-gray-400">
            <li className="hover:text-rose-500 duration-300 cursor-pointer">Home</li>
            <li className="hover:text-rose-500 duration-300 cursor-pointer">About</li>
            <li className="hover:text-rose-500 duration-300 cursor-pointer">Projects</li>
            <li className="hover:text-rose-500 duration-300 cursor-pointer">Skills</li>
            <li className="hover:text-rose-500 duration-300 cursor-pointer">Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-rose-500">Contact</h3>
          <p className="text-gray-400 text-sm mb-2">Email: junayed@gmail.com</p>
          <p className="text-gray-400 text-sm mb-2">Phone: +880 1234-567890</p>
          <p className="text-gray-400 text-sm">Location: Dhaka, Bangladesh</p>
        </div>

      </div> */}

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-10 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Junayed | All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
