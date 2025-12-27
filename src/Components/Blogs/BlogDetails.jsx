import { useParams, Link } from "react-router-dom";
import blogImg1 from "../../assets/188147906.png";
const blogDetails = {
  "custom-website": {
    image: blogImg1,
    title: "What is a Custom Website?",
    content:
      "A custom website is built specifically for a business without using pre-made templates. It offers better branding, faster performance, flexibility, and scalability. Businesses prefer custom websites because they perfectly match their goals and provide long-term value. Custom websites are also SEO-friendly, secure, and easier to scale as your business grows.",
  },
  "business-website": {
    image: blogImg1,
    title: "Why Does a Business Need a Website?",
    content:
      "A website gives your business a professional online presence and builds trust with potential customers. It strengthens brand identity, increases visibility, generates more leads, and works 24/7 for your business. Customers can learn about your services anytime, which helps grow sales and credibility.",
  },
  ecommerce: {
    image: blogImg1,
    title: "What is an E-commerce Website & Why Is It Important?",
    content:
      "An e-commerce website allows businesses to sell products online with secure payment systems, order management, and customer convenience. It helps reach more customers, increase sales, and automate business processes efficiently.",
  },
  "static-vs-dynamic": {
    image: blogImg1,
    title: "Static vs Dynamic Website – Which One is Better?",
    content:
      "Static websites are simple, fast, and cost-effective, while dynamic websites provide advanced features, database integration, and easy content management. The right choice depends on your business goals, budget, and future scalability.",
  },
  responsive: {
    image: blogImg1,
    title: "Why is a Mobile Responsive Website Important?",
    content:
      "A responsive website adapts perfectly to all screen sizes, improving user experience and SEO rankings. Since most users browse on mobile devices, responsive design helps increase engagement, trust, and conversion rates.",
  },
  "business-growth": {
    image: blogImg1,
    title: "How Can a Website Help a Business Grow?",
    content:
      "Websites help businesses grow through strong branding, online marketing, social proof, and 24/7 availability. For example, local businesses can attract customers from Google searches, while service providers can generate leads through contact forms.",
  },
};

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogDetails[id];

  if (!blog) {
    return (
      <section className="bg-[#050B14] min-h-screen flex items-center justify-center">
        <p className="text-gray-400">Blog not found</p>
      </section>
    );
  }

  return (
    <section className="bg-[#050B14] py-20 px-4 min-h-screen">
      <div className="max-w-4xl mx-auto">

        {/* Image */}
        <div className="rounded-2xl overflow-hidden mb-10 border border-cyan-400/10">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-[240px] md:h-[380px] object-cover"
          />
        </div>

        {/* Content Card */}
        <div
          className="bg-gradient-to-br from-[#071726] to-[#030814]
          border border-cyan-400/10 rounded-2xl p-8 md:p-10"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            {blog.title}
          </h1>

          <p className="text-gray-300 leading-relaxed text-base md:text-lg">
            {blog.content}
          </p>

          {/* Divider */}
          <div className="mt-10 h-px bg-cyan-400/10"></div>

          {/* Back Button */}
          <div className="mt-6">
            <Link
              to="/"
              className="inline-block text-sm text-cyan-400 
              border border-cyan-400/30 px-5 py-2 rounded-full
              hover:bg-cyan-400 hover:text-black transition"
            >
              ← Back to Blogs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
