import BlogCard from "./BlogCard";

const blogs = [
  {
    id: "custom-website",
    title: "What is a Custom Website?",
    desc: "A custom website is built from scratch to match your business goals, branding, and performance needs.",
    img: "https://i.ibb.co/7kH1C1P/custom-web.jpg",
  },
  {
    id: "business-website",
    title: "Why Does a Business Need a Website?",
    desc: "A business website helps build trust, increase visibility, and generate more leads online.",
    img: "https://i.ibb.co/W2HjR7k/business.jpg",
  },
  {
    id: "ecommerce",
    title: "What is an E-commerce Website & Why Is It Important?",
    desc: "E-commerce websites allow customers to buy products online easily and securely.",
    img: "https://i.ibb.co/s2n0G9j/ecommerce.jpg",
  },
  {
    id: "static-vs-dynamic",
    title: "Static vs Dynamic Website – Which One is Better?",
    desc: "Learn the difference between static and dynamic websites and choose the right one for your business.",
    img: "https://i.ibb.co/4gB8xVZ/static-dynamic.jpg",
  },
  {
    id: "responsive",
    title: "Why is a Mobile Responsive Website Important?",
    desc: "Mobile-friendly websites improve user experience, SEO ranking, and conversion rate.",
    img: "https://i.ibb.co/7GcQZ2B/responsive.jpg",
  },
  {
    id: "business-growth",
    title: "How Can a Website Help a Business Grow?",
    desc: "Websites help businesses grow by improving branding, availability, and customer trust.",
    img: "https://i.ibb.co/Tc0H5Vf/growth.jpg",
  },
];

const Blogs = () => {
  return (
    <section className="bg-[#050B14] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-cyan-400 uppercase tracking-widest text-sm">
            Blogs
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
            Web Development Insights
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
