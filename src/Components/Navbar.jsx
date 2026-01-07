import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";


const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `text-white transition px-3 py-2 rounded-md
     hover:text-cyan-400
     ${isActive ? "text-cyan-400" : ""}`;

  const links = (
    <>
      <ScrollLink
  to="hero"
  smooth={true}
  duration={800} 
>
  <li onClick={() => setOpen(false)}>
        <NavLink to="/" className={navLinkClass}>
          Home
        </NavLink>
      </li>
</ScrollLink>
      

      <li onClick={() => setOpen(false)}>
        <NavLink to="/" className={navLinkClass}>
          About
        </NavLink>
      </li>

      <li onClick={() => setOpen(false)}>
        <NavLink to="/blogs" className={navLinkClass}>
          Blogs
        </NavLink>
      </li>


      <ScrollLink
        to="contact"
        smooth={true}
        duration={900} // milliseconds
      >
         <li onClick={() => setOpen(false)}>
        <NavLink to="/" className={navLinkClass}>
          Contact
        </NavLink>
      </li>
      </ScrollLink>

     
    </>
  );

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#000c16]/80 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-16 py-4">

        {/* Logo */}
        <Link to="/" className=" dancing-script flex items-center gap-2">
          <h3 className="text-2xl md:text-4xl font-extrabold text-cyan-400">
            Junayed <span className="text-white">Khan</span>
          </h3>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 list-none">
          {links}
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-md bg-cyan-400 text-black"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-[400px] w-[100%]  bg-[#050B14]
        transform ${open ? "translate-x-0" : "translate-x-full"}
        transition-transform duration-300 ease-in-out z-40`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b border-cyan-400/20">
          <h2 className="text-lg font-semibold text-white">Menu</h2>
          <button onClick={() => setOpen(false)}>
            <X size={22} className="text-white" />
          </button>
        </div>

        <ul className="flex flex-col gap-4 px-6 py-6 list-none">
          {links}
        </ul>

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-center ml-24 mt-12">
          <h3 className="federant-bold  text-xl md:text-xl font-bold text-cyan-400 text-center">
            Junayed <span className="text-white text-center">Khan</span>
          </h3>
        </Link>

        <div className="divider border-t-1 border-cyan-400/20"></div>


      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
