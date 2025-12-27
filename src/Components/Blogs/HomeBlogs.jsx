import { Link } from "react-router-dom";
import { blogsData } from "./blogsData";
import BlogCard from "./BlogCard";

const HomeBlogs = () => {
  const homeBlogs = blogsData.slice(0, 3); // only 3 blogs

  return (
    <section className="bg-[#050B14] py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-cyan-400 uppercase tracking-widest text-sm">
            Blogs
          </p>
          <h2 className="text-2xl md:text-4xl font-bold text-white mt-2">
            Latest Blog Posts
          </h2>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {homeBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>

        {/* Show More */}
        <div className="text-center mt-12">
          <Link
            to="/blogs"
            className="inline-block text-sm md:text-base
            text-cyan-400 border border-cyan-400/30
            px-6 py-3 rounded-full
            hover:bg-cyan-400 hover:text-black transition"
          >
            Show More Blogs →
          </Link>
        </div>

      </div>
    </section>
  );
};

export default HomeBlogs;
