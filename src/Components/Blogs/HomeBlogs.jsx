import { Link } from "react-router-dom";
import { blogsData } from "./blogsData";
import BlogCard from "./BlogCard";
import { motion } from "framer-motion";

const HomeBlogs = () => {
  const homeBlogs = blogsData.slice(0, 3); // only 3 blogs

  // Motion Variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 0px 20px rgba(34, 211, 238, 0.5)",
      transition: { type: "spring", stiffness: 300 },
    },
  };

  return (
    <section className="bg-[#050B14] py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-cyan-400 uppercase tracking-widest text-sm">Blogs</p>
          <h2 className="text-2xl md:text-4xl font-bold text-white mt-2">Latest Blog Posts</h2>
        </motion.div>

        {/* Blog Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {homeBlogs.map((blog) => (
            <motion.div key={blog.id} variants={cardVariants}>
              <BlogCard blog={blog} />
            </motion.div>
          ))}
        </motion.div>

        {/* Show More */}
        <motion.div className="text-center mt-12">
          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            className="inline-block"
          >
            <Link
              to="/blogs"
              className="text-sm md:text-base text-cyan-400 border border-cyan-400/30 px-6 py-3 rounded-full transition"
            >
              Show More Blogs →
            </Link>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default HomeBlogs;
