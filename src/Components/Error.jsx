import React from "react";
import { Link } from "react-router-dom";
import { RiErrorWarningLine } from "react-icons/ri";

const Error = () => {
  return (
    <div
      className="
        flex flex-col items-center justify-center
        min-h-screen
        bg-gradient-to-br
        from-gray-900
        via-gray-800
        to-gray-700
        px-4
        text-center
      "
    >
      {/* Error Icon */}
      <RiErrorWarningLine
        className="
          text-cyan-400
          text-9xl
          mb-8
          animate-pulse
          drop-shadow-[0_0_25px_rgba(34,211,238,0.6)]
        "
      />

      {/* Error Text */}
      <h1 className="text-cyan-300 text-7xl font-extrabold mb-4 tracking-wider">
        404
      </h1>

      <h2 className="text-white text-2xl md:text-3xl font-bold mb-6">
        Oops! Page Not Found
      </h2>

      <p className="text-gray-300 max-w-md mb-10 leading-relaxed">
        The page you are looking for might have been removed, renamed,
        or is temporarily unavailable.
      </p>

      {/* Go Home Button */}
      <Link
        to="/"
        className="
          px-8 py-3
          rounded-xl
          font-bold
          text-gray-900
          bg-gradient-to-r from-cyan-300 to-cyan-500
          hover:from-cyan-400 hover:to-cyan-600
          shadow-xl shadow-cyan-500/30
          transition-all duration-300
          hover:scale-105
        "
      >
        Go Back Home
      </Link>

      {/* Illustration */}
      <div className="mt-16">
        <img
          src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
          alt="404 Illustration"
          className="
            w-64 md:w-96
            mx-auto
            rounded-2xl
            opacity-90
            shadow-2xl shadow-black/40
          "
        />
      </div>
    </div>
  );
};

export default Error;
