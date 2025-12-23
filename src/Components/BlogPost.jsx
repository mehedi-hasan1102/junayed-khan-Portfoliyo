import React from "react";

const BlogPage = () => {
  return (
    <section className="bg-gray-50 min-h-screen py-12 px-4">
      <div className="max-w-5xl mx-auto">
        
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">
            My <span className="text-cyan-600">Blog</span>
          </h1>
          <p className="text-gray-500 mt-3">
            Sharing my learning journey, projects & real-world problem solving
          </p>
        </div>

        {/* Blog Card */}
        <div className="bg-white rounded-2xl shadow-md p-8">
          <span className="text-sm text-cyan-600 font-semibold">
            React • Tailwind CSS
          </span>

          <h2 className="text-2xl font-bold text-gray-800 mt-3">
            How I Built My Portfolio Website Using React & Tailwind CSS
          </h2>

          <p className="text-gray-500 text-sm mt-1">
            Published on January 2025 • 5 min read
          </p>

          <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
            <p>
              Building a personal portfolio is an essential step for every web
              developer. It showcases not only projects, but also skills,
              creativity, and problem-solving ability.
            </p>

            <p>
              In this blog, I will explain how I built my portfolio website using
              React and Tailwind CSS, focusing on clean UI, responsiveness, and
              performance.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6">
              🔹 Technologies I Used
            </h3>

            <ul className="list-disc list-inside text-gray-600">
              <li>React.js for component-based UI</li>
              <li>Tailwind CSS for fast and responsive styling</li>
              <li>React Router for page navigation</li>
              <li>Git & GitHub for version control</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6">
              🔹 What I Learned
            </h3>

            <p>
              Through this project, I improved my understanding of reusable
              components, responsive layouts, and modern UI practices. Tailwind
              CSS helped me design faster without writing custom CSS.
            </p>

            <p>
              This portfolio is continuously evolving as I learn new
              technologies and improve my skills.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-8">
            <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2 rounded-lg transition">
              View Live Project
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BlogPage;
