import { motion } from "motion/react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";


const Contact = () => {
  return (
    <section id="contact" className="bg-[#050B14] py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto rounded-3xl 
        bg-gradient-to-br from-[#06121f] to-[#030814]
        border border-cyan-500/20 p-8 sm:p-10 md:p-14
        relative overflow-hidden"
      >
        {/* Glow corner */}
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-cyan-500/20 blur-3xl"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
          {/* LEFT */}
          <div>
            <h2
              className="
    text-2xl sm:text-3xl md:text-4xl
    font-bold text-white
    leading-tight mb-6
  "
            >
              Let’s <br />
              <span className="text-cyan-400 sm:text-3xl md:text-3xl">Build Modern Web Experiences</span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base">
              <div className="flex items-center gap-3 text-gray-300">
                <FaEnvelope className="text-cyan-400 text-lg" />
                <span className="hover:text-white transition">
                  junayedtokhan@gmail.com
                </span>
              </div>

              <div className="flex items-center gap-3 text-gray-300">
                <FaMapMarkerAlt className="text-cyan-400 text-lg" />
                <span>Mymensingh, Bangladesh</span>
              </div>

              <div className="flex items-center gap-3 text-gray-300">
                <FaPhoneAlt className="text-cyan-400 text-lg" />
                <span>01770-718121</span>
              </div>
              <div className="flex items-center gap-4 mt-4">
                <a
                  href="#"
                  className="p-2 rounded-full bg-gray-800 hover:bg-cyan-400 transition-colors duration-300"
                >
                  <FaFacebook size={20} />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-full bg-gray-800 hover:bg-cyan-400 transition-colors duration-300"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-full bg-gray-800 hover:bg-cyan-400 transition-colors duration-300"
                >
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <p
              className="
                text-xs sm:text-sm
                font-semibold uppercase tracking-widest
                text-cyan-400 mb-3
              "
            >
              Get In Touch
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Your Name",
                "Phone Number",
                "Your Email",
                "Subject",
              ].map((placeholder, i) => (
                <input
                  key={i}
                  type="text"
                  placeholder={placeholder}
                  className="
                    input input-info
                    bg-transparent text-white
                    border border-cyan-500/10
                    placeholder:text-gray-500
                    focus:border-cyan-400
                    focus:outline-none
                  "
                />
              ))}
            </div>

            <textarea
              placeholder="Your Message"
              rows={4}
              className="
                textarea input input-info w-full
                bg-transparent text-white
                border border-cyan-500/10
                placeholder:text-gray-500
                focus:border-cyan-400
                focus:outline-none
              "
            ></textarea>

            {/* BUTTON */}
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 25px rgba(34,211,238,0.6)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="
                mt-4 px-10 py-3
                rounded-full
                border border-cyan-400
                text-sm sm:text-base font-semibold
                text-white
                bg-gradient-to-r from-cyan-500/30 to-transparent
                hover:text-black hover:bg-cyan-400
                transition-all
              "
            >
              Let’s Talk →
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
