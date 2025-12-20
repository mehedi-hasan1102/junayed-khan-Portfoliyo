import {
  FaPaintBrush,
  FaCode,
  FaChartLine,
  FaHandshake,
} from "react-icons/fa";

import { motion } from "motion/react";

const services = [
  {
    title: "UI/UX Design",
    desc: "Each one showcases my approach and dedication to detail, creativity.",
    icon: <FaPaintBrush />,
  },
  {
    title: "Web Development",
    desc: "Business consulting consults us to provide expert advice.",
    icon: <FaCode />,
  },
  {
    title: "Business Solutions",
    desc: "Optimizing operations, enhancing productivity and driving growth.",
    icon: <FaChartLine />,
  },
  {
    title: "Profit Partners",
    desc: "Strategic collaboration to maximize revenue and long-term value.",
    icon: <FaHandshake />,
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Services = () => {
  return (
    <section className="bg-[#050B14] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-cyan-400 uppercase tracking-widest text-sm">
            What I Do
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
            What I Provide For You
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -8  }}
              className="group relative overflow-hidden rounded-2xl 
              border border-cyan-500/20 
              bg-gradient-to-br from-[#06121f] to-[#030814]
              p-8 transition-all duration-500
              hover:border-cyan-400"
            >
              {/* Hover BG */}
              <div
                className="absolute inset-0 bg-gradient-to-t 
                from-cyan-500/20 to-transparent
                opacity-0 group-hover:opacity-100 
                transition-opacity duration-500"
              ></div>

              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.15 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative z-10 w-12 h-12 rounded-full 
                text-white flex items-center justify-center
                bg-cyan-400 text-xl mb-5 
                shadow-[0_0_16px_rgba(34,211,238,0.9)]
                "
              >
                {item.icon}
              </motion.div>

              {/* Content */}
              <h3 className="relative z-10 text-xl font-semibold text-white mb-3">
                {item.title}
              </h3>
              <p className="relative z-10 text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
