import React from "react";
import { Link } from "react-router";

const PortfolioCard = ({ image, title, category, views, links }) => {
  return (
    <div
      className="
        group relative
        bg-gradient-to-br from-cyan-500/10 via-transparent to-cyan-500/10
        rounded-2xl
        p-[2px]
        hover:from-cyan-400/30 hover:to-cyan-400/30
        transition-all duration-500
      "
    >
      <div
        className="
          relative bg-[#050B14]
          rounded-2xl
          overflow-hidden
          shadow-xl
          group-hover:shadow-cyan-500/20
          transition-all duration-500
          group-hover:-translate-y-3
        "
      >
        {/* Image */}
        <figure className="relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="
              w-full h-56
              object-cover
              scale-100
              transition-all duration-700 ease-out
              brightness-80
              group-hover:scale-110
              group-hover:brightness-100
            "
          />

          {/* Image overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050B14]/90 via-[#050B14]/40 to-transparent" />
        </figure>

        {/* Content */}
        <div className="p-5">
          {/* Category */}
          <span
            className="
              inline-block
              text-cyan-400 text-xs font-extrabold
              tracking-widest uppercase
            "
          >
            {category}
          </span>

          {/* Title */}
          <h2
            className="
              mt-3
              text-lg font-extrabold
              text-gray-200
              leading-snug
              group-hover:text-cyan-300
              transition-colors duration-300
            "
          >
            {title}
          </h2>

          {/* Footer */}
          <div className="flex justify-between items-center mt-8">
            {/* Views */}
            <p className="flex items-center gap-2 text-gray-400 text-sm font-semibold">
              <span className="text-cyan-400 text-lg">👁</span>
              {views}
            </p>

            {/* Buttons */}
            <div className="flex gap-3">
              {links?.map((link, index) => (
                <Link
                  key={index}
                  to={link.url}
                  target="_blank"
                  className="
                    px-4 py-2
                    rounded-lg
                    text-sm font-bold
                    bg-cyan-500/90 text-white
                    hover:bg-cyan-400
                    hover:shadow-cyan-400/30
                    shadow-md
                    transition-all duration-300
                  "
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Glow line */}
        <span
          className="
            absolute inset-x-0 bottom-0 h-[2px]
            bg-gradient-to-r from-transparent via-cyan-400 to-transparent
            opacity-0 group-hover:opacity-100
            transition-opacity duration-500
          "
        />
      </div>
    </div>
  );
};

export default PortfolioCard;
